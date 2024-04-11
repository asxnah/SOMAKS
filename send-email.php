<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $inn = $_POST['inn'];
  $num = $_POST['num'];
  $email = $_POST['email'];
}

$to = 'zorina.olga.73@mail.ru';
$subject = 'С нами связались через наш веб-сайт!';
$message = "
Имя или название: $name\n
Номер: $num\n
Электронная почта: $email\n
ИНН: $inn
";

if (mail($to, $subject, $message)) {
  echo "Спасибо, мы Вам перезвоним!";
  exit;
} else {
  echo "
  Что-то пошло не так. 
  Свяжитесь с нами по нашим <a href='#contact' class='unln bold'>контактам</a>
  ";
}