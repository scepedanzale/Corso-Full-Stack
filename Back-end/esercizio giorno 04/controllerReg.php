<?php

session_start();

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$telefono = $_POST['telefono'];
$citta = $_POST['citta'];
$email = $_POST['email'];
$password = $_POST['password'];

$utente = [
    'firstname' => $firstname,
    'lastname' => $lastname,
    'telefono' => $telefono,
    'citta' => $citta,
    'email' => $email,
    'password' => $password
];

/* foreach ($array as $key => $value) {
    echo $key . ': ' . $value . '<br>';
} */

if(!isset($_SESSION['utenti'])) {
    $_SESSION['utenti'] = [];
}

$_SESSION['utenti'][] = $utente;

exit(header('Location: login.php'));