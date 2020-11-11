"use strict"
function calc() {
  let a = +document.calcs.a.value;
  let b = +document.calcs.b.value;

  let elements = document.getElementsByClassName('_calc');
  let result;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      switch (elements[i].id) {
        case 'add': result = a + b; break;
        case 'sub': result = a - b; break;
        case 'mul': result = a * b; break;
        case 'dev': result = a / b; break;
      }
    }
  }
  document.getElementById('res').value = String(result);
}
