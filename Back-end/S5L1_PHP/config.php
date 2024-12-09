<?php

$mysqli = new mysqli('localhost', 'root', '', 'S5L1_PHP');

if ($mysqli->connect_error) {
    die('Errore di connessione al database: ' . $mysqli->connect_error);
}

