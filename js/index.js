// let text = "HELLO WORLD";
// let letter = text.charAt(text.length - 1);
// let letter1 = text.charAt(6);
// let code = text.charCodeAt(text.length - 1);
// let codePoint = text.codePointAt(2);

// let text1 = "sea";
// let text2 = " food";
// let result = text1.concat(text2);
// console.log(result);

// let txt = "Hello world welcome to the universe.The rain in SPAIN stays mainly in the plain";

// let res = txt.match(/lin/gi);

// let rptext = "Mr Blue has a blue house and a blue car";
// let rpResult = rptext.replace(/blue/g, "red");
// console.log(rpResult);
// let text = "Mr. Blue has a blue house";
// let position = text.search(/blue/i);
// console.log(position);
// let text = "Hello world!";
// let result = text.slice(1);
// console.log(result);
// let text = "How are you doing today?";
// const myArray = text.split("").filter(item => item !== ' ');
// console.log(myArray);

let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let timeFormat = document.getElementById("time-format");

let progress = document.getElementById("progress");

var now = new Date();
var hours = now.getHours() % 12 || 12;
console.log(hours);

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