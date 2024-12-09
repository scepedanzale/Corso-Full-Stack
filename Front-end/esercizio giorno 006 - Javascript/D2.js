/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 12;
let num2 = 5;

if(num1>num2){
  console.log(num1 + ' è più grande di ' + num2);
}else if(num1<num2){
  console.log(num2 + ' è più grande di ' + num1);
}else{
  console.log('i due numeri sono uguali');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 2;

if(num3 != 5){
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 6;
let divisione = num4%5;

if(divisione==0){
  console.log('divisibile per 5');
}else{
  console.log('non divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 3;
let num6 = 4;
let somma = num5 + num6;
let diff1 = num5 - num6;
let diff2 = num6 - num5;

if(num5 == 8 || num6 == 8 || somma == 8 || diff1 == 8 || diff2 == 8){
  console.log('un numero è 8');
}else{
  console.log('nessun numero è 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 23;

if(totalShoppingCart > 50){
  console.log('La spedizione è gratuita, il totale è: ' + totalShoppingCart);
}else{
  console.log('Il totale è: ' + (totalShoppingCart + 10));
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

let totalShoppingCart2 = 23;
totalShoppingCart2 = totalShoppingCart2 * 0.8;

if(totalShoppingCart > 50){
  console.log('La spedizione è gratuita, il totale è: ' + totalShoppingCart2);
}else{
  console.log('Il totale è: ' + (totalShoppingCart2 + 10));
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 13;
let y = 4;
let z = 21;

if(x > y){
  if(y > z){
    console.log(x, y, z)
  }else if(z > x){
    console.log(z, x, y)
  }else if(z > y){
    if(z > x){
      console.log(z, x, y);
    }else if(x > z){
      console.log(x, z, y)
    }
  }
}else if(y > x){
  if(x > z){
    console.log(y, x, z);
  }else if(z > x){
    if(y > z){
      console.log(y, z, x)
    }else if(z > y){
      console.log(z, y, x)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let variabile = 34;

if(typeof variabile === 'number'){
  console.log('è un numero');
}else if(typeof variabile === 'string'){
  console.log('è una stringa')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num7 = 21;

if(num7 % 2 == 1){
  console.log(num7 + ' è un numero dispari');
}else{
  console.log(num7 + ' è un numero pari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7;
  if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/  

let val = 7;
  if (val < 3) {
    console.log("Meno di 3");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log(arr);

/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arr.splice(9, 1, 100);
console.log(arr);