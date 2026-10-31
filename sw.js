const PREFIX='ket-garden-scope-'+encodeURIComponent(new URL(self.registration.scope).pathname)+'-';
const CACHE=PREFIX+'v9.2.3';
const FILES=['./','./index.html','./style.css','./v9-theme.css?v=9.2.3','./v9-handwriting.js?v=9.2.3','./assets/hero.webp','./assets/words.webp','./assets/listen.webp','./assets/spell.webp','./assets/review.webp','./data.js','./core.js','./question-bank.js','./cloud.js','./app.js','./app.js?v=9.2.3','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./audio/clips/manifest.json',...['03','04','05','06','07'].map(id=>`./audio/sentence-${id}.mp3`)];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll(FILES);const manifest=await (await fetch('./audio/clips/manifest.json')).json();const clips=[...Object.values(manifest.sentences),...Object.values(manifest.words)].map(item=>`./audio/clips/${item.file}`);await cache.addAll(clips);}).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
function byteRange(value,size){
 const m=/^bytes=(\d*)-(\d*)$/.exec(value||'');if(!m||(!m[1]&&!m[2]))return null;
 const start=m[1]?Number(m[1]):Math.max(0,size-Number(m[2]));
 const end=m[1]?(m[2]?Math.min(Number(m[2]),size-1):size-1):size-1;
 return Number.isSafeInteger(start)&&Number.isSafeInteger(end)&&start>=0&&start<size&&end>=start?[start,end]:null;
}
async function cachedRange(request,cached){
 const bytes=await cached.arrayBuffer(),range=byteRange(request.headers.get('Range'),bytes.byteLength);
 if(!range)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${bytes.byteLength}`,'Accept-Ranges':'bytes'}});
 const [start,end]=range;return new Response(bytes.slice(start,end+1),{status:206,headers:{'Content-Type':cached.headers.get('Content-Type')||'audio/mpeg','Content-Length':String(end-start+1),'Content-Range':`bytes ${start}-${end}/${bytes.byteLength}`,'Accept-Ranges':'bytes'}});
}
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(caches.open(CACHE).then(cache=>cache.match(event.request).then(cached=>{
   if(cached)return event.request.headers.has('Range')?cachedRange(event.request,cached):cached;
   return fetch(event.request).catch(()=>event.request.mode==='navigate'?cache.match('./index.html'):Response.error());
 })));
});
