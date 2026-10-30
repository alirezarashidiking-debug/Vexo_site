/* VEXO shared state and app interactions */
let selectedOrder = {name:'Neon Boost',gold:5,price:20};
const claimedMissions = new Set();
let loginMode = 'signin';




function setPreviewMode(mode){const app=document.getElementById('app');const isMobile=mode==='mobile';app.classList.toggle('phone-preview',isMobile);app.classList.toggle('desktop-preview',!isMobile);document.getElementById('desktopMode').classList.toggle('active',!isMobile);document.getElementById('mobileMode').classList.toggle('active',isMobile);document.getElementById('desktopMode').setAttribute('aria-pressed',String(!isMobile));document.getElementById('mobileMode').setAttribute('aria-pressed',String(isMobile));}

function claimMission(key,button){if(claimedMissions.has(key)){document.getElementById('missionStatus').textContent='This demo mission has already been claimed in this page session.';return;}claimedMissions.add(key);button.textContent='Claimed · demo';button.disabled=true;button.style.opacity='.55';document.getElementById('missionCount').textContent=claimedMissions.size+' / 3';document.getElementById('streakValue').textContent=claimedMissions.size?'1 day · demo':'0 days';document.getElementById('missionStatus').textContent='Mission marked complete in the local preview. No real coins were issued. A production version must verify eligibility, prevent duplicate claims, and enforce daily limits on the server.';}





document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCheckout()});
