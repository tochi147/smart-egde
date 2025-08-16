const menuicon = document.getElementById('menu-icon');
const navbars = document.getElementById('nav-bar');
menuicon.addEventListener('click', () => { console.log('menu icon clicked!');  navbars.classList.toggle('sidebar');
if (navbars.classList.contains('sidebar')){
    menuicon.innerHTML = '&times;';
    document.body.classList.add('no-scroll');
document.documentElement.classList.add('no-scroll');
} else {
    menuicon.innerHTML = '&#9776;';
document.body.classList.remove('no-scroll');
document.documentElement.classList.remove('no-scroll');
}
});