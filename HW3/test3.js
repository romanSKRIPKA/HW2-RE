
var clock = document.getElementById('time');
var start = document.getElementById('butt1');
var pauses = document.getElementById('text');
var pauseDate;
var clocktimer;
 
function startTime() { 

  let currentDate = Date.now();
  let t = currentDate - initialDate;
  pauseDate = t;
 
  let ms = t%1000;

  t-=ms;
  t = Math.floor (t/1000);
  let s = t%60; 
  
  t-=s;
  t = Math.floor (t/60);
  let m = t%60; 
  
  t-=m;
  t = Math.floor (t/60);
  let h = t%60;
  
 if (h<10) h='0'+h;
 if (m<10) m='0'+m;
 if (s<10) s='0'+s;
 if (ms<10) ms='0'+ms;
 clock.value = h + ':' + m + ':' + s + '.' + ms;
 clocktimer = setTimeout(startTime,1); // усложняеш рекурсией. более правильно було б визивать startTime() внутри findTime() через setInterval(), а не визивать саму в собі через setTimeout()
 }
 
function findTime() {
  if (start.value === 'Start') {
    initialDate = Date.now(); // initialDate нада б обявить глобальной переменной в начале файла, а то я кось не понятно откуда вона вдруг всплила внутри функции
    startTime();
    // setInterval(startTime, 1); - це про то шо я више написав
    start.value = 'Pause'; 
  }
  else if (start.value === 'Pause') {
    clearTimeout(clocktimer);
    pauses.innerHTML = clock.value + '<br>' + pauses.innerHTML;
    start.value = 'Continue';
  }
  else if (start.value === 'Continue') {
    initialDate = Date.now() - pauseDate;
    startTime();  
    start.value = 'Pause';
  }
}
    
function clearField() {
  clearTimeout(clocktimer);
  clock.value='00:00:00.000';
  start.value = 'Start';
  pauses.innerHTML = '';
}

