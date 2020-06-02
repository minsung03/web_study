const second = document.querySelector(".seconds");
const minute = document.querySelector(".minutes");
const hour = document.querySelector(".hours");
const h1 = document.querySelector(".nowtime");

setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsDegrees}deg)`;
 
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minute.style.transform = `rotate(${minsDegrees}deg)`;
 
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hour.style.transform = `rotate(${hoursDegrees}deg)`;

};

setInterval(setDate, 1000);
/* 아날로그 부분인데 헷갈려서 하다가 접은거
setInterval(function(){
    let nowtime = new.Date();
    let h = nowtime.getHours();
    let m = nowtime.getMinutes();
    let s = nowtime.getSeconds();
    document.querySelector('.nowtime').innerHTML ="지금시간은" + h + "시" + m + "분" + s + "초에여";
}, 1000);
*/