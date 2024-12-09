<?php

    $connessione = new mysqli('localhost', 'root', '', 'ifoa');

    if($connessione){
        echo 'sei connesso!';
    }else{
        echo 'problemi con la connessione';
    }