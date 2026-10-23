document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.getElementById('menu'),navigation=document.getElementById('navigation');
menu.addEventListener('click',()=>{let open=navigation.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
