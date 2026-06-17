const maps = [
  {name:'고요한 물안개 연못', level:1, icon:'🌫️', fish:['송사리','붕어','피라미','납자루','모래무지','미꾸리','동사리','참붕어','금붕어','황금 금붕어']},
  {name:'은빛 초승달 개울', level:10, icon:'🌙', fish:['버들치','산천어','쉬리','열목어','꺽지','돌고기','참갈겨니','은어','달빛 산천어','실버 쉬리']},
  {name:'에메랄드 호수', level:20, icon:'💎', fish:['잉어','향어','메기','떡붕어','강준치','쏘가리','배스','블루길','비단잉어','에메랄드 잉어']},
  {name:'수정 협곡', level:30, icon:'🏞️', fish:['가물치','꺽지왕','황쏘가리','협곡 메기','강철잉어','수정송어','바위장어','크리스탈 메기','수정 쏘가리','크리스탈 피쉬']},
  {name:'무지개 폭포', level:40, icon:'🌈', fish:['무지개송어','연어','은연어','철갑상어','폭포 장어','황금연어','비늘잉어','레인보우 트라웃','무지개 드래곤피쉬','황금 철갑상어']},
  {name:'산호의 군도', level:50, icon:'🪸', fish:['흰동가리','나비고기','복어','해마','쥐치','박스피쉬','엔젤피쉬','만다린피쉬','루비 해마','산호 수호어']},
  {name:'폭풍의 해역', level:60, icon:'🌊', fish:['고등어','삼치','방어','참치','청새치','돛새치','귀상어','청상아리','폭풍 참치','썬더 샤크']},
  {name:'심연의 해구', level:70, icon:'🌌', fish:['아귀','심해장어','블롭피쉬','대왕오징어','심해문어','랜턴피쉬','심연 가오리','그림자 장어','어비스 피쉬','그림자 크라켄']},
  {name:'영원의 빙하', level:80, icon:'❄️', fish:['벨루가','북극송어','빙하연어','물범어','일각고래','설원가오리','얼음상어','프로스트 피쉬','프로스트 드래곤피쉬','얼음고래']},
  {name:'아틀란티스 성역', level:90, icon:'🏛️', fish:['아틀란티스 가디언','바다의 정령어','심해 레비아탄','포세이돈 웨일','황금 용어','크라운 머메이드 피쉬','심해 크라켄','오션 피닉스','아틀란티스 드래곤','바다의 신 수호어']}
];
const rarities = [
  {key:'common', name:'일반', rate:60, gold:10, exp:5, emoji:'🐟'},
  {key:'uncommon', name:'고급', rate:25, gold:30, exp:15, emoji:'🐠'},
  {key:'rare', name:'희귀', rate:10, gold:100, exp:50, emoji:'🐡'},
  {key:'epic', name:'영웅', rate:4, gold:500, exp:200, emoji:'🦈'},
  {key:'legendary', name:'전설', rate:1, gold:3000, exp:1000, emoji:'🐉'}
];
const rods = ['나무 낚싯대','대나무 낚싯대','은빛 낚싯대','황금 낚싯대','아틀란티스 낚싯대'];
const state = JSON.parse(localStorage.getItem('ciderFishingKing') || 'null') || {
  level:1, exp:0, gold:0, diamond:0, bait:30, mapIndex:0, rodLevel:0, caught:{}, totalCatch:0, auto:false, achievements:{}
};
let autoTimer = null;
const $ = id => document.getElementById(id);
const expNeed = () => 100 + (state.level - 1) * 35;
const save = () => localStorage.setItem('ciderFishingKing', JSON.stringify(state));
function rarityByIndex(i){ return rarities[Math.min(4, Math.floor(i/2))]; }
function rollRarity(){
  const bonus = Math.min(2.5, state.rodLevel * 0.05);
  const table = [60-bonus*2,25,10+bonus,4+bonus*.7,1+bonus*.3];
  let r = Math.random()*table.reduce((a,b)=>a+b,0);
  for(let i=0;i<table.length;i++){ if((r-=table[i])<=0) return rarities[i]; }
  return rarities[0];
}
function fishOnce(){
  if(state.bait <= 0){ msg('미끼가 부족합니다. 상점에서 충전하세요.'); return; }
  state.bait--;
  const map = maps[state.mapIndex];
  const rarity = rollRarity();
  const candidates = map.fish.map((name,i)=>({name,i,rarity:rarityByIndex(i)})).filter(f=>f.rarity.key===rarity.key);
  const picked = candidates[Math.floor(Math.random()*candidates.length)] || {name:map.fish[0], i:0, rarity:rarities[0]};
  const key = `${state.mapIndex}-${picked.i}`;
  const first = !state.caught[key];
  state.caught[key] = (state.caught[key] || 0) + 1;
  state.totalCatch++;
  const value = Math.floor(picked.rarity.gold * (1 + state.rodLevel * .015));
  state.gold += value;
  addExp(picked.rarity.exp);
  if(first) state.diamond += 3;
  msg(`${picked.rarity.emoji} ${picked.name} 획득! ${value}골드${first ? ' · 신규 도감 +3다이아' : ''}`);
  checkAchievements(); save(); render();
}
function addExp(v){
  state.exp += v;
  while(state.exp >= expNeed() && state.level < 100){
    state.exp -= expNeed(); state.level++; state.bait += 5; state.diamond += 5;
    msg(`레벨업! Lv.${state.level} 달성 · 미끼 5개와 다이아 5개 획득`);
  }
}
function upgradeRod(){
  const cost = 100 + state.rodLevel * 75;
  if(state.gold < cost){ msg(`골드가 부족합니다. 강화 비용은 ${cost}골드입니다.`); return; }
  if(state.rodLevel >= 50){ msg('최대 강화 단계입니다.'); return; }
  state.gold -= cost; state.rodLevel++;
  msg(`낚싯대 강화 성공! +${state.rodLevel}`);
  save(); render();
}
function buyBait(){ if(state.diamond<10){msg('다이아가 부족합니다.');return;} state.diamond-=10; state.bait+=30; msg('미끼 30개를 구매했습니다.'); save(); render(); }
function claimDaily(){
  const today = new Date().toDateString();
  if(state.lastDaily === today){ msg('오늘 출석 보상은 이미 받았습니다.'); return; }
  state.lastDaily = today; state.bait += 20; state.diamond += 20; state.gold += 500;
  msg('출석 보상 획득! 미끼 20개 · 다이아 20개 · 500골드'); save(); render();
}
function checkAchievements(){
  const list = [
    ['catch10', state.totalCatch>=10, '물고기 10마리 포획', 20],
    ['catch100', state.totalCatch>=100, '물고기 100마리 포획', 100],
    ['legend', Object.keys(state.caught).some(k=>rarityByIndex(+k.split('-')[1]).key==='legendary'), '전설 물고기 포획', 200],
    ['collection50', Object.keys(state.caught).length>=50, '도감 50종 달성', 150],
    ['level50', state.level>=50, 'Lv.50 달성', 300]
  ];
  list.forEach(([key, ok, title, reward])=>{ if(ok && !state.achievements[key]){ state.achievements[key]=true; state.diamond += reward; msg(`업적 달성: ${title} · 다이아 ${reward}개`); }});
}
function msg(text){ const el=$('message'); el.textContent=text; el.classList.remove('toast'); void el.offsetWidth; el.classList.add('toast'); }
function render(){
  $('level').textContent = state.level; $('expText').textContent = `${state.exp} / ${expNeed()}`; $('gold').textContent = state.gold.toLocaleString(); $('diamond').textContent = state.diamond; $('bait').textContent = state.bait;
  const caughtCount = Object.keys(state.caught).length; $('collectionRate').textContent = `${caughtCount}%`; $('mapName').textContent = maps[state.mapIndex].name;
  const rodGrade = rods[Math.min(4, Math.floor(state.rodLevel/10))]; $('rodName').textContent = `${rodGrade} +${state.rodLevel}`;
  $('rodInfo').textContent = `강화 비용: ${(100 + state.rodLevel * 75).toLocaleString()}골드 · 판매 보너스 +${Math.floor(state.rodLevel*1.5)}%`;
  $('expBar').style.width = `${Math.min(100, state.exp/expNeed()*100)}%`; $('autoBtn').textContent = `자동낚시 ${state.auto?'ON':'OFF'}`;
  renderMaps(); renderCollection(); renderShop(); renderAchievements();
}
function renderMaps(){ $('maps').innerHTML = `<div class="list">${maps.map((m,i)=>{const open=state.level>=m.level;return `<div class="item ${open?'':'locked'}"><div><strong>${m.icon} ${m.name}</strong><small>해금 Lv.${m.level} · 수집 ${mapCaught(i)}/10</small></div><button class="secondary" onclick="selectMap(${i})" ${open?'':'disabled'}>${state.mapIndex===i?'선택됨':'이동'}</button></div>`}).join('')}</div>`; }
function mapCaught(i){ return Object.keys(state.caught).filter(k=>k.startsWith(i+'-')).length; }
function selectMap(i){ if(state.level < maps[i].level){ msg('아직 해금되지 않은 맵입니다.'); return;} state.mapIndex=i; msg(`${maps[i].name}으로 이동했습니다.`); save(); render(); }
function renderCollection(){
  $('collection').innerHTML = maps.map((m,mi)=>`<h3>${m.icon} ${m.name}</h3><div class="fish-grid">${m.fish.map((f,fi)=>{const key=`${mi}-${fi}`, known=state.caught[key], r=rarityByIndex(fi);return `<div class="fish-card ${known?'':'unknown'}"><div class="emoji">${known?r.emoji:'❔'}</div><strong>${known?f:'???'}</strong><small class="rarity-${r.key}">${r.name}${known?` · ${known}마리`:''}</small></div>`}).join('')}</div>`).join('');
}
function renderShop(){ $('shop').innerHTML = `<div class="shop-grid"><div class="shop-card"><strong>🎁 오늘의 출석 보상</strong><p class="hint">미끼 20개, 다이아 20개, 500골드</p><button class="primary" onclick="claimDaily()">출석 보상 받기</button></div><div class="shop-card"><strong>🐛 미끼 30개</strong><p class="hint">가격: 다이아 10개</p><button class="secondary" onclick="buyBait()">구매하기</button></div></div>`; }
function renderAchievements(){
  const data = [
    ['catch10','물고기 10마리 포획','다이아 20'],['catch100','물고기 100마리 포획','다이아 100'],['legend','전설 물고기 포획','다이아 200'],['collection50','도감 50종 달성','다이아 150'],['level50','Lv.50 달성','다이아 300']
  ];
  $('achievements').innerHTML = `<div class="list">${data.map(a=>`<div class="item"><div><strong>${state.achievements[a[0]]?'✅':'⬜'} ${a[1]}</strong><small>${a[2]}</small></div><span class="badge">${state.achievements[a[0]]?'완료':'진행중'}</span></div>`).join('')}</div>`;
}
function toggleAuto(){ state.auto=!state.auto; if(state.auto){ autoTimer=setInterval(fishOnce,3000); msg('자동낚시를 시작했습니다.'); } else { clearInterval(autoTimer); msg('자동낚시를 중지했습니다.'); } save(); render(); }
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab,.tab-panel').forEach(e=>e.classList.remove('active'));btn.classList.add('active');$(btn.dataset.tab).classList.add('active')}));
$('fishBtn').addEventListener('click', fishOnce); $('upgradeBtn').addEventListener('click', upgradeRod); $('autoBtn').addEventListener('click', toggleAuto); $('changeMapBtn').addEventListener('click',()=>document.querySelector('[data-tab="maps"]').click());
window.selectMap=selectMap; window.buyBait=buyBait; window.claimDaily=claimDaily;
render();
