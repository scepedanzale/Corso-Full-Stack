<?php
require_once 'config.php';

function addUser($mysqli, $nome, $cognome, $email){
    $sql = "INSERT INTO users (nome, cognome, email) VALUES ('$nome', '$cognome', '$email')";
    if(!$mysqli->query($sql)) { die($mysqli->connect_error); }
    header('Location: index.php');
}

function getAllUsers($mysqli){
    $sql = "SELECT * FROM users";

    $result = [];
    $res = $mysqli->query($sql);
    if($res){
        while($row = $res->fetch_assoc()){
            array_push($result, $row);
        }
    }
    return $result;
}

function createCsv($mysqli, $users){
    $dir = 'file/';
    $file = 'users.csv';
    $array = [];

    if(!file_exists($dir)){
        mkdir($dir, 0777);
    }

    $resource = fopen($dir.$file, 'w');
    if($resource) {
        foreach($users as $user) {
            fputcsv($resource, $user, ';');
        }
        fclose($resource);
    }

    // Lettura di un file CSV file/users.csv
    $resource = fopen($dir.$file, 'r');
    while($data = fgetcsv($resource)) {
        //print_r($data);
        $user = implode('', $data);
        $userArr = explode(';', $user);
        $arrObj = [
            'nome' => $userArr[1],
            'cognome' => $userArr[2],
            'email' => $userArr[3]
        ];

        $array[] = $arrObj;

    }
    fclose($resource);

    return $array;
}

?>