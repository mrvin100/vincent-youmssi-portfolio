<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  // Email configuration (replace with your details)
  $to = 'vincentyoumssi@gmail.com';
  $subject = 'Portfolio Contact Form - ' . $name;
  $body = "Name: $name\nEmail : $email\n\nMessage:\n$message";
  $headers = "From: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you for your message!';
  } else {
    echo 'There was an error sending your message.';
  }
}

?>