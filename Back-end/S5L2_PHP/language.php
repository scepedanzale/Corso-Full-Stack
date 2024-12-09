<?php
require_once 'config.php';
include_once 'functions.php';

session_start();


if($_REQUEST['lang'] === 'it'){
    $_SESSION['lang'] = 'it';
    news($mysqli);
    if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])) {
        header('Location: ' . $_SERVER['HTTP_REFERER']);
    } else {
        header('Location: index.php'); 
    }
}else if($_REQUEST['lang'] === 'us'){
    $_SESSION['lang'] = 'us';
    news($mysqli);
    if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])) {
        header('Location: ' . $_SERVER['HTTP_REFERER']);
    } else {
        header('Location: index.php'); 
    }
}
