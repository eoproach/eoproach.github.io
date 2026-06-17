const maps = [
  {name:'고요한 물안개 연못', level:1, icon:'🌫️', theme:'pond', fish:['송사리','붕어','피라미','납자루','모래무지','미꾸리','동사리','참붕어','금붕어','황금 금붕어']},
  {name:'은빛 초승달 개울', level:10, icon:'🌙', theme:'moon', fish:['버들치','산천어','쉬리','열목어','꺽지','돌고기','참갈겨니','은어','달빛 산천어','실버 쉬리']},
  {name:'에메랄드 호수', level:20, icon:'💎', theme:'lake', fish:['잉어','향어','메기','떡붕어','강준치','쏘가리','배스','블루길','비단잉어','에메랄드 잉어']},
  {name:'수정 협곡', level:30, icon:'🏞️', theme:'crystal', fish:['가물치','꺽지왕','황쏘가리','협곡 메기','강철잉어','수정송어','바위장어','크리스탈 메기','수정 쏘가리','크리스탈 피쉬']},
  {name:'무지개 폭포', level:40, icon:'🌈', theme:'rainbow', fish:['무지개송어','연어','은연어','철갑상어','폭포 장어','황금연어','비늘잉어','레인보우 트라웃','무지개 드래곤피쉬','황금 철갑상어']},
  {name:'산호의 군도', level:50, icon:'🪸', theme:'coral', fish:['흰동가리','나비고기','복어','해마','쥐치','박스피쉬','엔젤피쉬','만다린피쉬','루비 해마','산호 수호어']},
  {name:'폭풍의 해역', level:60, icon:'🌊', theme:'storm', fish:['고등어','삼치','방어','참치','청새치','돛새치','귀상어','청상아리','폭풍 참치','썬더 샤크']},
  {name:'심연의 해구', level:70, icon:'🌌', theme:'abyss', fish:['아귀','심해장어','블롭피쉬','대왕오징어','심해문어','랜턴피쉬','심연 가오리','그림자 장어','어비스 피쉬','그림자 크라켄']},
  {name:'영원의 빙하', level:80, icon:'❄️', theme:'ice', fish:['벨루가','북극송어','빙하연어','물범어','일각고래','설원가오리','얼음상어','프로스트 피쉬','프로스트 드래곤피쉬','얼음고래']},
  {name:'아틀란티스 성역', level:90, icon:'🏛️', theme:'atlantis', fish:['아틀란티스 가디언','바다의 정령어','심해 레비아탄','포세이돈 웨일','황금 용어','크라운 머메이드 피쉬','심해 크라켄','오션 피닉스','아틀란티스 드래곤','바다의 신 수호어']}
];

const rarities = [
  {key:'common', name:'일반', rate:60, gold:10, exp:5, emoji:'🐟', stars:1, asset:'assets/fish/fish-rarity-1.svg'},
  {key:'uncommon', name:'고급', rate:25, gold:30, exp:15, emoji:'🐠', stars:2, asset:'assets/fish/fish-rarity-2.svg'},
  {key:'rare', name:'희귀', rate:10, gold:100, exp:50, emoji:'🐡', stars:3, asset:'assets/fish/fish-rarity-3.svg'},
  {key:'epic', name:'영웅', rate:4, gold:500, exp:200, emoji:'🦈', stars:4, asset:'assets/fish/fish-rarity-4.svg'},
  {key:'legendary', name:'전설', rate:1, gold:3000, exp:1000, emoji:'🐉', stars:5, asset:'assets/fish/fish-rarity-5.svg'}
];
const rods = ['나무 낚싯대','대나무 낚싯대','은빛 낚싯대','황금 낚싯대','아틀란티스 낚싯대'];
const defaultState = {level:1, exp:0, gold:12450, diamond:850, bait:30, mapIndex:6, rodLevel:0, caught:{}, totalCatch:0, achievements:{}, auto:false};
const stored = JSON.parse(localStorage.getItem('ciderFishingKingV2') || localStorage.getItem('ciderFishingKing') || 'null');
const state = stored ? {...defaultState, ...stored, auto:false} : defaultState;
let autoTimer = null;
const $ = id => document.getElementById(id);
const expNeed = () => 100 + (state.level - 1) * 35;
const save = () => localStorage.setItem('ciderFishingKingV2', JSON.stringify(state));

