/* Optional pencil board for Chinese -> English memory work. No change to V8 grading/storage. */
(()=>{
 'use strict';
 const root=document.getElementById('view');
 if(!root)return;
 function enhance(){
  const form=root.querySelector('#v5-spell-form, #v5-dictation-form');
  if(!form||form.parentElement.querySelector('.v9-write-area'))return;
  const section=document.createElement('section');section.className='v9-write-area';
  section.innerHTML=`<div class="v9-write-head"><h3>✍ 看中文，手写英文</h3><button type="button" class="v9-clear">🗑 清空手写板</button></div><p>上方中文是提示；先用手指、触控笔或鼠标写出英文，再填写下方原版答题框进行自动检查。</p><canvas class="v9-writing-canvas" aria-label="英文手写板，支持手指、鼠标和触控笔"></canvas><p class="v9-write-foot">手写轨迹只作临时练习，不上传，也不改变原版成绩；刷新后不保留手写痕迹。</p>`;
  form.insertAdjacentElement('beforebegin',section);
  const canvas=section.querySelector('canvas');let ctx,painting=false,last=null;
  function resize(){const width=Math.max(150,canvas.getBoundingClientRect().width),height=canvas.getBoundingClientRect().height||190;const ratio=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);ctx.lineWidth=3.4;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#254b80';}
  resize();
  const pt=e=>{const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0&&e.pointerType==='mouse')return;painting=true;last=pt(e);canvas.setPointerCapture(e.pointerId);ctx.beginPath();ctx.arc(last.x,last.y,1.8,0,Math.PI*2);ctx.fillStyle='#254b80';ctx.fill();e.preventDefault();});
  canvas.addEventListener('pointermove',e=>{if(!painting)return;const p=pt(e);ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p;e.preventDefault();});
  for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,()=>{painting=false;last=null;});
  section.querySelector('.v9-clear').addEventListener('click',()=>{ctx.clearRect(0,0,canvas.width,canvas.height);});
 }
 const observer=new MutationObserver(()=>enhance());observer.observe(root,{childList:true});enhance();
})();
