
let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let timeFormat = document.getElementById("time-format");

let progress = document.getElementById("progress");

var now = new Date();
var hours = now.getHours() % 12 || 12;

let clockStart = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12 || 12;
    hour.innerHTML = hr !== 0 ? (hr > 9 ? hr : '0' + hr) : '12';
    minute.innerHTML = min > 9 ? min : '0' + min;
    second.innerHTML = sec > 9 ? sec : '0' + sec;
    timeFormat.innerHTML = ampm;
    progress.style.width = (sec / 60) * 100 + '%';
}


setInterval(clockStart, 1000);