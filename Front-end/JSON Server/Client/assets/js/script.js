
const urlApi = 'http://localhost:3000/';


// let btnRegister = document.querySelector('#register-page button');
// console.log(btnRegister)   -> stampa null: script nell'head

document.addEventListener('DOMContentLoaded', () => {
    
    let btnRegister = document.querySelector('#register-page button');
    let btnLogin = document.querySelector('#login-page button');
    let btnCreateProduct = document.querySelector('#formProducts button')
    if(btnRegister){
        btnRegister.addEventListener('click', registerEvent)
    } else if(btnLogin){
        btnLogin.addEventListener('click', loginEvent)
    } else if(btnCreateProduct){
        btnCreateProduct.addEventListener('click', createProducts)
    }
    
    getUserLog();
    
})

// ORGANIZZARE LA LOGICA
// invece che mettere tutto nell'if iniziale: creo funzioni


function getUserLog() {
    let loggedIn = localStorage.getItem('UserLog')
    if(loggedIn){
        let userLog = JSON.parse(loggedIn);
        let logNav = document.querySelector('#logNav');
        logNav.innerHTML = '';
        logNav.innerText = 'Ciao ' + userLog.user.firstname + ' ' + userLog.user.lastname

        // <button type="button" class="btn btn-outline-warning">Warning</button>
        let logOutBtn = document.createElement('button');
        logOutBtn.setAttribute('type', "button")
        logOutBtn.className = "btn btn-sm btn-outline-warning ms-3"
        logOutBtn.innerText = 'Logout';
        logOutBtn.addEventListener('click', () => {
            localStorage.removeItem('UserLog');
            window.location = 'index.html';
        })
        logNav.appendChild(logOutBtn);

        // Creo la voce di menu Admin
        /*
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Admin</a>
            </li>
        */
        let li = document.createElement('li');
        li.className = "nav-item"
        let a = document.createElement('a');
        a.className = "nav-link";
        a.href = "admin.html";
        a.setAttribute('aria-current', "page");
        a.innerText = 'Admin';
        li.appendChild(a);
        document.querySelector('#navbarText ul').appendChild(li);
        getProducts()  // crea tabella e cards solo se sono loggato
    }
}


// Funzione Registrazione
function registerEvent(e) {
    e.preventDefault();
    let firstname = document.querySelector('#register-page input#firstname').value.trim();
    let lastname = document.querySelector('#register-page input#lastname').value.trim();
    let city = document.querySelector('#register-page input#city').value.trim();
    let email = document.querySelector('#register-page input#email').value.trim();
    let password = document.querySelector('#register-page input#password').value.trim();

    //console.log(firstname, lastname, city, email, password);
    let obj = {
        firstname,
        lastname,
        city,
        email,
        password
    }
    fetch(urlApi+'register', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj) })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}
// Funzione Login
function loginEvent(e) {
    e.preventDefault();
    let email = document.querySelector('#login-page input#email').value.trim();
    let password = document.querySelector('#login-page input#password').value.trim();
    fetch(urlApi+'login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                email,
                password
            }) })
        .then(response => response.json())
        .then(json => statusResponse(json))
        .catch(err => console.log(err))
}

function statusResponse(response) {
    /* <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    */
    let form = document.querySelector('#login-page form');
    form.lastElementChild.role !== null ? form.removeChild(form.lastElementChild) : null;

    let alertDiv = document.createElement('div');
    alertDiv.setAttribute('role', "alert")
    alertDiv.className = "alert alert-dismissible fade show mx-3";
    
    if(response.accessToken){
        alertDiv.classList.add('alert-success');
        alertDiv.innerText = "Logged In!!"
        document.querySelector('#login-page input#email').value = '';
        document.querySelector('#login-page input#password').value = '';

        localStorage.setItem('UserLog', JSON.stringify(response))
        getUserLog();
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerText = response
    }

    let alertBtn = document.createElement('button');
    alertBtn.className = "btn-close";
    alertBtn.setAttribute('type', "button");
    alertBtn.setAttribute('data-bs-dismiss', "alert");
    alertBtn.setAttribute('aria-label', "Close");
    alertDiv.appendChild(alertBtn);

    document.querySelector('#login-page form').appendChild(alertDiv);
}