function rarityByIndex(i){ return rarities[Math.min(4, Math.floor(i / 2))]; }
function mapCaught(i){ return Object.keys(state.caught).filter(k => k.startsWith(i + '-')).length; }
function totalCaughtTypes(){ return Object.keys(state.caught).length; }
function stars(n){ return '★'.repeat(n) + '☆'.repeat(5 - n); }
function rarityClass(key){ return `r-${key}`; }

function rollRarity(){
  const bonus = Math.min(3, state.rodLevel * 0.06);
  const table = [60 - bonus * 2, 25, 10 + bonus, 4 + bonus * .65, 1 + bonus * .35];
  let r = Math.random() * table.reduce((a,b)=>a+b,0);
  for(let i=0;i<table.length;i++){ if((r -= table[i]) <= 0) return rarities[i]; }
  return rarities[0];
}

function fishOnce(){
  if(state.bait <= 0){ toast('미끼가 부족합니다. 상점에서 충전하세요.'); return; }
  state.bait--;
  const map = maps[state.mapIndex];
  const rarity = rollRarity();
  const candidates = map.fish.map((name,i)=>({name,i,rarity:rarityByIndex(i)})).filter(f => f.rarity.key === rarity.key);
  const picked = candidates[Math.floor(Math.random() * candidates.length)] || {name:map.fish[0], i:0, rarity:rarities[0]};
  const key = `${state.mapIndex}-${picked.i}`;
  const first = !state.caught[key];
  state.caught[key] = (state.caught[key] || 0) + 1;
  state.totalCatch++;
  const value = Math.floor(picked.rarity.gold * (1 + state.rodLevel * .015 + totalCaughtTypes() * .001));
  state.gold += value;
  addExp(picked.rarity.exp);
  if(first) state.diamond += 3;
  toast(`${picked.rarity.emoji} ${picked.name} 획득! ${value.toLocaleString()}골드${first ? ' · 신규 도감 +3다이아' : ''}`);
  showCatchModal(picked, value, first);
  checkAchievements();
  save();
  render();
}

function addExp(v){
  state.exp += v;
  while(state.exp >= expNeed() && state.level < 100){
    state.exp -= expNeed();
    state.level++;
    state.bait += 5;
    state.diamond += 5;
  }
}

function upgradeRod(){
  const cost = 100 + state.rodLevel * 75;
  if(state.gold < cost){ toast(`골드가 부족합니다. 강화 비용은 ${cost.toLocaleString()}골드입니다.`); return; }
  if(state.rodLevel >= 50){ toast('최대 강화 단계입니다.'); return; }
  state.gold -= cost;
  state.rodLevel++;
  toast(`낚싯대 강화 성공! +${state.rodLevel}`);
  save(); render();
}

function buyBait(amount=30, cost=10){
  if(state.diamond < cost){ toast('다이아가 부족합니다.'); return; }
  state.diamond -= cost; state.bait += amount;
  toast(`미끼 ${amount}개를 구매했습니다.`);
  save(); render();
}

function buyGoldBait(){
  if(state.gold < 100){ toast('골드가 부족합니다.'); return; }
  state.gold -= 100; state.bait += 10;
  toast('미끼 10개를 구매했습니다.');
  save(); render();
}

function claimDaily(){
  const today = new Date().toDateString();
  if(state.lastDaily === today){ toast('오늘 출석 보상은 이미 받았습니다.'); return; }
  state.lastDaily = today; state.bait += 20; state.diamond += 20; state.gold += 500;
  toast('출석 보상 획득! 미끼 20개 · 다이아 20개 · 500골드');
  save(); render();
}

