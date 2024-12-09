<?php

session_start();

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$citta = $_POST['citta'];

$utente = [
    'firstname' => $firstname,
    'lastname' => $lastname,
    'email' => $email,
    'telefono' => $telefono,
    'citta' => $citta
];

/* foreach ($array as $key => $value) {
    echo $key . ': ' . $value . '<br>';
} */

if(!isset($_SESSION['utenti'])) {
    $_SESSION['utenti'] = [];
}

$_SESSION['utenti'][] = $utente;

header('Location: index.php');