function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  if (hours <10) {
    hours = "0" + hours;
  }
  if (minutes <10) {
    minutes = "0" + minutes;
  }

  var element = document.getElementById('clock');
  
  element.innerHTML = hours + ":" + minutes;
}

//https://www.tristanwaddington.com/2010/08/javascript-clock/
