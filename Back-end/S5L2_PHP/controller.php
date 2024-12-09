<?php

require_once 'config.php';
require_once 'functions.php';

if(isset($_REQUEST['action']) && $_REQUEST['action'] === 'addUser'){

    $nome = strlen(htmlspecialchars(trim($_REQUEST['nome']))) > 1 ? htmlspecialchars(trim($_REQUEST['nome'])) : exit();
    $cognome = strlen(htmlspecialchars(trim($_REQUEST['cognome']))) > 1 ? htmlspecialchars(trim($_REQUEST['cognome'])) : exit(); 

    $regexEmail = '/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/m';
    preg_match_all($regexEmail, htmlspecialchars($_REQUEST['email']), $matchesEmail, PREG_SET_ORDER, 0);
    $email = $matchesEmail ? htmlspecialchars($_REQUEST['email']) : exit();

    $regexPass = '/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/';
    preg_match_all($regexPass, htmlspecialchars($_REQUEST['password']), $matchesPass, PREG_SET_ORDER, 0);
    $pass = $matchesPass ? htmlspecialchars($_REQUEST['password']) : exit();
    $password_hash = password_hash($pass, PASSWORD_DEFAULT);
    
    addUser($mysqli, $nome, $cognome, $email, $password_hash); 

}else if(isset($_REQUEST['action']) && $_REQUEST['action'] === 'isLogged'){
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];

    login($mysqli, $email, $password);
}else if(isset($_REQUEST['action']) && $_REQUEST['action'] === 'logout'){
    session_start();
    session_unset();
    exit(header('Location: login.php'));
}
