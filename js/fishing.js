function getRandomFish(rodLevel=1){
  const bonus = Math.min(rodLevel - 1, 9);
  const weighted = FISH_LIST.map(f => ({...f, rate:f.rate + (f.grade === 'rare' ? bonus * 0.8 : f.grade === 'legend' ? bonus * 0.25 : 0)}));
  const totalRate = weighted.reduce((sum, f) => sum + f.rate, 0);
  const random = Math.random() * totalRate;
  let sum = 0;
  for(const fish of weighted){ sum += fish.rate; if(random <= sum) return FISH_LIST.find(origin => origin.id === fish.id); }
  return FISH_LIST[0];
}
function successRange(rodLevel){
  const width = Math.min(20 + (rodLevel - 1) * 3, 42);
  return {min:50 - width/2, max:50 + width/2, width};
}
function isSuccess(position, rodLevel){ const r = successRange(rodLevel); return position >= r.min && position <= r.max; }
function gradeLabel(grade){ return {normal:'일반', rare:'희귀', legend:'전설'}[grade] || '일반'; }
function upgradeCost(level){ return level >= 10 ? Infinity : 80 + (level - 1) * 70; }
