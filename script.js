const menuButton = document.querySelector(".hamburgerNav");
const menu = document.querySelector(".navLinks");
menuButton.addEventListener("click", hamburgerMenu);
let isMenuOpen = false;

function hamburgerMenu() {
    isMenuOpen ? closeMenu() : openMenu();
};

function closeMenu() {
    menu.classList.remove("displayNav");
    isMenuOpen = false;
};

function openMenu() {
    menu.classList.add("displayNav");
    isMenuOpen = true;
};
