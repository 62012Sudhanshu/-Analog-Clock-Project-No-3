let hr =document.getElementById('hour');
let min=document.getElementById('min');
let sec= document.getElementById('sec');
 
 function displayTime(){
    let date= new Date();
    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

     hr.style.transform =`rotate(${hrotation}deg)`;
     min.style.transform =`rotate(${mrotation}deg)`;
     sec.style.transform =`rotate(${srotation}deg)`;
 }
 setInterval(displayTime,1000);

// setInterval(() => {
 d= new Date();
 htime =d.gethours();
 mtime =d.getMinutes();
 stime =d.getSeconds();
hrotation= 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;
hour.style.transform =`rotate(${hrotation}deg)`;
minute.style.transform =`rotate(${mrotation}deg)`;
second.style.transform =`rotate(${srotation}deg)`;

// },1000);