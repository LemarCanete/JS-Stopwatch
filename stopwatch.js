let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayHours = 0;
let displayMiutes = 0;

let interval = null

let startStatus = "started"
let stopStatus = "stopped"
let resetStatus = "reset"

function stopWatch(){
  
  seconds++
  
  if(seconds / 60 === 1){
    seconds = 0;
    minutes++
    
    if (minutes / 60 === 1){
      minutes = 0;
      hours++
    }
  }
  
  if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds
  }
  
  if(minutes < 10){
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  
  if(hours < 10){
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
  
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds; 
}



function startButton(){
  
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startButton").innerHTML = "Start"
    startStatus = "started"
}

function stopButton(){
  
    window.clearInterval(interval);
    document.getElementById("stopButton").innerHTML = "Stop"
    stopStatus = "stopped"
}

function resetButton(){
  
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00"
  
}