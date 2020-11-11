// $("#checking_form").on("click", function () {
//   $("#popup").addClass("popup_show");

//   const inputs = document.querySelectorAll("input[type=checkbox]");
//   let languages = "";
//   inputs.forEach(function (input) {
//     if (input.checked) {
//       languages += input.value + " ";
//     }
//   })

//   console.log($("#about_text").val())

//   document.getElementById("text").innerHTML =
//     "Електронна пошта:" + $("input[name = 'email']").val() + " <br> " +
//     "Прізвище: " + $("input[name = 'sur_name']").val() + "<br>" +
//     "Ім'я: " + $("input[name = 'first_name']").val() + "<br>" +
//     "Дата народження: " + $("input[name = 'bd_date']").val() + "<br>" +
//     "Пароль: відповідає вимогам" + "<br>" +
//     "Мова|и: " + languages + "<br>" +
//     "Інформація про Вас:" + $("#about_text").val() + "<br>" +
//     "Фото: відповідає вимогам";
// });
// $("#popup__close").on("click", function () {
//   $("#popup").removeClass("popup_show");
// });