function toggleAuto(){
  state.auto = !state.auto;
  const btn = $('fishBtn');
  if(state.auto){
    btn.classList.add('is-auto'); btn.innerHTML = '<span>⚡</span> 자동낚시 ON';
    autoTimer = setInterval(fishOnce, 3000);
    toast('자동낚시를 시작했습니다.');
  }else{
    btn.classList.remove('is-auto'); btn.innerHTML = '<span>🎣</span> 낚시하기';
    clearInterval(autoTimer);
    toast('자동낚시를 중지했습니다.');
  }
  save(); render();
}

function checkAchievements(){
  achievementData().forEach(a => {
    if(a.now >= a.goal && !state.achievements[a.key]){
      state.achievements[a.key] = true;
      state.diamond += a.reward;
      toast(`업적 달성: ${a.title} · 다이아 ${a.reward}개`);
    }
  });
}

function achievementData(){
  const hasLegend = Object.keys(state.caught).some(k => rarityByIndex(+k.split('-')[1]).key === 'legendary');
  return [
    {key:'catch100', icon:'🐟', title:'물고기 100마리 잡기', now:state.totalCatch, goal:100, reward:50},
    {key:'legend', icon:'🏆', title:'전설 물고기 1마리 잡기', now:hasLegend?1:0, goal:1, reward:100},
    {key:'collection50', icon:'📖', title:'도감 50% 달성', now:totalCaughtTypes(), goal:50, reward:100},
    {key:'daily7', icon:'📅', title:'7일 연속 접속', now:state.lastDaily?1:0, goal:7, reward:50},
    {key:'level50', icon:'⭐', title:'Lv.50 달성', now:state.level, goal:50, reward:300}
  ];
}

function selectMap(i){
  if(state.level < maps[i].level){ toast(`Lv.${maps[i].level}부터 입장 가능합니다.`); return; }
  state.mapIndex = i;
  toast(`${maps[i].name}으로 이동했습니다.`);
  goTab('home'); save(); render();
}

function toast(text){
  const el = $('message');
  if(!el) return;
  el.textContent = text;
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
}

function goTab(target){
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('is-active', s.id === target));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('is-active', b.dataset.target === target));
}

function showCatchModal(picked, value, first){
  if(!first && picked.rarity.key !== 'legendary') return;
  $('catchIcon').innerHTML = `<img src="${picked.rarity.asset}" alt="">`;
  $('catchName').textContent = picked.name;
  $('catchMeta').textContent = `${picked.rarity.name} · ${value.toLocaleString()}골드 · EXP ${picked.rarity.exp}`;
  document.querySelector('.new-badge').style.display = first ? 'inline-grid' : 'none';
  $('catchModal').classList.add('is-open');
  $('catchModal').setAttribute('aria-hidden','false');
}
function closeCatchModal(){
  $('catchModal').classList.remove('is-open');
  $('catchModal').setAttribute('aria-hidden','true');
}

function render(){
  const currentMap = maps[state.mapIndex];
  $('level').textContent = state.level;
  $('expText').textContent = `${state.exp.toLocaleString()} / ${expNeed().toLocaleString()}`;
  $('gold').textContent = state.gold.toLocaleString();
  $('diamond').textContent = state.diamond.toLocaleString();
  $('bait').textContent = state.bait;
  $('mapName').textContent = currentMap.name;
  $('mapLevel').textContent = `Lv. ${currentMap.level} 이상`;
  $('expBar').style.width = `${Math.min(100, state.exp / expNeed() * 100)}%`;
  $('collectionCount').textContent = `${totalCaughtTypes()} / 100`;
  $('bonusRate').textContent = Math.floor(totalCaughtTypes() * .12);
  $('shopGold').textContent = state.gold.toLocaleString();
  $('shopDiamond').textContent = state.diamond.toLocaleString();
  document.querySelector('.fishing-stage').className = `fishing-stage ${currentMap.theme}`;
  renderMaps(); renderCollection(); renderShop(); renderAchievements();
}

