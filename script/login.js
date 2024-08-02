const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');

//index.html
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*
  Quando tiver mobile ou responsivo vai incluir o mobile-menu 
  e vai abrir um opção a baixo com opções do menu

  index.html
*/
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});