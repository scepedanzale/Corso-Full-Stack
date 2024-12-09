<?php

interface Prestito{
    public function presta();
    public function restituisci();
}

abstract class MaterialeBibliotecario implements Prestito{
    private static $contatoreMateriali = 0;

    function __construct(){
        self::$contatoreMateriali++;
    }
    protected static function decrementaMateriali(){
        self::$contatoreMateriali--;
    }
    protected static function incrementaMateriali(){
        self::$contatoreMateriali++;
    }

    public static function getContatoreMateriali(){
        return self::$contatoreMateriali;
    } 
}

class Libro extends MaterialeBibliotecario{
    private static $contatoreLibri = 0;
    public $titolo;
    public $autore;
    public $anno_pubblicazione;

    function __construct($titolo, $autore, $anno_pubblicazione){
        $this->titolo = $titolo;
        $this->autore = $autore;
        $this->anno_pubblicazione = $anno_pubblicazione;
        self::$contatoreLibri++;
    }

    public static function contaLibri(){
        return self::$contatoreLibri;
    }
    public function presta(){
         parent::decrementaMateriali();
    }
    public function restituisci(){
         parent::incrementaMateriali();
    }
}


/*
class DVD extends MaterialeBibliotecario{
    private $titolo;
    private $regista;
    private $anno_pubblicazione;

    function __construct($titolo, $regista, $anno_pubblicazione){
        $this->titolo = $titolo;
        $this->regista = $regista;
        $this->anno_pubblicazione = $anno_pubblicazione;
    }

    public function contaDVD(){
        return self::$contatoreMateriali;
    } 
}



/* 

Creare una classe astratta chiamata MaterialeBibliotecario che implementa l'interfaccia 
Prestito e contiene un attributo statico $contatoreMateriali per tenere traccia del numero 
totale di materiali nella biblioteca. Creare due sottoclassi di MaterialeBibliotecario: 
Libro: con attributi come titolo, autore, annoPubblicazionee un metodo statico contaLibri() 
per contare il numero totale di libri nella biblioteca. DVD: con attributi come titolo, 
regista, annoPubblicazionee un metodo statico contaDVD() per contare il numero totale di 
DVD nella biblioteca.

Implementazione dei metodi: Nel metodo presta() di MaterialeBibliotecario, decrementare il 
numero disponibile di materiali. Nel metodo restituisci() di MaterialeBibliotecario, incrementare 
il numero disponibile di materiali. Implementare i metodi contaLibri() e contaDVD() delle sottoclassi 
Libro e DVD, che utilizzano l'attributo statico $contatoreMaterialiper contare il numero totale 
di libri e DVD nella biblioteca.

Test dell'applicazione: Creare alcuni oggetti di tipo Libroe DVDe testare i metodi di prestito e restituzione. 
Utilizzare i metodi statici contaLibri() e contaDVD() per verificare il numero totale di libri e DVD presenti
 nella biblioteca.

*/