const cartPanel = document.getElementById("cart");
const openCartBtn = document.getElementById("cartTrigger");
const closeCartBtn = document.getElementById("btnClose");

openCartBtn.addEventListener('click', (e) => {
    cartPanel.classList.remove('hidden');
    // cartPanel.classList.add('translate-x-0');
});

closeCartBtn.addEventListener('click', () => {
    // cartPanel.classList.remove('translate-x-0');
    cartPanel.classList.add('hidden');
});

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuContent = mobileMenu.querySelector('.menu-content');
const menuClose = document.getElementById('menuClose');
let menuOpen = false;

function openMenu() {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        menuContent.classList.remove('opacity-0', 'scale-90');
        menuContent.classList.add('opacity-100', 'scale-100');
    }, 50);
    animateBurger(true);
    menuOpen = true;
}

function closeMenu() {
    menuContent.classList.remove('opacity-100', 'scale-100');
    menuContent.classList.add('opacity-0', 'scale-90');
    setTimeout(() => {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    }, 200);
    animateBurger(false);
    menuOpen = false;
}

function animateBurger(open) {
    const lines = burgerBtn.querySelectorAll('span');
    if (open) {
        lines[0].classList.add('rotate-45', 'translate-y-2');
        lines[1].classList.add('opacity-0');
        lines[2].classList.add('-rotate-45', '-translate-y-2');
    } else {
        lines.forEach(line => line.classList.remove('rotate-45', '-rotate-45', 'translate-y-2', '-translate-y-2', 'opacity-0'));
    }
}

burgerBtn.addEventListener('click', () => {
    if (menuOpen) closeMenu();
    else openMenu();
});

menuClose.addEventListener('click', closeMenu);

// Optional: close menu if backdrop is clicked
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
});