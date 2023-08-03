const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('#sidebar');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active-sidebar');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active-sidebar');
});