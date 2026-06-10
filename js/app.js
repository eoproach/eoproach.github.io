const screens=[...document.querySelectorAll('.screen')];
const fishList=[
 {name:'사이다 붕어',grade:'일반',w:[0.22,0.58],len:[16,28]},
 {name:'톡톡 잉어',grade:'일반',w:[0.3,0.9],len:[20,35]},
 {name:'버블 송어',grade:'일반',w:[0.25,0.7],len:[18,30]},
 {name:'청량 참치',grade:'희귀',w:[1.2,3.5],len:[38,62]},
 {name:'스파클 가자미',grade:'희귀',w:[0.5,1.6],len:[26,44]},
 {name:'황금 가오리',grade:'전설',w:[2.4,5.8],len:[60,110]},
 {name:'전설의 고래',grade:'전설',w:[15,38],len:[180,410]}
];
function go(name){screens.forEach(s=>s.classList.toggle('active',s.dataset.screen===name)); resetFishing();}
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.go)));
const gaugeModal=document.getElementById('gaugeModal');const result=document.getElementById('result');const pointer=document.getElementById('pointer');
document.getElementById('biteBtn').addEventListener('click',()=>{gaugeModal.classList.add('show');gaugeModal.setAttribute('aria-hidden','false')});
document.getElementById('stopBtn').addEventListener('click',()=>{const g=document.getElementById('gauge').getBoundingClientRect();const p=pointer.getBoundingClientRect();const center=((p.left+p.width/2)-g.left)/g.width;const success=center>=0.39&&center<=0.61;showResult(success);});
document.getElementById('confirmBtn').addEventListener('click',()=>{result.classList.remove('show','fail');gaugeModal.classList.remove('show');});
function resetFishing(){gaugeModal.classList.remove('show');result.classList.remove('show','fail');}
function showResult(success){gaugeModal.classList.remove('show');const title=document.getElementById('resultTitle');const f=fishList[Math.floor(Math.random()*fishList.length)];const w=(f.w[0]+Math.random()*(f.w[1]-f.w[0])).toFixed(2);const l=(f.len[0]+Math.random()*(f.len[1]-f.len[0])).toFixed(1);document.getElementById('fishName').textContent=success?f.name:'놓친 물고기';document.getElementById('fishInfo').textContent=success?`무게 ${w}KG · 길이 ${l}cm`:'초록 영역을 놓쳤어요.';title.textContent=success?'성공!':'실패!';result.classList.toggle('fail',!success);result.classList.add('show');}
