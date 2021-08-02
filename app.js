const menuSvg1 = document.querySelector('.menuSvg1');
const menuSvg2 = document.querySelector('.menuSvg2');
const menuSvg3 = document.querySelector('.menuSvg3');
const menuSvg4 = document.querySelector('.menuSvg4');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');

l1.addEventListener('mouseover', ()=>{
    menuSvg1.style.opacity = "0"
});
l1.addEventListener('mouseout', ()=>{
    menuSvg1.style.opacity = "1"
});


l2.addEventListener('mouseover', ()=>{
    menuSvg2.style.opacity = "0"
});
l2.addEventListener('mouseout', ()=>{
    menuSvg2.style.opacity = "1"
});


l3.addEventListener('mouseover', ()=>{
    menuSvg3.style.opacity = "0"
});
l3.addEventListener('mouseout', ()=>{
    menuSvg3.style.opacity = "1"
});


l4.addEventListener('mouseover', ()=>{
    menuSvg4.style.opacity = "0"
});
l4.addEventListener('mouseout', ()=>{
    menuSvg4.style.opacity = "1"
});