function renderMaps(){
  $('mapList').innerHTML = maps.map((m,i)=>{
    const open = state.level >= m.level;
    const selected = state.mapIndex === i;
    return `<article class="map-card ${open?'':'locked'}">
      <div class="map-thumb ${m.theme}">${m.icon}</div>
      <div><strong>${i+1}. ${m.name}</strong><small>${open ? '입장 가능' : '잠김'} · 수집 ${mapCaught(i)}/10</small></div>
      <button type="button" onclick="selectMap(${i})">${selected ? '선택됨' : open ? '이동' : '🔒 Lv.'+m.level}</button>
    </article>`;
  }).join('');
}

function renderCollection(){
  $('collectionGrid').innerHTML = maps.flatMap((m,mi)=>m.fish.map((fish,fi)=>({m,mi,fish,fi}))).map(({mi,fish,fi})=>{
    const key = `${mi}-${fi}`;
    const known = !!state.caught[key];
    const r = rarityByIndex(fi);
    return `<article class="fish-card ${known?'':'unknown'}">
      <strong>${known ? fish : '????'}</strong>
      <small class="${rarityClass(r.key)}">${r.name}</small>
      <div class="fish-icon">${known ? `<img src="${r.asset}" alt="">` : '❔'}</div>
      <div class="stars">${known ? stars(r.stars) : '☆☆☆☆☆'}</div>
      <em>${known ? `${state.caught[key]} / 1` : '0 / 1'}</em>
    </article>`;
  }).join('');
}

function renderShop(){
  const rodGrade = rods[Math.min(4, Math.floor(state.rodLevel / 10))];
  const upgradeCost = 100 + state.rodLevel * 75;
  $('shopGrid').innerHTML = `
    <article class="shop-card"><div class="product"><img src="assets/ui/bait.svg" alt=""></div><strong>미끼 x10</strong><p>가격: 100 골드</p><button type="button" onclick="buyGoldBait()">🪙 100</button></article>
    <article class="shop-card"><div class="product"><img src="assets/ui/bait.svg" alt=""></div><strong>고급 미끼 x30</strong><p>가격: 다이아 10개</p><button type="button" onclick="buyBait(30,10)">💎 10</button></article>
    <article class="shop-card"><div class="product"><img src="assets/ui/diamond.svg" alt=""></div><strong>전설 미끼 x1</strong><p>전설 확률 보너스 예정</p><button type="button" onclick="buyBait(1,50)">💎 50</button></article>
    <article class="shop-card"><div class="product"><img src="assets/ui/coin.svg" alt=""></div><strong>${rodGrade} +${state.rodLevel}</strong><p>강화 비용: ${upgradeCost.toLocaleString()} 골드</p><button type="button" onclick="upgradeRod()">강화하기</button></article>`;
}

function renderAchievements(){
  $('achievementList').innerHTML = achievementData().map(a=>{
    const pct = Math.min(100, Math.floor(a.now / a.goal * 100));
    const done = state.achievements[a.key];
    return `<article class="achievement-card">
      <div class="icon">${a.icon}</div>
      <div><strong>${a.title}</strong><div class="progress"><span style="width:${pct}%"></span></div><small>${Math.min(a.now,a.goal)} / ${a.goal}</small></div>
      <button type="button">${done ? '완료' : '💎 '+a.reward}</button>
    </article>`;
  }).join('');
}

document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => goTab(btn.dataset.target)));
$('fishBtn').addEventListener('click', fishOnce);
$('fishBtn').addEventListener('contextmenu', e => { e.preventDefault(); toggleAuto(); });
window.selectMap = selectMap;
window.buyBait = buyBait;
window.buyGoldBait = buyGoldBait;
window.claimDaily = claimDaily;
window.upgradeRod = upgradeRod;
window.goTab = goTab;
window.closeCatchModal = closeCatchModal;
render();
