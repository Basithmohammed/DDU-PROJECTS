let hrs=document.getElementById('hr');
let mins=document.getElementById('min');
let second=document.getElementById('sec');

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRot = 30*hh + mm/2;
    let mRot = 6*mm;
    let sRot = 6*ss;
    hrs.style.transform=`rotate(${hRot}deg)`;
    mins.style.transform=`rotate(${mRot}deg)`;
    second.style.transform=`rotate(${sRot}deg)`;
    
}
setInterval(displayTime,1000);