'use strict';

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slidesSet");
    const dots = document.getElementsByClassName("slider-control__radio");
    const navItems = document.getElementsByClassName("nav-slider-item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (const slide of slides) {
        slide.style.display = "none";
    }

    /* reset checked dot */
    for(const dot of dots) {
      dot.checked = false;
    }

    for(const navItem of navItems) {
      if (navItem.classList.contains("active")) {
        navItem.classList.remove("active");
        break;
      }
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].checked = true;
    navItems[slideIndex - 1].classList.add("active");
}