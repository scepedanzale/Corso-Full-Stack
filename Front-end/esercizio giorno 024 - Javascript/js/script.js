/*
    1. Registrati per ottenere la tua API key: https://www.pexels.com/api/new/
    2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:

    //  API Key   NVNvzTybzIxSxBuOFfQRcvWPcFEuI67laMeqtzcadonXP3YGevafOxPx

    ESERCIZIO

    1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: 
        https://api.pexels.com/v1/search?query=[your-query]

    2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:
        https://api.pexels.com/v1/search?query=[your-secondary-query]

    3) Il tasto "Edit" andrà sostituito con un tasto "Hide".

    4) Quando si preme "Hide", l'intera card dovrebbe scomparire.

    5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.

    6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.

    7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.

    8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.

    9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.

 */


   

let query = '';  // input dell'utente

document.addEventListener('DOMContentLoaded', ()=>{
    LoadImages()    // Load Images
    LoadSecondaryImages()   // Load Secondary Images 
    hide()  // Hide Button
    searchImages()  // Search images
    detailsImages()
})


// Chiamata Ajax
let promise = query => {
    fetch('https://api.pexels.com/v1/search?query=' + query, {
            method:"GET",
            headers:{
                "Authorization": "NVNvzTybzIxSxBuOFfQRcvWPcFEuI67laMeqtzcadonXP3YGevafOxPx"
            }
        })
        .then(response => response.json())
        .then(json => {
            setCards(json)
            console.log(json.photos)
        })
        .catch(error => console.log(error))
}

function setCards(json){
    let imgs = document.querySelectorAll('.card img');  // seleziono tutte le immagini
    let title = document.querySelectorAll('.card h5');  // seleziono tutti i titoli
    let p = document.querySelectorAll('.card p');  // seleziono tutte le descrizioni
    let small = document.querySelectorAll('.card small');
    imgs.forEach((img, index)=>{
        img.src = json.photos[index].src.medium;
        img.setAttribute("style", 'height: 10em; object-fit: cover; cursor: pointer;')
        small.forEach((el, i)=>{
            if(i === index){
                el.innerText= json.photos[index].id
            }
        })
        title.forEach((el, i)=>{
            if(i === index){
                el.innerText= json.photos[index].alt
            }
        })
        p.forEach((el, i)=>{
            if(i === index){
                el.innerText= json.photos[index].photographer
            }
        })
    })
}

// Load Images
function LoadImages(){
    let loadImages = document.querySelector('section div .btn-primary ');
    loadImages.addEventListener('click', ()=>{
        promise('mountain')
    })
}

// Load Secondary Images
function LoadSecondaryImages(){
    let loadSecondaryImage = document.querySelector('section div .btn-secondary ');
    loadSecondaryImage.addEventListener('click', ()=>{
        promise('camping')
    })
} 

// Nascondi card
function hide (){
    let hide = document.querySelectorAll('.btn-group button:nth-child(2)')
    hide.forEach((btn)=>{
        btn.innerHTML = 'Hide'
        btn.addEventListener('click', ()=>{
            btn.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        })
    })
}

// Input di ricerca
function searchImages(){
    let searchBtn = document.querySelector('.input-group button')
    searchBtn.addEventListener('click', () => {
        let input = document.querySelector('.input-group input').value;
        promise(input)
    })
}

function detailsImages(){
    let imgs = document.querySelectorAll('.card img')
    imgs.forEach((img)=>{
        img.addEventListener('click', ()=>{
            location = "details.html";
          
        })
    })
}