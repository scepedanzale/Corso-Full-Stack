// Esercizi aggiuntivi (facoltativi) per D4
console.log('----------------------------------- EXTRA -----------------------------------')

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom(){
    let random = Math.round(Math.random()*10);
    return random;
}
console.log(giveMeRandom());

let arr = [];
for(let i = 0; i<10; i++){
    arr.push(giveMeRandom());
}
console.log(arr);
let sum = 0;

function checkArray(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>5){
            console.log(arr[i] + ' è maggiore di 5');
            sum += arr[i];
        }
    }
    return sum;
}
console.log(checkArray());



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
        price: 60,
        name: 'Zelda - Breath of the Wild',
        id: 8231,
        quantity: 4
    },
    {
        price: 70,
        name: 'Zelda - Tears of the Kingdom',
        id: 4257,
        quantity: 2
    },
    {
        price: 50,
        name: 'Kirby e la terra perduta',
        id: 2363,
        quantity: 3
    },
    {
        price: 20,
        name: 'Little Nightmares',
        id: 2349,
        quantity: 5
    },
    {
        price: 65,
        name: 'Pokémon Platino',
        id: 5231,
        quantity: 2
    }
]

function shoppingCartTotal(){
    let somma = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        let cost = shoppingCart[i].price;
        let total = cost * shoppingCart[i].quantity;
        somma += total;
    }
    return somma;
}
console.log('Il totale del carrello è ' + shoppingCartTotal());


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let obj = {
        price: 65,
        name: 'Pokémon Scudo',
        id: 7341,
        quantity: 1
    }
function addToShoppingCart(){
    shoppingCart.push(obj);
    return shoppingCart.length;
}
console.log(addToShoppingCart());
//console.log(shoppingCart);



/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(){
    let price = 0;
    let array = [];
    for(let i = 0; i<shoppingCart.length; i++){
        price = shoppingCart[i].price
        array.push(price);
    }
    let maxPrice = Math.max(...array);
    return maxPrice;
}

console.log('Il prezzo più alto nel carrello è: ' + maxShoppingCart());




/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/


function latestShoppingCart(){
   let lastEl = shoppingCart[shoppingCart.length-1];
   return lastEl;
}
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

let newNum = prompt('Inserisci un numero compreso tra 0 e 8');

function loopUntil(newNum){
    let random = 0; 
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let stop = [];
    let array = [];
    while(true){
        random = Math.round(Math.random()*9);
        console.log(random);
        array.push(random);
        num1 = array[array.length-3];
        num2 = array[array.length-2];
        num3 = array[array.length-1];
        if(num1>newNum && num2>newNum && num3>newNum){
            stop.push(num1, num2, num3);
            break;
        }
    }
    return stop;
}

console.log(loopUntil(newNum));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

let arrayMix = [6, 23, 'ciao', 1, 'gatto', 'stringa', 77, 36, 62, 'epicode', 44, 19];
function average(){
    let arrayNums = [];
    for(let i = 0; i < arrayMix.length; i++){
        if(typeof arrayMix[i] == 'number'){
            arrayNums.push(arrayMix[i])
        }
    }
    let somma = 0;
    for(let i = 0; i < arrayNums.length; i++){
        somma += arrayNums[i];
    } 
    let media = somma/arrayNums.length;
    return media;
}
console.log('La media aritmetica dei valori è di ' + average());


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

let arrStr = [
    'Questa è una stringa',
    'Na einai kalitero anthropo apo ton pathera tou',
    'The day after tomorrow',
    'Questa è un altra stringa',
    'Questa non è affatto una stringa',
    'Hello there'
]
function longest(arrStr){
    let maxLength = 0;
    let arrLength = [];
    for(let i = 0; i < arrStr.length; i++){
        arrLength.push(arrStr[i].length);
        maxLength = Math.max(...arrLength);
    } 
    console.log(arrLength)
    return maxLength;
}
console.log(longest(arrStr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

let emailContent = 'Questa scam è una stringa';
function antiSpam(emailContent){
    let searchSpam = emailContent.search('spam');
    let searchScam = emailContent.search('scam');
    if(searchSpam >= 0 || searchScam >= 0 ){
        return false;
    }
    return true;
}
console.log(antiSpam(emailContent))


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

let date = new Date(2023, 8, 17);
function numDays(date){
    let now = new Date();
    let days = Math.round((now - date) / (1000*60*60*24));
    return days
}
console.log(numDays(date));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

let array =[
        [],
        [],
        []
    ];

function matrixGenerator(x, y){
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}
console.log(matrixGenerator(3, 2));