<?php

$mysqli = new mysqli('localhost', 'root', '', 'S5L2_PHP');

if($mysqli->connect_error){die($mysqli->connect_error);}

/* $sql = 'CREATE DATABASE IF NOT EXISTS S5L2_PHP';
if(!$mysqli->query($sql)){die($mysqli->connect_error);} */


$sql = 'CREATE TABLE IF NOT EXISTS content_it ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    img VARCHAR(255) NOT NULL, 
    author VARCHAR(100) NOT NULL 
)';
if(!$mysqli->query($sql)) { die($mysqli->connect_error); }

/* $title = "DUOMO DI MILANO";
$content = "<p>Il Duomo di Milano, capolavoro dell\'architettura gotica, è una cattedrale imponente che domina il centro storico della città di Milano, nel nord Italia. Iniziato nel XIV secolo, il suo completamento ha richiesto diversi secoli, dando vita a una struttura di straordinaria bellezza e complessità. Con le sue cinque navate, le maestose guglie e le innumerevoli sculture che adornano la sua facciata, il Duomo è un monumento alla fede e alla creatività umana. </p>
            <p>Le sue vetrate colorate filtrano la luce del sole, creando un\'atmosfera di sacralità e meraviglia all\'interno della cattedrale. Ogni angolo del Duomo racconta una storia, dalle sue fondamenta fino alla sua imponente facciata di marmo, testimoniando secoli di storia e cultura milanese.</p>";
$img = "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2022/05/02/1651509563-milano-duomo-1.jpg?_=1651509563";
$author = "Umberto Emanuele";

// Leggo dati da una tabella
$sql = 'SELECT * FROM content_it';
$res = $mysqli->query($sql); // return un mysqli result
if($res->num_rows > 0) { 
    // Inserisco dati in una tabella
    $sql = "INSERT INTO content_it (title, content, img, author) 
        VALUES ('$title', '$content', '$img', '$author');";
    if(!$mysqli->query($sql)) { echo($mysqli->connect_error); }
    else { echo 'Record aggiunto con successo!!!';}
}
 */
// Creo la tabella content US
$sql = 'CREATE TABLE IF NOT EXISTS content_us ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    img VARCHAR(255) NOT NULL, 
    author VARCHAR(100) NOT NULL 
)';
if(!$mysqli->query($sql)) { die($mysqli->connect_error); }

/* $title = "THE MILAN CATHEDRAL";
$content = "<p>The Milan Cathedral, a masterpiece of Gothic architecture, is an imposing cathedral that dominates the historic center of the city of Milan, in northern Italy. Begun in the 14th century, its completion took several centuries, resulting in a structure of extraordinary beauty and complexity. With its five naves, majestic spires, and countless sculptures adorning its facade, the Duomo is a monument to faith and human creativity. Its stained glass windows filter the sunlight, creating an atmosphere of sanctity and wonder inside the cathedral. </p>
            <p>Every corner of the Duomo tells a story, from its foundations to its imposing marble facade, bearing witness to centuries of Milanese history and culture.</p>";


// Leggo dati da una tabella
$sql = 'SELECT * FROM content_us';
$res = $mysqli->query($sql); // return un mysqli result
if($res->num_rows > 0) { 
    // Inserisco dati in una tabella
    $sql = "INSERT INTO content_us (title, content, img, author) 
        VALUES ('$title', '$content', '$img', '$author');";
    if(!$mysqli->query($sql)) { echo($mysqli->connect_error); }
    else { echo 'Record aggiunto con successo!!!';}
}

 */