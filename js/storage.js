const STORAGE_KEY = 'sbFishingKing.v2';
const defaultState = {
  bait:0, point:0, total:0, combo:0, rod:1, caught:{},
  lastAttendance:'', attendanceStreak:0, lastQuiz:'', missions:{date:'', catch:0, rare:0, point:0, claimed:{}}
};
function loadState(){ try{return {...defaultState,...JSON.parse(localStorage.getItem(STORAGE_KEY))};}catch(e){return {...defaultState};}}
function saveState(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function resetState(){ localStorage.removeItem(STORAGE_KEY); }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function ensureDailyMissions(state){
  if(state.missions?.date !== todayKey()) state.missions = {date:todayKey(), catch:0, rare:0, point:0, claimed:{}};
}
