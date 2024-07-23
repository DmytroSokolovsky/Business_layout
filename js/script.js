//Устновка изображения фоном
function ibg(){
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
} 

ibg();

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.menu-header');
if(iconMenu) {
    iconMenu.addEventListener("click", function(event) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
}