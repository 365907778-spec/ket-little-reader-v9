/* Optional parent-account cloud backup for Supabase. Learning records remain
   local until a parent signs in and enables synchronisation. */
(() => {
  'use strict';
  const CONFIG_KEY='ket-reading-garden-cloud-v1', SESSION_KEY='ket-reading-garden-cloud-session-v1';
  // This is a Supabase publishable key, intentionally safe to ship in a PWA.
  // Row Level Security, not obscurity, protects each family's learning record.
  const DEFAULT_CONFIG={url:'https://ebkluqnzvydzzdzwoxop.supabase.co',anonKey:'sb_publishable_gilXh9bX6FUxOT5dD7yc1g__8dqcq6k'};
  let pushTimer=null,pushing=false,queued=null;
  const read=(key,fallback=null)=>{try{return JSON.parse(localStorage.getItem(key))||fallback;}catch{return fallback;}};
  const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
  const status=(kind,message)=>window.dispatchEvent(new CustomEvent('ket-cloud-status',{detail:{kind,message}}));
  const config=()=>({...DEFAULT_CONFIG,...read(CONFIG_KEY,{})}),session=()=>read(SESSION_KEY,null);
  const ready=()=>{const c=config();return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(c.url||'')&&typeof c.anonKey==='string'&&c.anonKey.length>20;};
  const endpoint=path=>config().url.replace(/\/$/,'')+path;
  async function request(path,options={}){
    if(!ready())throw new Error('请先填写 Supabase 项目地址和 anon key。');
    const s=session(),headers={apikey:config().anonKey,...(options.headers||{})};
    if(s?.access_token)headers.Authorization=`Bearer ${s.access_token}`;
    const response=await fetch(endpoint(path),{...options,headers});let body=null;try{body=await response.json();}catch{}
    if(!response.ok)throw new Error(body?.message||body?.msg||body?.hint||`同步服务返回 ${response.status}`);return body;
  }
  function saveConfig(url,anonKey){const clean=String(url||'').trim().replace(/\/$/,'');if(!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(clean))throw new Error('项目地址应为 https://xxxx.supabase.co');if(String(anonKey||'').trim().length<20)throw new Error('anon key 看起来不完整。');write(CONFIG_KEY,{url:clean,anonKey:String(anonKey).trim()});status('configured','云同步已配置；请登录家长账号。');}
  function forget(){localStorage.removeItem(CONFIG_KEY);localStorage.removeItem(SESSION_KEY);status('off','云同步未配置。本机学习记录仍会保存。');}
  async function signUp(email,password){const body=await request('/auth/v1/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});if(body?.access_token){write(SESSION_KEY,body);status('online','家长账号已登录。');}return {needsConfirmation:!body?.access_token,email:body?.user?.email||email};}
  async function signIn(email,password){const body=await request('/auth/v1/token?grant_type=password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});write(SESSION_KEY,body);status('online',`已登录：${body.user?.email||email}`);return body;}
  async function restoreSession(){const s=session();if(!s?.access_token)return null;try{const user=await request('/auth/v1/user');const next={...s,user};write(SESSION_KEY,next);status('online',`已登录：${user.email||''}`);return next;}catch{localStorage.removeItem(SESSION_KEY);status('off','登录已过期，请重新登录。');return null;}}
  function signOut(){localStorage.removeItem(SESSION_KEY);status(ready()?'configured':'off',ready()?'已退出家长账号。':'云同步未配置。');}
  function userId(){return session()?.user?.id||null;}
  async function fetchState(){const id=userId();if(!id)throw new Error('请先登录家长账号。');const rows=await request(`/rest/v1/ket_learning_state?select=state,updated_at&user_id=eq.${encodeURIComponent(id)}`,{headers:{Accept:'application/json'}});return Array.isArray(rows)&&rows[0]?rows[0]:null;}
  async function push(state){const id=userId();if(!id||!ready())return null;pushing=true;status('syncing','正在安全备份学习记录…');try{const rows=await request('/rest/v1/ket_learning_state',{method:'POST',headers:{'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify({user_id:id,state,updated_at:new Date().toISOString()})});status('online','云端已同步');return Array.isArray(rows)?rows[0]:null;}catch(error){status('error',`云同步未完成：${error.message}`);throw error;}finally{pushing=false;if(queued){const next=queued;queued=null;push(next).catch(()=>{});}}}
  function schedulePush(state){if(!userId()||!ready())return;queued=JSON.parse(JSON.stringify(state));clearTimeout(pushTimer);pushTimer=setTimeout(()=>{const next=queued;queued=null;if(next)push(next).catch(()=>{});},1200);}
  window.KETCloud={config,session,ready,saveConfig,forget,signUp,signIn,restoreSession,signOut,userId,fetchState,push,schedulePush};
})();
