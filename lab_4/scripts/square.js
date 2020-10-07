"use strict"
function ds() {
  var r = document.square.a.value;
  var elements = document.getElementsByTagName('input');
  var R;
  for (var i = 1; i < elements.length; i++) {
    if (elements[i].checked) {
      switch (elements[i].id) {
        case 'l': R = 2 * Math.PI * r; break;
        case 's': R = Math.PI * r ** 2; break;
        case 'v': R = (4 / 3) * 3.14 * r ** 3; break;
        case 'kv': R = r ** 2; break;
        case 'tr': R = 0.5 * r ** 2; break;
      }
    }
  }
  document.getElementById('res').value = R;
}
