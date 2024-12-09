let nav = document.querySelector('nav')
let btn = document.querySelector('nav ul li:last-child')

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < 300) {
      nav.style.backgroundColor = '#ffc017';
      btn.style.backgroundColor = 'black';
    } else if (verticalScrollPx > 200) {
      nav.style.backgroundColor = 'white';
      btn.style.backgroundColor = '#1a8917';
    }
  });

  setInterval(()=>{
    let m = document.querySelectorAll("g");
    let random = Math.round(Math.random() * m.length);
    let array =[]
    if(!array.includes(random)){
        array.push(random)
        let mNascosta = m[random];
        mNascosta.classList.add('random');
        setTimeout(() => {
            mNascosta.classList.remove('random');
        }, 1000); 
    }
  }, 100);