// ADMIN 
// Funzione di creazione prodotti
function createProducts(e){
    e.preventDefault()
    let titolo = document.querySelector('#formProducts #titolo').value.trim();
    let marca = document.querySelector('#formProducts #marca').value.trim();
    let modello = document.querySelector('#formProducts #modello').value.trim();
    let categoria = document.querySelector('#formProducts #categoria').value.trim();
    let prezzo = document.querySelector('#formProducts #prezzo').value.trim();
    let quantita = document.querySelector('#formProducts #quantita').value.trim();
    let immagine = document.querySelector('#formProducts #immagine').value.trim();
    
    let obj = {
        titolo,
        marca,
        modello,
        categoria,
        prezzo,
        quantita,
        immagine
    } 
    // chiamata POST
    fetch(urlApi+'products', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj) })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}


function getProducts(){
    fetch(urlApi+'products')
    .then(response => response.json())
    .then(json => {
        let tBody = document.querySelector('tbody')
        let cards = document.querySelector('#cards')
        // Tabella
        if(tBody){   // se è presente la tab...
            createTable(tBody, json)
            console.log(json)
        }else if(cards){   // se è presente il div cards...
            createCards(cards, json)
            console.log(json)
        }
    })
    .catch(error => console.log(error))
}



// Creazione tabella
function createTable(tBody, json){
        for(let i = 1; i<=json.length; i++){
            let tr = document.createElement('tr')
            tr.className = 'overflow-scroll';
            tr.innerHTML = `
                <button type="button" class="btn btn-danger" id="btnElimina-${json[i-1].id}"><i class="bi bi-trash" id="iconElimina-${json[i-1].id}"></i></button>
                <button type="button" class="btn btn-warning" id="btnModifica-${json[i-1].id}"><i class="bi bi-pencil-square" id="iconModifica-${json[i-1].id}"></i></button>
                <th>${json[i-1].id}</th>
                <td>${json[i-1].titolo}</td>
                <td>${json[i-1].marca}</td>
                <td>${json[i-1].modello}</td>
                <td>${json[i-1].categoria}</td>
                <td>${json[i-1].prezzo}</td>
                <td>${json[i-1].quantita}</td>
                <td>${json[i-1].immagine}</td>`

                tBody.appendChild(tr)
            }   
             
            tBody.addEventListener('click', (event)=> {
                let params = event.target.id.split('-');
                console.log(params)
                if(params[0] === 'btnElimina' || params[0] === 'iconElimina'){
                    if(confirm("Vuoi eliminare l'elemento?")==true){
                        fetch(urlApi+'products/'+params[1], {
                            method: 'DELETE'
                        })
                        .then(response => response.json())
                        .catch(err => console.log(err))
                    }
                }else if(params[0] === 'btnModifica' || params[0] === 'iconModifica'){
                    alert('weweee')
                    let modale = document.querySelector('#modale') 
                    modale.innerHTML = `
                    <div class="modal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>`
                }
            })
}

//Creazione Cards
function createCards(cards, json){
        let container = document.createElement('div')
        container.className = 'container'
        let row = document.createElement('div')
        row.className = 'row'
        for(let i = 1; i<=json.length; i++){
            let column = document.createElement('div')
            column.className = 'col-12 col-md-6 col-lg-3'
            let card = document.createElement('div')
            card.className = 'card'
            card.setAttribute('height', '5em')
            let cardBody = document.createElement('div')
            cardBody.className = 'card-body'
            
            let titolo = document.createElement('p')
            let strong = document.createElement('strong')
            titolo.className = 'card-title'
            strong.innerText = json[i-1].titolo
            titolo.appendChild(strong)
            
            let descrizione = document.createElement('p')
            descrizione.innerText = json[i-1].marca+' - '+json[i-1].modello

            let img = document.createElement('img')
            img.setAttribute('src', json[i-1].immagine)

            let prezzo = document.createElement('p')
            prezzo.innerText = json[i-1].prezzo+' € '

            cardBody.appendChild(titolo)
            cardBody.appendChild(descrizione)
            cardBody.appendChild(prezzo)
            card.appendChild(img)
            card.appendChild(cardBody)
            column.appendChild(card)
            row.appendChild(column)
            container.appendChild(row)
            
            cards.appendChild(container)
    }
}
