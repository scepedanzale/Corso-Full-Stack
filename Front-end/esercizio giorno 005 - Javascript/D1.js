/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  Tra i principali datatype ci sono:
  - string : indica una sequenza di caratteri o uno singolo e si definiscono tra apici singoli o doppi
  - number : si usa per indicare numeri interi o decimali
  - boolean : contiene il valore true o false
  - undefined : indica una variabile non ancora definita
  - null : indica una variabile intenzionalmente vuota 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


  let name = 'Celeste';


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


  let num1 = 12;
  let num2 = 20;
  let somma = num1 + num2;
  console.log(num1 + ' + ' + num2 + ' = ' + somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 
  let x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


  name = 'Artuso';
  console.log(name);
  
/*
  const lettera = 'a';
  lettera = 'b';
  console.log(lettera);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


  let num3 = 4;
  console.log(x - num3);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


  let name1 = 'john';
  let name2 = 'John';
  let control = (name1 != name2);
  console.log(control)

  let lower = name2.toLowerCase();
  let newControl = (name1 === lower);
  console.log(newControl);
