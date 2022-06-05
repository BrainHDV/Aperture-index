(function(){
    let menuBurger = document.querySelector('.menu__burger');
    let nav = document.querySelector('.nav');
    let bodyScroll = document.querySelector('body');

    menuBurger.addEventListener('click', () => {
        menuBurger.classList.toggle('active');
        nav.classList.toggle('active');
        bodyScroll.classList.toggle('active');
    })
})();


new WOW().init();