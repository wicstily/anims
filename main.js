let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let hp = document.querySelector('.hidden')

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'black'
})

btn2.addEventListener('click', () => {
  hp.classList.add('show')
})