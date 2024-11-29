let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    const produkLists = document.querySelectorAll('.list-produk');
    produkLists.forEach((list, index) => {
        const offset = scrollPosition * 0.1;
        list.style.transform = `translateY(-${offset}px)`; 
    });
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex].style.display = "block";  
}

setInterval(() => {
    plusSlides(1);
}, 5000);

function opennewpage() {
    window.open("regist.html", "_blank");
}

function opennewpage1() {
    window.open("login.html", "_blank");
}

function opennewpage2() {
    window.open("promo.html", "_blank");
}

