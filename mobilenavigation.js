/* These are function of openMenu, closeMenu and Main Menu*/
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

/*This is the hamburger button when pressed for activating and deactivating. */
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

/*These function are the activation and deactivation. */
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}