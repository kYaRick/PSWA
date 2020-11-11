"use strict"
let resultSub = [];
const inputs = document.querySelectorAll("input");

const patterns = {
  "email": /^[A-Za-z0-9]{1,}([A-Za-z0-9]{1,}|(\.{1})?[A-Za-z0-9]{1,}){1,}\@{1}[A-Za-z0-9]{1,}(([\-|_]{1}[A-Za-z0-9]{1,}){1,})?\.{1}[A-Za-z0-9]{2,6}((\.{1}[a-z]{2,6}){0,5})?$/,
  "sur_name": /^[A-ZА-ЯІіЫы]{1}((('){1})?[A-Za-zА-Яа-яІіЫы]){1,}(((([\s|\-]){1})?[A-ZА-ЯІіЫы]{1}((('){1})?[A-Za-zА-Яа-яІіЫы]){1,}){1,})?$/,
  "first_name": /^[A-ZА-ЯІіЫы]{1}((('){1})?[A-Za-zА-Яа-яІіЫы]){1,}(((([\s|\-]){1})?[A-ZА-ЯІіЫы]{1}((('){1})?[A-Za-zА-Яа-яІіЫы]){1,}){1,})?$/,
  "password": /^(?=.*[a-zа-яіы])(?=.*[A-ZА-ЯІЫ])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zА-Яа-яІЫіы\d@$!%*?&]{6,}$/,
  "about": /^[A-Za-z0-9А-Яа-яІіЫы@$#!._]{6,50}$/,
  "photo": /^(jpeg|png|jpg)$/i,
  "bd_date": /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
}

