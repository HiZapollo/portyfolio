let menu = document.querySelector('.hamburger');
let sideMenu = document.querySelector('.side-menu');

function openSideMenu() {
    // document.getElementById("sideMenu").style.width = "250px";
    menu.classList.toggle('change');
    sideMenu.classList.toggle('open');
}

function closeSideMenu() {
    // document.getElementById("sideMenu").style.width = "0";
    menu.classList.toggle('change');
    sideMenu.classList.toggle('open');
}