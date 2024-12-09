<?php
require_once 'config.php';

function addUser($mysqli, $nome, $cognome, $email, $password){
    $sql = "INSERT INTO utenti (nome, cognome, email, password) VALUES ('$nome', '$cognome', '$email', '$password')";
    if(!$mysqli->query($sql)) { die($mysqli->connect_error); }
    header('Location: index.php');
}

function login($mysqli, $email, $password){
    $sql = "SELECT * FROM utenti WHERE email = '$email'";
    $response = $mysqli->query($sql);
    if($response) { 
        $result = $response->fetch_assoc(); 
    }
    if(password_verify($password, $result['password'])){
        session_start();
        $_SESSION['logged'] = $result;
        if(isset($_REQUEST['check'])) {
            setcookie("useremail", $result['email'], time()+20*24*60*60);
            setcookie("userpassword", $result['password'], time()+20*24*60*60);
        }
        exit(header('Location: index.php'));
    }
}

function news($mysqli){
    $sql = 'SELECT * FROM content_'.$_SESSION['lang'];
    $res = $mysqli->query($sql);
    $result = [];
    if($res){
        while($row = $res->fetch_assoc()){
            array_push($result, $row);
        }
        $_SESSION['content'] = $result;
        session_write_close();
        if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])) {
            header('Location: ' . $_SERVER['HTTP_REFERER']);
        } else {
            header('Location: index.php'); 
        }
    }
    return $result;
}

function article($id){
    $articoli = $_SESSION['content'];
        foreach($articoli as $a){
            if($a['id'] === $id){
                $articolo = $a;
            }
        }
    return $articolo;
}