<?php


require_once 'functions.php';

/* $sql = 'CREATE DATABASE S5L1_PHP';

if($mysqli->query($sql)){
    echo 'db creato';
} */

/* $sql = 'CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) NOT NULL,
    cognome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE
)';

if($mysqli->query($sql)){
    echo 'tabella creata';
} */

if(isset($_REQUEST['action']) && $_REQUEST['action'] === 'addUser'){
    $nome = strlen(htmlspecialchars(trim($_REQUEST['nome']))) > 1 ? htmlspecialchars(trim($_REQUEST['nome'])) : exit();
    $cognome = strlen(htmlspecialchars(trim($_REQUEST['cognome']))) > 1 ? htmlspecialchars(trim($_REQUEST['cognome'])) : exit(); 

    $regexEmail = '/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/m';
    preg_match_all($regexEmail, htmlspecialchars($_REQUEST['email']), $matchesEmail, PREG_SET_ORDER, 0);

    $email = $matchesEmail ? htmlspecialchars($_REQUEST['email']) : exit();
    
    addUser($mysqli, $nome, $cognome, $email); 
}


