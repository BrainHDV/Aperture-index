(function(){
    let menuBurger = document.querySelector('.menu__burger');
    let nav = document.querySelector('.nav');

    menuBurger.addEventListener('click', () => {
        menuBurger.classList.toggle('active');
        nav.classList.toggle('active');
    })
})();


new WOW().init();