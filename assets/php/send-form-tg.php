<?php
$phone = $_POST['phone'];
// Укажите токен вашего бота
$botToken = "6042697395:AAGZMJeSWLMmtQtUTc-l0oNKIJCiqmcCjiw";

// Укажите ID вашего чата в Телеграм
$chatId = "-1001979269397";

// Получите данные из формы
$phone = $_POST['phone'];

// Отправьте сообщение в Телеграм
$message = "Новый заказ звонка!\nТелефон: $phone";
$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($message);
file_get_contents($url);
?>
