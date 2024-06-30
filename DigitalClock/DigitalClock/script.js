
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var btn=document.getElementById('btn')
var clock=document.getElementById('clock')

function darkmode() {
    if (btn.style.backgroundColor !== 'black') {
        btn.style.color = 'white';
        btn.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'rgba(16, 14, 14, 0.84)'; 
        btn.innerText="Enable Light Mode"
        btn.style.borderColor='black'
        clock.style.boxShadow='0px 5px 10px 15px rgba(159, 251, 246, 0.979)'
    }
     else {
        btn.style.color = 'black';
        btn.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)'; 
        btn.innerText="Enable Dark Mode"
        btn.style.borderColor='white'
        clock.style.boxShadow='none'
    }
}
function digitalClock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hour<10) { hour = "0" + hour};
    if(min<10) { min = "0" + min};
    if(sec<10) { sec = "0" + sec};

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
}
setInterval(digitalClock, 1000);