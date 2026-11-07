const sparkles=document.querySelector('.sparkles');
for(let i=0;i<34;i++){const s=document.createElement('i');s.className='spark';s.style.left=Math.random()*100+'%';s.style.top=(35+Math.random()*80)+'%';s.style.animationDelay=(Math.random()*8)+'s';s.style.animationDuration=(6+Math.random()*8)+'s';sparkles.appendChild(s)}
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
document.querySelectorAll('.hero-frame,.event-card,.couple-photo-wrap').forEach(el=>el.classList.add('shine'));
document.getElementById('openInvite').addEventListener('click',()=>{document.getElementById('celebrations').scrollIntoView({behavior:'smooth'})});
const start=new Date(2026,10,9,9,0,0);const end=new Date(2026,10,9,11,0,0);
const fmt=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
const title=encodeURIComponent('Wedding of Shukoor & Hana');const details=encodeURIComponent('Wedding ceremony of Shukoor & Hana at Naseeb Auditorium, Thalikulam, Thrissur, Kerala.');const loc=encodeURIComponent('Naseeb Auditorium, Thalikulam, Thrissur, Kerala');
document.getElementById('googleCal').href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&location=${loc}`;
const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Shukoor and Hana//Wedding Invitation//EN\nBEGIN:VEVENT\nUID:shukoor-hana-20261109@example.com\nDTSTAMP:${fmt(new Date())}\nDTSTART:${fmt(start)}\nDTEND:${fmt(end)}\nSUMMARY:Wedding of Shukoor & Hana\nDESCRIPTION:Wedding ceremony of Shukoor & Hana\nLOCATION:Naseeb Auditorium, Thalikulam, Thrissur, Kerala\nEND:VEVENT\nEND:VCALENDAR`;
document.getElementById('appleCal').href=URL.createObjectURL(new Blob([ics],{type:'text/calendar'}));
