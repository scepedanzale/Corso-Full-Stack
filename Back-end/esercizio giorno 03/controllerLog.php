<?php

session_start();

$email = $_POST['email'];
$password = $_POST['password'];

foreach($_SESSION['utenti'] as $key => $value){
    if($email === $value['email']){
        if($password === $value['password']){
            $_SESSION['logged'] = true;
            header('Location: index.php');
        }else{
            echo 'password errata';
        }
    }
}