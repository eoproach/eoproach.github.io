const screen = document.getElementById('screen');
const overlay = document.getElementById('fishingOverlay');
const result = document.getElementById('resultModal');
const pointer = document.getElementById('pointer');
const catchBtn = document.getElementById('catchBtn');
const closeResult = document.getElementById('closeResult');
const okResult = document.getElementById('okResult');
const resultTitle = document.getElementById('resultTitle');
const fishIcon = document.getElementById('fishIcon');
const fishName = document.getElementById('fishName');
const fishMeta = document.getElementById('fishMeta');
const fishDesc = document.getElementById('fishDesc');

const state = {
  active: 'home',
  gaugeRunning: false,
  dir: 1,
  pos: 0,
  raf: null,
  last: 0,
  fish: [
    { icon:'🐟', name:'사이다 붕어', weight:'0.35KG', len:'21.4cm', desc:'사이다 호수에서 가장 흔하게 잡히는 붕어. 탄산 기포를 좋아한다.', exp:18, gold:34 },
    { icon:'🐠', name:'톡톡 잉어', weight:'0.44KG', len:'23.8cm', desc:'물 위로 톡톡 튀어 오르는 활발한 잉어.', exp:20, gold:40 },
    { icon:'🐡', name:'탄산 복어', weight:'0.28KG', len:'18.2cm', desc:'기분이 좋으면 몸 주변에 작은 기포가 생긴다.', exp:24, gold:48 },
    { icon:'🦑', name:'거품 문어', weight:'1.12KG', len:'31.5cm', desc:'먹물을 뿜는 대신 반짝이는 거품을 뿜는다.', exp:30, gold:55 }
  ]
};

function setScreen(name){
  state.active = name;
  screen.className = `screen screen-${name}`;
  screen.innerHTML = buildZones(name);
}

function buildZones(name){
  const commonNav = `
    <button class="hot nav-home" data-screen="home" aria-label="홈"></button>
    <button class="hot nav-mission" data-screen="mission" aria-label="미션"></button>
    <button class="hot nav-book" data-screen="book" aria-label="도감"></button>
    <button class="hot nav-rod" data-screen="rod" aria-label="낚싯대"></button>
    <button class="hot nav-setting" data-screen="home" aria-label="설정"></button>`;
  if(name === 'home') return `<div class="touch-zones">
    <button class="hot home-fish" data-screen="fishing" aria-label="낚시하기"></button>
    <button class="hot home-map" data-screen="map" aria-label="세계지도"></button>${commonNav}</div>`;
  if(name === 'map') return `<div class="touch-zones">
    <button class="hot back" data-screen="home" aria-label="뒤로"></button>
    <button class="hot map-list" data-screen="fishing" aria-label="맵 선택"></button>${commonNav}</div>`;
  if(name === 'fishing') return `<div class="touch-zones">
    <button class="hot back" data-screen="home" aria-label="뒤로"></button>
    <button class="hot bite" id="biteButton" aria-label="입질"></button>
    <button class="hot exit-fish" data-screen="home" aria-label="나가기"></button></div>`;
  return `<div class="touch-zones"><button class="hot back" data-screen="home" aria-label="뒤로"></button>${commonNav}</div>`;
}

document.addEventListener('click', (e)=>{
  const target = e.target.closest('[data-screen]');
  if(target){
    setScreen(target.dataset.screen);
    return;
  }
  if(e.target.closest('#biteButton')) startGauge();
});

function startGauge(){
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
  state.gaugeRunning = true;
  state.pos = 0;
  state.dir = 1;
  state.last = performance.now();
  cancelAnimationFrame(state.raf);
  state.raf = requestAnimationFrame(tickGauge);
}

function tickGauge(now){
  if(!state.gaugeRunning) return;
  const dt = Math.min(32, now - state.last);
  state.last = now;
  state.pos += state.dir * dt * 0.085;
  if(state.pos >= 100){ state.pos = 100; state.dir = -1; }
  if(state.pos <= 0){ state.pos = 0; state.dir = 1; }
  pointer.style.left = `${state.pos}%`;
  state.raf = requestAnimationFrame(tickGauge);
}

catchBtn.addEventListener('click', ()=>{
  state.gaugeRunning = false;
  cancelAnimationFrame(state.raf);
  overlay.classList.add('hidden');
  overlay.setAttribute('aria-hidden', 'true');
  const success = state.pos >= 34 && state.pos <= 66;
  showResult(success);
});

function showResult(success){
  result.classList.toggle('fail', !success);
  const fish = state.fish[Math.floor(Math.random() * state.fish.length)];
  resultTitle.textContent = success ? '성공!' : '실패!';
  fishIcon.textContent = success ? fish.icon : '🌊';
  fishName.textContent = success ? fish.name : '아쉽게 놓쳤어요';
  fishMeta.textContent = success ? `무게 ${fish.weight} · 길이 ${fish.len}` : '초록 영역을 노려 다시 도전해보세요.';
  fishDesc.textContent = success ? fish.desc : '포인터가 중앙 초록 영역에 들어왔을 때 클릭하면 성공합니다.';
  document.querySelector('.reward').style.display = success ? 'flex' : 'none';
  result.classList.remove('hidden');
}

function hideResult(){ result.classList.add('hidden'); }
closeResult.addEventListener('click', hideResult);
okResult.addEventListener('click', hideResult);

setScreen('home');
