let random = 0;
let btn = document.createElement('button')
let tabellone = document.querySelector('#tabellone')
let formArea = document.querySelector('#formArea')
let tabArea = document.querySelector('#tabUser');
let arrayTab = [];
let arrayCart = [];
let qty = 0;


function creaTabellone(){
    for(let i = 1; i <= 76; i++){
        let num = document.createElement('div')
        num.innerText = i;
        tabellone.appendChild(num)
    }    
}

// Estrazione numero casuale
function estrazioneNumero(){
    btn.innerText = 'estrai';
    tabellone.appendChild(btn)
    btn.addEventListener('click', ()=>{
        let num = document.querySelectorAll('#tabellone div')
        let numCart = document.querySelectorAll('#tabUser td');
        while(true){
            random = Math.ceil(Math.random()*76)
            if(!arrayTab.includes(random)){
                num.forEach((ele)=>{
                    if(Number(ele.innerHTML) === random){
                        ele.className = 'selected';
                        arrayTab.push(random)
                    }
                })
                numCart.forEach((ele)=>{
                    if(Number(ele.innerHTML) === random){
                        ele.className = 'selected';
                    }
                })
                break;
            }   
        }
    })
}

// Form e cartelle giocatore
function input(){
    let form = document.createElement('form')
    let label = document.createElement('p')
    label.innerText = 'Con quante cartelle vuoi giocare? Scegli un numero da 1 a 6'

    // creazione campo input
    let input = document.createElement('input')
    let type = document.createAttribute('type')
    type.value = 'number';
    let min = document.createAttribute('min')
    min.value = '1';
    let max = document.createAttribute('max')
    max.value = '6';
    input.setAttributeNode(type)
    input.setAttributeNode(min)
    input.setAttributeNode(max)

    let btn = document.createElement('button')
    btn.innerText= 'conferma'
    btn.addEventListener('click', (e)=>{
        qty = input.value
        if(qty==''){
            alert('devi inserire un numero')
        }else if(qty<1 || qty>6){
            alert('scegli un numero di cartelle tra 1 e 6')
        }else{
            // Creazione tabelle
            for(let i = 1; i<=qty; i++){
                arrayCart = [];
                let table = document.createElement('table');
                for(let i = 1; i<=4; i++){
                    let tr = document.createElement('tr');
                    for(let i = 1; i<=6; i++){
                        random = Math.ceil(Math.random()*76);
                        if(!arrayCart.includes(random)){
                            let td = document.createElement('td');
                            td.innerText = random;
                            arrayCart.push(random);  
                            tr.appendChild(td);
                            table.appendChild(tr);
                            tabArea.appendChild(table);  
                        }
                    }
                }
            }
            back()       
            creaTabellone()
            estrazioneNumero()    
            btn.parentNode.remove()
        }
        e.preventDefault()
    })
    formArea.appendChild(form);
    form.appendChild(label)
    form.appendChild(input);
    form.appendChild(btn);
}

// bottone per tornare indietro
function back(){
    let footer = document.querySelector('footer')
    let btn = document.createElement('button')
    btn.innerText = 'Torna indietro';
    footer.appendChild(btn)
    btn.addEventListener('click', ()=>{
        location.reload()
    })
}

input()

