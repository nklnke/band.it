function dembel() {
  var nowDate = new Date(),
    banditDate = new Date(2019, 11 - 1, 19, 0, 0, 0), // 19.11.2019 00:00
    result = banditDate - nowDate,
    element = document.getElementById("dembel");

  if (result < 0) {
    element.innerHTML = " - : - - : - - : - - ";
    return undefined;
  }

  var seconds = Math.floor((result / 1000) % 60),
    minutes = Math.floor((result / 1000 / 60) % 60),
    hours = Math.floor((result / 1000 / 60 / 60) % 24),
    days = Math.floor(result / 1000 / 60 / 60 / 24);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  element.innerHTML =
    days + " д " + hours + " ч<br>" + minutes + " мин " + seconds + " сек";

  setTimeout(dembel, 1000);
}

window.onload = function() {
  dembel();
};
