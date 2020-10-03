const toggleButton = document.querySelector('#menu_toggle');

const mobileNav = document.querySelector('.mobile-nav');
const backToTop = document.querySelector('#back-to-top');
console.log(backToTop);
const productSubMenu = document.querySelector('.mobile-sub-menu');
const arrow = document.querySelector('.arrow');


toggleButton.addEventListener('click', function() {

    toggleButton.classList.toggle('active');
    mobileNav.classList.toggle('active');

})

// window.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

//         backToTop.style.display = 'block';
//     } else {
//         backToTop.style.display = 'none';
//     }
// });

// backToTop.addEventListener('click', function() {
//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'


//     })
// });

arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    productSubMenu.classList.toggle('active');


})