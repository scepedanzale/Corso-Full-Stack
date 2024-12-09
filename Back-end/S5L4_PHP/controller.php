<?php
include_once 'classes/Biblioteca.php';

$books = [];

if(isset($_REQUEST['action']) && $_REQUEST['action']==='addBook'){
    $titolo = $_REQUEST['titolo'];
    $autore = $_REQUEST['autore'];
    $anno_pubb = $_REQUEST['anno_pubb'];
    
    echo "<p>$titolo</p>";
    echo "<p>$autore</p>";
    echo "<p>$anno_pubb</p>";

    $book = new Libro($titolo, $autore, $anno_pubb);
    array_push($books, $book);
    header('Location: index.php');

}

    
    
