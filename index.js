let box = document.querySelector('.box');
let lup = document.querySelector('.lup');
let img2 = document.querySelector('.img2');

box.addEventListener('mousemove', (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  img2.style.transform = `translate(-${x - 10}px, -${y - 10}px) scale(1.3)`;
})




