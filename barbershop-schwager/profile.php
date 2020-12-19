<?php
if (!isset($_COOKIE['user'])) {
  echo "You don't hame an account!";
  exit();
}

$con = mysqli_connect("localhost", "root", "root", "schwager");
if ($con->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$sql = "SELECT * FROM users WHERE id='{$_COOKIE['user']}'";
// echo $sql;


try {
  $result = mysqli_query($con, $sql);
  if (!$result) {
    throw new Exception(mysqli_error($con));
  }

  if (mysqli_num_rows($result) < 0) {
    throw new Exception("User wasn't found");
  }

  $d = mysqli_fetch_assoc($result);
  // var_dump($d);
} catch (Exception $e) {
  echo $e->getMessage();
} finally {
  mysqli_close($con);
}
?>

<!DOCTYPE html>
<html lang="ua">

<head>
  <meta charset="utf-8">
  <title>Вхід — Shcwager</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="shortcut icon" href="img/favicon.ico" type="image/vnd.microsoft.icon">
  <link rel="icon" type="image/png" href="img/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="img/favicon-64x64.png" sizes="64x64">
  <link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="img/favicon-16x16.png" sizes="16x16">
</head>

<body>

  <header class="page-header">
    <nav class="nav-bar  container">

      <a class="inner-logo" href="index.html" title="Повернутись на головну">
        <img src="img/inner-logo.png" width="111" height="24" alt="Барбершоп «Shcwager»">
      </a>

      <ul class="main-nav">
        <li class="main-nav-item">
          <a class="nav-item-link" href="news.html">Новини</a>
        </li>
        <li class="main-nav-item">
          <a class="nav-item-link" href="price.html">Прайс-лист</a>
        </li>
        <li class="main-nav-item">
          <a class="nav-item-link" href="shop.html">Магазин</a>
        </li>
        <li class="main-nav-item">
          <a class="nav-item-link" href="contacts.html">Контакти</a>
        </li>
        <li class="main-nav-item" style="margin-left: 100px;">
          <a class="nav-item-link current-page" href="#">Особистий кабінет</a>
        </li>
      </ul>

    </nav>
  </header>

  <main class="page-main">
    <div class="container">

      <nav class="breadcrumps">
        <a class="breadcrumps-link" href="index.html">Головна</a>
        <a class="breadcrumps-link" href="shop.html">Вхід</a>
        <span class="breadcrumps-current">Особистий кабінет</span>
      </nav>

      <div class="login-content">
        <h1 class="inner-title"><u>Особистий кабінет</u>
        </h1>
        <img src="users/img/<?= $d['photo'] ?>" width="286" alt="Помилка завантаження фото">
        <h2><u>Email</u>: <?= $d['email'] ?></h2>
        <h2><u>Прізвище</u>: <?= $d['lname'] ?></h2>
        <h2><u>Ім'я</u>: <?= $d['fname'] ?></h2>
        <h2><u>Дата народження</u>: <?= $d['date'] ?></h2>
        <h2><u>Про себе</u>: <?= $d['about'] ?></h2>
        <a class="map-btn  btn" href="delete.php?file=<?= $d['photo'] ?>">Delete user</a>
        </form>
      </div>
    </div>
  </main>

  <footer class="page-footer">
    <div class="footer-container  container">

      <p class="footer-contacts">
        Барбершоп «Schwager»<br>
        Адреса: вулиця Джорджа Вашингтона, 8, Львів<br>
        <a class="map-link" href="contacts.html#map" title="Відкрити карту">Як нас знайти?</a><br>
        Телефон: <a href="tel:+380962196766">+380 96 219-67-66</a>
      </p>

      <div class="footer-social">
        <p>Давайте товаришувати:</p>
        <a class="social-btn  social-btn-vk" href="https://vk.com" target="_blank">ВКонтакті</a>
        <a class="social-btn  social-btn-fb" href="https://facebook.com" target="_blank">Фейсбук</a>
        <a class="social-btn  social-btn-inst" href="https://www.instagram.com" target="_blank">Інстаграм</a>
      </div>

      <p class="footer-copyright">
        <a href="https://github.com/kYaRick" title="Подивитись GitHub автора" target="_blank">Розроблено</a>:<a class="copyright-btn  btn" href="#" title="Перехід на зовнішній ресурс" target="_blank">kYaRick</a>
      </p>

    </div>
  </footer>

  <div class="modal-overlay"></div>

  <div class="modal-content-form">
    <h1 class="inner-title">Особистий кабінет</h1>
    <p>Введіть, будь ласка, Ваш логін та пароль</p>
    <form class="login-form" action="index.html" method="post">
      <div class="form-field-group">
        <input id="login-field" class="login-field  login-form-field  form-field" type="text" name="login" placeholder="Логін">
        <label for="login-field" class="form-field-label">Логін</label>
      </div>

      <div class="form-field-group">
        <input id="password-field" class="password-field  login-form-field  form-field" type="password" name="password" placeholder="Пароль">
        <label for="password-field" class="form-field-label">Пароль</label>
      </div>

      <label class="checkbox-field">
        <input class="custom-checkbox  visually-hidden" type="checkbox" name="remember" checked>
        <span class="checkbox-replacer"></span>
        Запам'ятати мене
      </label>

      <a class="restore-link" href="#">Я забув пароль</a>
      <button class="btn" type="submit">Увійти</button>
    </form>
    <p>Вперше на сайті? <a class="sign-up-link" href="#">Зараєструйся!</a></p>
  </div>

  <div class="modal-content-photo"></div>

  <div class="modal-content-map">
    <iframe class="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12248.335841046748!2d24.0636561439483!3d49.80683365826269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ac2a7f04abc0f%3A0xbec6203f204fff76!2z0YPQuy4g0JTQttC-0YDQtNC20LAg0JLQsNGI0LjQvdCz0YLQvtC90LAsIDgsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1608268425313!5m2!1sru!2sua" width="766" height="560"></iframe>
  </div>

  <script type="text/javascript" src="js/scripts.js"></script>

</body>

</html>