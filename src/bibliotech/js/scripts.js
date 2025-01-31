let isMenuOpen = false;
const menu = document.querySelector("idmenu");
const header = document.querySelector("#header");
const main = document.querySelector("#main");

const iconMenu = document.querySelector("#icon-menu");
const iconClose = document.querySelector("#icon-close");

const menuItems = document.querySelectorAll(".menu-item");

function openMenu() {
        const size = "250px";
    menu.computedStyleMap.width = size;
    header.style.marginLeft = size;
    main.style.marginLeft = size;
    iconMenu.style.display = "none";
    iconClose.style.display = "block";
}

function closeMenu() {
    const size = "60px";
    menu.style.width = "size";
    header.style.marginLeft = "size";
    main.style.marginLeft = "size";
    iconMenu.style.display = "block";
    iconClose.style.display = "none";
}

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    menuItems.forEach((item) => {
        const description = item.querySelector("span");
        description.style.display = isMenuOpen ? "block" : "none";
    })

    if(isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
        closeSubmenus();
    }
}

function toggleSubmenu(submenuId) {
    const submenu = document.querySelector(submenuId);

    submenu.style.display = submenu.style.display == "block" ? "none" : "block";
}

function closeSubmenus() {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
        submenu.style.display = "none";
    });
}

const authors = [];