"use strict"
$(document).ready(function () {
  $(document).on("click", function (el) {
    let val = el.target.value;
    if (val == "LNU" || val == "Lviv") {
      readTextFile(el.target);
    }
  });
});

function checkBrowser() {
  let
    userAgent = navigator.userAgent.toLowerCase(),

    Mozila = /firefox/.test(userAgent),
    Chrome = /chrome/.test(userAgent),
    Safari = /safari/.test(userAgent),
    Opera = /opera/.test(userAgent),
    Explorer = /msie/.test(userAgent),

    result = ((!Mozila && !Chrome || !Chrome && Safari || Safari && Opera) || Explorer) ?
      true : false;
  return result;
}

function readTextFile(e) {
  let rawFile = new XMLHttpRequest();

  if (checkBrowser()) {
    rawFile = new ActiveXObject("Microsoft.XMLHTTP");
  }

  rawFile.open("GET", "../others/q3/" + e.value + ".txt", true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
      document.getElementById("_main_page_content").textContent = allText;
    }
  }
  rawFile.send();
}