/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2){
    return l1 * l2;
}
console.log(area(2, 4));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y){
    if(x === y){
        return (x+y)*3;
    }else{
        return x+y;
    }
}
console.log(crazySum(5, 5));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazyDiff(x){
    if(x >19){
        return Math.abs((x - 19) *3);
    }else{
        return Math.abs(x - 19);
    }
}

console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n>20 && n<=100){
        return true;
    }else if(n === 400){
        return false;
    }else{
        return 'Errato';
    }
}
console.log(boundary(400))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(x){
    let ep = 'EPICODE ';
    if(x.indexOf('EPICODE') >= 0){
        return x;
    }else{
        return ep.concat(x);
    }
}
console.log(epify('Questa è una stringa'));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x){
    if(x % 3 == 0 || x % 7 == 0){
        return x + ' è un multiplo di 3 o 7';
    }else{
        return x + ' non è un multiplo di 3 o 7';
    }
}
console.log(check3and7(49));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str){
    let splitStr = str.split("");
    let reverse = splitStr.reverse();
    let joinArr = reverse.join("");
    return joinArr;
}
console.log(reverseString('epicode'))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){    // frase
    let arrStr = str.split(" ");   //  array delle parole
    let upWords = "";

    for(let i = 0; i < arrStr.length; i++){   // itero parole
        let word = arrStr[i];  // ogni parola in variabile
        upWords += word.charAt(0).toUpperCase() + word.slice(1); 
        if(i <arrStr.length-1){
            upWords += " ";
        }
    }       
     return upWords;
}
console.log(upperFirst("questa stringa è tutta in minuscolo"));



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str){
    let final = str.lastIndexOf();
    let sliceStr = str.slice(1, final);
    return sliceStr;
}
console.log(cutString("Stringa dell'esercizio nove"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n e ritorna un array 
 contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let arr = [];
    for(let i = 0; i<n; i++){
        let random = Math.random() * 10;
        let num = Math.round(random);
        arr.push(num);
    }
    return arr;
    
}
console.log(giveMeRandom(4))