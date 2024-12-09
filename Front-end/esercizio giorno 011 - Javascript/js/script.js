
let newTask = function(e) {
    let tasks = document.querySelector('#tasks');
    let inputSpace = document.querySelector('form input[type="text"]');
    let val = inputSpace.value;
    val.trim();
    if(val===''){
        alert('inserisci testo')
    }else{
        let div = document.createElement('div');
        let p = document.createElement('p');

        let button = document.createElement('button');
        button.className = 'delete';
        button.innerHTML = '<i class="far fa-trash-alt"></i>';
        button.addEventListener('click', function(){
            button.parentNode.remove()
        })

        p.innerText = val;
        div.appendChild(p);
        div.appendChild(button);
        tasks.appendChild(div);
        p.addEventListener('click', function(){
            if(p.style.textDecoration==='line-through'){
                p.style.textDecoration='none'
                p.style.color='white'
            }else{
                p.style.textDecoration='line-through'
                p.style.color='#34525E'
            }    
        })
        inputSpace.value='';
        e.preventDefault()
    }
}

let addButton = document.querySelector('#newTask form button');
addButton.addEventListener('click', newTask)
