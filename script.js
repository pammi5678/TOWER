var tabs=document.querySelectorAll('nav [data-tab]');
tabs.forEach(function(t){t.addEventListener('click',function(){
tabs.forEach(function(o){var on=o===t;o.setAttribute('aria-selected',on);document.getElementById(o.dataset.tab).hidden=!on;});
window.scrollTo({top:0});});});
document.getElementById('theme').addEventListener('click',function(){
var r=document.documentElement,d=r.getAttribute('data-theme');
if(!d)d=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
r.setAttribute('data-theme',d==='dark'?'light':'dark');});
