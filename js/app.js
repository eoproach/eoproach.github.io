const els = {
  bait:document.getElementById('baitCount'), point:document.getElementById('pointCount'), rod:document.getElementById('rodLevel'), notice:document.getElementById('notice'),
  attendance:document.getElementById('attendanceBtn'), start:document.getElementById('startBtn'), gaugeWrap:document.getElementById('gaugeWrap'), pointer:document.getElementById('pointer'), successZone:document.getElementById('successZone'), catchBtn:document.getElementById('catchBtn'),
  resultCard:document.getElementById('resultCard'), resultEmoji:document.getElementById('resultEmoji'), resultTitle:document.getElementById('resultTitle'), resultDesc:document.getElementById('resultDesc'),
  book:document.getElementById('fishBook'), reset:document.getElementById('resetBtn'), float:document.getElementById('float'), attendanceBoard:document.getElementById('attendanceBoard'), attendanceProgress:document.getElementById('attendanceProgress'),
  upgradeBtn:document.getElementById('upgradeBtn'), upgradeCost:document.getElementById('upgradeCost'), rodDesc:document.getElementById('rodDesc'), missionList:document.getElementById('missionList'), missionProgress:document.getElementById('missionProgress'),
  quizQuestion:document.getElementById('quizQuestion'), quizOptions:document.getElementById('quizOptions'), bookRate:document.getElementById('bookRate')
};
let state = loadState(); ensureDailyMissions(state);
let fishing=false, pos=0, direction=1, rafId=null;
const missions = [
  {id:'catch', label:'물고기 3마리 잡기', goal:3, reward:'미끼 +2', check:s=>s.missions.catch, apply:s=>s.bait+=2},
  {id:'rare', label:'희귀 이상 1마리 잡기', goal:1, reward:'80P', check:s=>s.missions.rare, apply:s=>s.point+=80},
  {id:'point', label:'오늘 100P 획득', goal:100, reward:'미끼 +3', check:s=>s.missions.point, apply:s=>s.bait+=3}
];
function render(){
  ensureDailyMissions(state);
  const r = successRange(state.rod);
  els.successZone.style.left = `${r.min}%`; els.successZone.style.width = `${r.width}%`;
  els.bait.textContent=state.bait; els.point.textContent=state.point; els.rod.textContent=state.rod;
  els.attendance.disabled = state.lastAttendance === todayKey(); els.start.disabled = state.bait <= 0 || fishing;
  const cost = upgradeCost(state.rod); els.upgradeCost.textContent = state.rod >= 10 ? 'MAX' : `${cost}P`; els.upgradeBtn.disabled = state.rod >= 10 || state.point < cost;
  els.rodDesc.textContent = `현재 성공 구간 ${Math.round(r.width)}% · 희귀 확률 소폭 증가`;
  renderAttendance(); renderMissions(); renderBook(); renderQuiz();
}
function renderAttendance(){
  const rewards=[3,3,4,4,5,5,8]; els.attendanceProgress.textContent=`${state.attendanceStreak%7}/7`;
  els.attendanceBoard.innerHTML = rewards.map((v,i)=>`<div class="day ${i < state.attendanceStreak%7 ? 'done':''}"><b>${i+1}일</b><span>미끼 ${v}</span></div>`).join('');
}
function renderMissions(){
  const done = missions.filter(m => state.missions.claimed[m.id]).length; els.missionProgress.textContent = `${done}/3`;
  els.missionList.innerHTML = missions.map(m=>{ const value=Math.min(m.check(state),m.goal), can=value>=m.goal&&!state.missions.claimed[m.id]; return `<li><div><strong>${m.label}</strong><br><small>${value}/${m.goal} · 보상 ${m.reward}</small></div><button class="btn tiny" data-mission="${m.id}" ${can?'':'disabled'}>${state.missions.claimed[m.id]?'완료':'받기'}</button></li>` }).join('');
}
function renderBook(){
  const discovered = FISH_LIST.filter(f => state.caught[f.id]).length; els.bookRate.textContent = `${Math.round(discovered/FISH_LIST.length*100)}%`;
  els.book.innerHTML = FISH_LIST.map(f=>{ const count=state.caught[f.id]||0, locked=count===0; return `<li class="${locked?'locked':''}"><div class="left"><span class="emoji">${locked?'❔':f.emoji}</span><div><strong>${locked?'???':f.name}</strong><br><small>${locked?'아직 발견하지 못했어요':`${count}마리 · ${f.point}P · ${f.desc}`}</small></div></div><span class="grade ${f.grade}">${gradeLabel(f.grade)}</span></li>` }).join('');
}
function renderQuiz(){
  const quiz = QUIZZES[new Date().getDate() % QUIZZES.length]; els.quizQuestion.textContent = quiz.q;
  els.quizOptions.innerHTML = quiz.options.map((o,i)=>`<button class="btn secondary" data-quiz="${i}" ${state.lastQuiz===todayKey()?'disabled':''}>${o}</button>`).join('');
}
function showResult(success, fish, bonus=0){
  els.resultCard.hidden=false;
  if(success){ els.resultEmoji.textContent=fish.emoji; els.resultTitle.textContent=`${fish.name} 획득!`; els.resultDesc.textContent=`${gradeLabel(fish.grade)} 등급 · ${fish.point}P${bonus?` + 콤보 보너스 ${bonus}P`:''}`; }
  else { els.resultEmoji.textContent='💦'; els.resultTitle.textContent='아쉽게 놓쳤어요'; els.resultDesc.textContent='초록색 성공 구간에 맞춰 다시 도전해보세요.'; }
}
function moveGauge(){ pos += direction * (1.8 + state.rod*0.03); if(pos>=100){pos=100;direction=-1} if(pos<=0){pos=0;direction=1} els.pointer.style.left=`calc(${pos}% - 4px)`; rafId=requestAnimationFrame(moveGauge); }
els.attendance.addEventListener('click',()=>{ if(state.lastAttendance===todayKey())return; const rewards=[3,3,4,4,5,5,8]; const idx=state.attendanceStreak%7; state.bait+=rewards[idx]; state.attendanceStreak+=1; state.lastAttendance=todayKey(); saveState(state); els.notice.textContent=`출석 완료! ${idx+1}일차 보상 미끼 ${rewards[idx]}개를 받았습니다.`; render(); });
els.start.addEventListener('click',()=>{ if(state.bait<=0||fishing)return; fishing=true; pos=0; direction=1; state.bait-=1; saveState(state); els.resultCard.hidden=true; els.gaugeWrap.hidden=false; els.float.classList.add('bite'); els.notice.textContent='찌가 흔들립니다. 초록 구간에 맞춰 당겨보세요!'; render(); moveGauge(); });
els.catchBtn.addEventListener('click',()=>{ if(!fishing)return; cancelAnimationFrame(rafId); fishing=false; els.gaugeWrap.hidden=true; els.float.classList.remove('bite'); const success=isSuccess(pos,state.rod); let fish=null, bonus=0; if(success){ fish=getRandomFish(state.rod); state.combo+=1; bonus=Math.floor(state.combo/3)*10; const earned=fish.point+bonus; state.point+=earned; state.total+=1; state.caught[fish.id]=(state.caught[fish.id]||0)+1; state.missions.catch+=1; state.missions.point+=earned; if(fish.grade!=='normal') state.missions.rare+=1; els.notice.textContent=`성공! 현재 콤보 ${state.combo}회`; } else { state.combo=0; els.notice.textContent='실패! 콤보가 초기화되었습니다.'; } saveState(state); showResult(success,fish,bonus); render(); });
els.upgradeBtn.addEventListener('click',()=>{ const cost=upgradeCost(state.rod); if(state.point<cost||state.rod>=10)return; state.point-=cost; state.rod+=1; saveState(state); els.notice.textContent=`낚싯대가 Lv.${state.rod}로 강화되었습니다!`; render(); });
els.missionList.addEventListener('click',e=>{ const id=e.target.dataset.mission; if(!id)return; const m=missions.find(x=>x.id===id); if(!m||state.missions.claimed[id]||m.check(state)<m.goal)return; m.apply(state); state.missions.claimed[id]=true; saveState(state); els.notice.textContent=`미션 완료! ${m.reward} 보상을 받았습니다.`; render(); });
els.quizOptions.addEventListener('click',e=>{ const selected=Number(e.target.dataset.quiz); if(Number.isNaN(selected)||state.lastQuiz===todayKey())return; const quiz=QUIZZES[new Date().getDate()%QUIZZES.length]; state.lastQuiz=todayKey(); if(selected===quiz.answer){ state.bait+=2; els.notice.textContent='정답입니다! 금융 퀴즈 보상 미끼 2개 지급.'; } else { els.notice.textContent='아쉽지만 오늘 퀴즈 참여 완료! 내일 다시 도전하세요.'; } saveState(state); render(); });
els.reset.addEventListener('click',()=>{ if(confirm('모든 기록을 초기화할까요?')){ resetState(); state=loadState(); ensureDailyMissions(state); els.resultCard.hidden=true; els.notice.textContent='기록이 초기화되었습니다.'; render(); } });
render();
