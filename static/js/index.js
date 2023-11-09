TweenMax.from(".main-img", 1, {
    opacity: 0,
    y: 15,
    ease: Expo.easeOut,
    delay: 0.2
})

TweenMax.from(".main-detail", 1, {
    opacity: 0,
    y: 15,
    delay: 0.3,
    ease: Expo.easeOut,
})

TweenMax.from(".text", 1, {
    opacity: 0,
    y: 15,
    delay: 0.4,
    ease: Expo.easeOut,
})

TweenMax.from(".btn-wrapper", 1, {
    opacity: 0,
    y: 15,
    delay: 0.5,
    ease: Expo.easeOut,
})

const nav = document.querySelector('.nav');
const body = document.body;
const burgerMenu = document.querySelector('.burger-menu')
const links = document.querySelector('.links')
let progressBar = document.querySelector('.progress-bar .bar');

if (progressBar) {
    function scrollIndicator() {
        let pixelScrolled = window.scrollY;
        let viewportHeight = window.innerHeight;
        let totalHeightScrollable = body.scrollHeight;
        let pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;
        progressBar.style.width = pixelsToPercentage + '%';
    }
}
function headerInteraction() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        nav.classList.add('show-bg');
    } else {
        nav.classList.remove('show-bg');
    }
}

window.addEventListener('scroll', function() {
    headerInteraction();
    if (progressBar)
        scrollIndicator();
});

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      nav.classList.add("nav-active");
    } else {
      nav.classList.remove("nav-active");
    }
})

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    links.classList.toggle('show-link')
    nav.classList.toggle('nav-active')
})