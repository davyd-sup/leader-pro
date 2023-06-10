var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    freeMode: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        }
    }
});
const popup = document.querySelector('.popup-w');
const btnHeader = document.querySelector('.btn_header-w');
const btnHeader2 = document.querySelector('.header_call');
const cross = document.querySelector('.cross');

btnHeader.addEventListener('click', function() {
  popup.classList.add('popup-w-active');
});
btnHeader2.addEventListener('click', function() {
    popup.classList.add('popup-w-active');
  });

cross.addEventListener('click', function() {
  popup.classList.remove('popup-w-active');
});
const elImg = document.getElementById("img1")
const elP1 = document.getElementById("product-1")
const elP2 = document.getElementById("product-2")
const elP3 = document.getElementById("product-3")
const elP4 = document.getElementById("product-4")
const elP5 = document.getElementById("product-5")
const elP6 = document.getElementById("product-6")

elP1.addEventListener("mouseover", () => {
    elImg.src = "assets/img/financial-analysis.jpg" // ссылка на первую фото 
})
elP2.addEventListener("mouseover", () => {
    elImg.src = "assets/img/3block.png" // ссылка на 2 фото 
})
elP3.addEventListener("mouseover", () => {
    elImg.src = "assets/img/methodology-and-regulation.png" // ссылка на 3 фото 
})
elP4.addEventListener("mouseover", () => {
    elImg.src = "assets/img/tender_support.png" // ссылка на четвертую фото 
})
elP5.addEventListener("mouseover", () => {
    elImg.src = "assets/img/calendar-network-planning.jpg" // ссылка на пятую фото 
})
elP6.addEventListener("mouseover", () => {
    elImg.src = "assets/img/staff-training.jpg" // ссылка на пятую фото 
})