function handler(input) {
  let name = input.attributes.name.value;

  switch (name) {

    case "psw-repeat":
      checkRepeatPass(input, name);
      break;

    case "bd_date":
      checkBirthdayDate(input, name);
      break;

    case "photo":
      checkFile(name)
      break;

    default:
      let result = patterns[name].test(input.value);
      let elVision = document.getElementById(input.attributes.name.value);
      if (result) {
        elVision.closest("div").style.display = "none";
        resultSub.push(true);
      } else {
        elVision.closest("div").style.display = "block";
        resultSub.push(false);
      }
      break;
  }

}
function checkRepeatPass(input, name) {
  if (document.getElementById("original_pass").value === input.value) {
    document.getElementById(name).closest("div").style.display = "none"
    resultSub.push(true);
  }
  else {
    document.getElementById(name).closest("div").style.display = "block"
    resultSub.push(false);
  }
}
function checkFile(name) {
  let temp = null;
  try {
    temp = document.getElementById("file_photo").files[0].type;
  } catch (e) {
    temp = "error";
  }
  let arr = temp.split("/", 2);

  // for debug mode:
  // console.clear();
  // console.log("name: " + name);
  // console.log("arr: " + arr)
  // console.log("arr[1]: " + arr[1]);
  // console.log("regex: " + patterns[name].test(arr[1]))

  if (patterns[name].test(arr[1])) {
    document.getElementById(name).closest("div").style.display = "none"
    resultSub.push(true);
  } else {
    document.getElementById(name).closest("div").style.display = "block"
    resultSub.push(false);
  }
}
function checkBirthdayDate(input, name) {
  let el = document.getElementById(name + "_");
  let err = document.getElementById(name);
  // console.log(value, err.textContent);
  if (patterns[name].test(input.value)) {

    let now = new Date();
    let temp = el.value;
    el.value = temp;

    let reg = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/);
    let symbol = "";
    // console.log(reg.test(temp)); //debug;

    let flagForDataCheck = false;

    if (reg.test(temp) === true) {
      symbol = "/";
      flagForDataCheck = true;
    }
    else {
      reg = new RegExp(/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}$/);
      // console.log(reg.test(temp));
      if (reg.test(temp) === true) {
        symbol = ".";
        flagForDataCheck = true;
      }
    }
    //console.log(temp, symbol, reg.test(temp), flagForDataCheck);  //debug;

    if (flagForDataCheck) {
      let arr = temp.split(symbol, 3);

      //console.log(arr); //debug;
      //console.log(arr[2].length); //debug;

      if (Number(arr[2].length) === 2) {
        arr[2] = "20" + arr[2];
        // console.log(arr[2]); //debug;
      }
      else if (Number(arr[2].length) === 3) {
        err.textContent = "*Некоректно вказаний рік народження!";
        err.closest("div").style.display = "block";
        resultSub.push(false);
      } else {
        err.closest("div").style.display = "none";
        resultSub.push(true);
      }

      if (arr[1] < 1 || arr[1] > 12) {
        err.textContent = "*Некоректно вказаний місяць року!";
        err.closest("div").style.display = "block";
        resultSub.push(false);
      } else if (arr[0] < 1 || arr[0] > 31) {
        err.textContent = "*Некоректно вказане число дня року!";
        err.closest("div").style.display = "block";
        resultSub.push(false);
      }
      // else if (arr[1] === "2" || (arr[0] < 1 || arr[0] > 28)) {
      //   err.closest("div").style.display = "block";
      //   err.textContent = "[JS]: Некоректно вказане число дня у лютому!";
      // } 
      else {
        let year = Number(now.getFullYear()),
          minYear = 5,    //мінімальний вік;
          maxYear = 99;   // максимальний вік;
        if (Number(arr[2]) >= year || minYear > year - Number(arr[2]) || year - Number(arr[2]) >= maxYear) {
          err.textContent = "*Некоректно вказаний рік народження, тобто реєстрація дозволина якщо Вам - більше " + minYear +
            " роки/ів та менше " + maxYear + " роки/ів.";
          err.closest("div").style.display = "block";
          resultSub.push(false);
        } else {
          err.closest("div").style.display = "none";
          resultSub.push(true);
        }
      }
    } else {
      err.textContent = "*Поле дата народження заповнене некоректно";
    }
  } else {
    err.textContent = "*Некоректно вказана дата народження";
    err.closest("div").style.display = "block";
    resultSub.push(false);
  }
}
function formValidation() {
  resultSub = [];
  let chLanguages = 0;
  inputs.forEach(function (input) {
    let value = input.attributes.name.value;
    if (value === "languages") {
      // console.log(input.checked); //debug;
      chLanguages = input.checked ? chLanguages + 1 : chLanguages;
    }
    else {
      handler(input);
    }
  });

  // console.log(chLanguages); //debug;

  try {
    if ((document.getElementById("about_text").value = document.getElementById("about_text").value.trim()) === "") {
      document.getElementById("about").closest("div").style.display = "block"
      resultSub.push(false);
    } else {
      document.getElementById("about").closest("div").style.display = "none"
      resultSub.push(true);
    }

    if (chLanguages != 0) {
      // console.log(document.getElementById("languages")); //debug;
      document.getElementById("languages").closest("div").style.display = "none"
      resultSub.push(true);
    } else {
      // console.log(document.getElementById("languages")); //debug
      document.getElementById("languages").closest("div").style.display = "block"
      resultSub.push(false);
    }
  } catch (e) {
    console.log("[Script] We have error my friend!");
  }

  let countFalse = 0;
  resultSub.forEach(function (el) {
    countFalse = el ? countFalse + 0 : countFalse + 1;
  })
  // console.log(countFalse);  //for debug;

  if (countFalse === 0) {
    $("#checking_form").on("click", function () {
      document.getElementById("error").closest("div").style.display = "none"
      $("#popup").addClass("popup_show");

      const inputChs = document.querySelectorAll("input[type=checkbox]");
      let languages = "";
      inputChs.forEach(function (inputCh) {
        if (inputCh.checked) {
          languages += inputCh.value + " ";
        }
      })

      console.log($("#about_text").val())

      document.getElementById("text").innerHTML =
        "Електронна пошта:" + $("input[name = 'email']").val() + " <br> " +
        "Прізвище: " + $("input[name = 'sur_name']").val() + "<br>" +
        "Ім'я: " + $("input[name = 'first_name']").val() + "<br>" +
        "Дата народження: " + $("input[name = 'bd_date']").val() + "<br>" +
        "Пароль: відповідає вимогам" + "<br>" +
        "Мова|и: " + languages + "<br>" +
        "Інформація про Вас:" + $("#about_text").val() + "<br>" +
        "Фото: відповідає вимогам";
    });
    $("#popup__close").on("click", function () {
      $("#popup").removeClass("popup_show");
    });
    // document.getElementById("reg_form").submit(); send data to server;
  } else {
    document.getElementById("error").closest("div").style.display = "block"
  }
  $("#reg_").on("click", function () {
    $("#reg_form").submit()
  }); //send data to server;
}