const cartPanel = document.getElementById("cart");
const openCartBtn = document.getElementById("cartTrigger");
const closeCartBtn = document.getElementById("btnClose");

openCartBtn.addEventListener('click', (e) => {
    cartPanel.classList.remove('translate-x-full');
    cartPanel.classList.add('translate-x-0');
});

closeCartBtn.addEventListener('click', () => {
    cartPanel.classList.remove('translate-x-0');
    cartPanel.classList.add('translate-x-full');
});

let favorites = []
