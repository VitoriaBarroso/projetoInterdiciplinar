

const slider = document.querySelectorAll('.slider');
const btnPrev =document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

 let currenSlide=0;

function hideAllSlider() {
    slider.forEach(item => item.classList.remove('on')); 
       
    };
function showSlider() {
    slider[currenSlide].classList.add('on');
}

function nextSlider(){
    hideAllSlider()
     if(currenSlide===slider.length -1){
        currenSlide=0;
     }else{
        currenSlide++
     }
     showSlider();
}

function prevSlider(){
    hideAllSlider()
    if(currenSlide===0){
        currenSlide= slider.length-1;
    }else{
        currenSlide--;
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider); 
btnPrev.addEventListener('click', prevSlider); 



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const navbar = document.querySelector('.navbar');

  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
