let btn = document.querySelector('.menu-icn')
btn.addEventListener('click' , ()=>{
  document.querySelector('#sidebr').style.display = "flex"
})

let btn2 = document.querySelector('.cross-icn')
btn2.addEventListener('click' , ()=>{
  document.querySelector('#sidebr').style.display = "none"
})
