(function(root){
  'use strict';
  const dateKey=(d=new Date())=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  const addDays=(key,n)=>{const d=new Date(key+'T12:00:00');d.setDate(d.getDate()+n);return dateKey(d)};
  const dayNumber=(start,today=dateKey())=>Math.max(1,Math.min(30,1+Math.round((new Date(today+'T12:00:00')-new Date(start+'T12:00:00'))/86400000)));
  const fresh=()=>({version:1,start:dateKey(),days:{},words:{},attempts:[],assessments:[],settings:{rate:0.82},active:null});
  const normalize=s=>String(s).trim().toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ');
  const shuffled=arr=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  function options(word,words){
    // Do not present a synonym or a shared dictionary sense as a wrong answer.
    const families=[['kind','sort','variety','various'],['shall','would','may','might'],['bake','roast','grilled'],['fry','fried'],['boil','boiled'],['chip','French fries'],['biscuit','cookie'],['candy','sugar'],['prepare','ready'],['dessert','pudding','cake','snack']];
    const senses=w=>w.zh.split(/[；，、]/).map(x=>x.trim()).filter(Boolean);
    const target=senses(word),used=new Set([word.zh]);
    const others=shuffled(words).filter(w=>{if(used.has(w.zh)||senses(w).some(s=>target.includes(s))||families.some(g=>g.includes(word.en)&&g.includes(w.en)))return false;used.add(w.zh);return true}).slice(0,2);
    return shuffled([word,...others]).map(w=>({id:w.id,text:w.zh}));
  }
  function record(state,{id,correct,mode,helped=false,answer='',day=1,date=dateKey(),ts=Date.now()}){
    state.attempts.push({id,correct,mode,helped,answer:String(answer).slice(0,180),day,date,ts});
    const w=state.words[id] ||= {seen:0,correct:0,wrong:0,streak:0,due:date,lapses:0};
    w.seen++; if(correct&&!helped){w.correct++;w.streak++;w.due=addDays(date,[1,2,4,7,14][Math.min(w.streak-1,4)]);}else{w.wrong+=correct?0:1;w.lapses++;w.streak=0;w.due=addDays(date,1);}
    return w;
  }
  function due(state,today=dateKey()){return Object.entries(state.words).filter(([,w])=>w.due<=today).map(([id])=>id)}
  function validState(s){
    const date=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&Number.isFinite(Date.parse(v));
    const num=v=>typeof v==='number'&&Number.isFinite(v)&&v>=0;
    if(!s||s.version!==1||!date(s.start)||!s.days||typeof s.days!=='object'||Array.isArray(s.days)||!s.words||typeof s.words!=='object'||Array.isArray(s.words)||!Array.isArray(s.attempts)||!Array.isArray(s.assessments)||!s.settings||!num(s.settings.rate)||s.settings.rate<0.5||s.settings.rate>1.3)return false;
    if(!Object.entries(s.days).every(([k,v])=>/^([1-9]|[12][0-9]|30)$/.test(k)&&v&&typeof v==='object'&&Object.values(v).every(x=>typeof x==='boolean')))return false;
    if(!Object.entries(s.words).every(([k,w])=>/^[\w-]+$/.test(k)&&w&&['seen','correct','wrong','streak','lapses'].every(n=>num(w[n]))&&date(w.due)))return false;
    if(s.audioProgress!==undefined&&(!s.audioProgress||typeof s.audioProgress!=='object'||Array.isArray(s.audioProgress)||!Object.entries(s.audioProgress).every(([id,v])=>['03','04','05','06','07'].includes(id)&&num(v))))return false;
    if(s.settings.audioRate!==undefined&&![0.75,1,1.25].includes(s.settings.audioRate))return false;
    if(!s.attempts.every(a=>a&&typeof a.id==='string'&&typeof a.correct==='boolean'&&typeof a.helped==='boolean'&&typeof a.mode==='string'&&typeof a.answer==='string'&&num(a.day)&&date(a.date)&&num(a.ts)))return false;
    if(!s.assessments.every(a=>a&&['baseline','day15','day30'].includes(a.kind)&&date(a.date)&&Array.isArray(a.answers)&&a.answers.length===24&&a.answers.every(v=>v&&typeof v.id==='string'&&['read','listen'].includes(v.mode)&&typeof v.correct==='boolean')))return false;
    return true;
  }
  root.KETCore={dateKey,addDays,dayNumber,fresh,normalize,shuffled,options,record,due,validState};
  if(typeof module!=='undefined')module.exports=root.KETCore;
})(globalThis);
