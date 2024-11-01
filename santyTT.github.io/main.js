const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

$(function() {
    var btn_movil = $(‘#nav-mobile’),
    menu = $(‘#menu’).find(‘ul’);


    btn_movil.on(‘click, function (e) {
        e.preventDefault();
        var el = $(this);
        el.toggleClass(nav-active);
        menu.toggleClass(open-menu);
    });
});