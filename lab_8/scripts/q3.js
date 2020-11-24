$(document).ready(function () {
  var userAgent = navigator.userAgent.toLowerCase();

  var Mozila = /firefox/.test(userAgent);
  var Chrome = /chrome/.test(userAgent);
  var Safari = /safari/.test(userAgent);
  var Opera = /opera/.test(userAgent);

  var InternetExplorer = false;
  if ((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent))
    InternetExplorer = true;

  document.addEventListener('click', e => {
    let val = e.target.value;
    if (val == "LNU" || val == "Lviv") {
      readTextFile(e.target);
    }
  });

  function readTextFile(e) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../others/q3/" + e.value + ".txt", true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        document.getElementById("_main_page_content").textContent = allText;
      }
    }
    rawFile.send();
  }
});