/*creates a let variable for the slide function */
let slideIndex = 1;
showSlides(slideIndex);

/*functions to activate the slide function */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
/*Function to activate the next child and to hide the previous child */
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide-container");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}