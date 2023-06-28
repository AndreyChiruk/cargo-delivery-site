<?php

	$text = $_POST['formtext'];
	$file = $_POST['formfile'];
	$image = $_POST['formimage'];

	$text = htmlspecialchars($text);
	$text = urldecode($text);
	$text = trim($text);

	if(mail("andrey.chiruk33676@gmail.com",
			"Новое письмо с сайта",
			"Задача: ".$text."\n".
			"Файл: ".$file."\n".
			"Фото: ".$image,
			"From: no-reply@mydomain.ru \r\n")
	){
		echo ('Письмо отправлено');
	}
	else{
		echo ('Есть ошибки! Проверте данные...');
	}

?>