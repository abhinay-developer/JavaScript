let count=0;
let minutes=0;
let secounds=0;
let millisecounds=0;
let startTimer=()=>{
  count++;
  minutes=Math.floor((count/100)/60);
  secounds=Math.floor((count/100)-(minutes*60));
  millisecounds=Math.floor(count-(secounds*100)-(minutes*6000));
  document.querySelector('#minutes').innerHTML=minutes;
  document.querySelector('#secounds').innerHTML=secounds;
  document.querySelector('#m-secounds').innerHTML=count;
};
let start=document.querySelector('#start');
start.addEventListener('click',function(){
startTimer();
 setInterval(startTimer,10);
});
