var sliderIleri = document.getElementById("slider-ileri");
var sliderGeri = document.getElementById("slider-geri");
var sliderInner = document.getElementById("slider-inner");
var slider = document.getElementById("slider-inner");

const images = document.getElementsByClassName("slider-img");

let index = 0;
let leng = images.length;
let step = 100 / leng;

let autoplayInterval;

sliderInner.style.transform = 'translate(0,0)';
sliderInner.style.width = leng * 100 + '%';

Array.from(images).forEach(element => {
    element.style.width = 100 / leng + '%';
});

function slideUpdate(){
    sliderInner.style.transform = `translate(-${index * step}%,0)`;
}

function nextSlide(){
    index++;
    if(index >= leng){
        index = 0;
    }
    slideUpdate();
}

function prevSlide(){
    index--;
    if(index < 0){
        index = leng - 1;
    }
    slideUpdate();
}

sliderIleri.addEventListener("click", nextSlide);
sliderGeri.addEventListener("click", prevSlide);


// AUTOPLAY
function startAutoplay(){
    autoplayInterval = setInterval(nextSlide, 4000);
}

function stopAutoplay(){
    clearInterval(autoplayInterval);
}

startAutoplay();

slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);


// SWIPE (Mobil)

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e)=>{
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e)=>{
    endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", ()=>{

    let diff = startX - endX;

    if(Math.abs(diff) > 50){

        if(diff > 0){
            nextSlide();
        }else{
            prevSlide();
        }

    }

});









