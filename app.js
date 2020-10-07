// slider part
const tl = gsap.timeline({defaults : {ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('.intro', {opacity: 1, zIndex: 1}, {opacity: 0, zIndex:-1, duration: 0.1});
tl.fromTo('.text', {opacity: 1, zIndex: 1}, {opacity: 0, zIndex:-1, duration: 0.1});
tl.fromTo('.slider', {opacity: 1, zIndex: 1}, {opacity: 0, zIndex:-1, duration: 0.1});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");



// Project part
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('#project-cards img');
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        //change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./img/Full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});


// ToTop button
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});