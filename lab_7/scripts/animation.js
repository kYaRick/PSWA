//натискання на кнопку з id="showOrHide";
$("#showOrHide").on("click", function (e) {
  let timeAnim = 2000;                       //мілісекунди;
  let caption = $("#showOrHide").text();     //стягую значення кнопки;
  $("#tBlock_1").toggleClass("hideStyle");   //маніпуляція з класом;
  $("#tBlock_2").fadeToggle(timeAnim);       //ефект розсіювання;
  $("#tBlock_3").slideToggle(timeAnim);      //ефект слайду;

  if (caption === "hide") {
    $("#showOrHide").text("show");
  } else {
    $("#showOrHide").text("hide")
  }
});
//кінець обробки натиску;

//натискання на кнопку з id="giveBold";
$("#giveBold").on("click", function () {
  $("#main_block_2 span").toggleClass("boldStyle");
});
//кінець обробки натиску;

//натискання на кнопку з id="color" || id = "randomColor";
$("#color").on("change", function () {
  let color = $("#color").val();
  $("#randColor").css("background-color", color);
});
$("#randomColor").on("click", function () {
  let
    r = Math.round(Math.random() * 255),
    g = Math.round(Math.random() * 255),
    b = Math.round(Math.random() * 255),
    color = "rgb(" + r + ", " + g + ", " + b + ")";

  $("#randColor").css("background-color", color);
  $("#color").val("#" + toHex(r) + toHex(g) + toHex(b));

  function toHex(n) {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
  }
});
//кінець обробки натиску;

//натискання на кнопку з id="changeSize";
$("#changeSize").on("click", function () {
  let
    wi = $("#randSize").css("width").split("px")[0],
    he = $("#randSize").css("height").split("px")[0];

  wi = wi < 800 ? wi * 1.5 : wi / 10;
  he = he < 800 ? he * 1.5 : he / 10;
  $("#randSize").animate({ "width": wi }, 1000);
  $("#randSize").animate({ "height": he }, 1000);
});
//кінець обробки натиску;

//натискання на кнопку з id="changePos";
$("#changePos").on("click", function () {
  let
    wi = Number($("#position").css("left").split("px")[0]),
    he = Number($("#position").css("left").split("px")[0]);
  wi = wi < 700 ? wi + 100 : wi / 7;
  he = he < 700 ? he + 100 : he / 7;

  $("#position").css("left", wi + "px");
  $("#position").css("top", he + "px");
});
//кінець обробки натиску;

//натискання на кнопку з id="changeOp";
$("#changeOp").on("click", function () {
  $("#opacity").toggleClass("opacity");
});
//кінець обробки натиску;

//натискання на кнопку з id="changeSize";
$("#changeTable").on("click", function () {
  $("td:even").css("background-color", "blue");
  $("td:odd").css("background-color", "yellow");
  $("td:last").css("color", "green");
  $("td:last").css("font-size", "30px");
});
//кінець обробки натиску;

//автодоповнення використовуючи jQui;
$(function () {

  var actors = [
    "Robert De Niro",
    "Jack Nicholson",
    "Marlon Brando",
    "Denzel Washington",
    "Katharine Hepburn",
    "Humphrey Bogart",
    "Meryl Streep",
    "Sidney Poitier",
    "Ingrid Bergman",
    "Tom Hanks",
    "Elizabeth Taylor",
    "Bette Davis",
    "Gregory Peck",
    "Leonardo DiCaprio",
    "Cate Blanchett"];

  let temp = [];

  $("input#tags").keyup(function (e) {
    temp = [];
    console.clear();
    function find(e) {
      let reg = new RegExp("^" + $('input#tags').val() + ".", "i");
      if (reg.test(e)) { temp.push(e) }
      //for debug mode
      // console.log($('input#tags').val() + "   " + e + "   " + reg.test(e))
      // console.log(temp);
    }

    actors.forEach(e => {
      find(e);
    });
    $('input#tags').autocomplete({ source: temp },);
  });

});
//кінець обробки автодоповнення;