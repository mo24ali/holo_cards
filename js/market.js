let market = document.getElementById("market");
let content = [
  {
    id: 1,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Inferno V",
    hp: 220,
    price: 420.75,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 2,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Blaze EX",
    hp: 210,
    price: 389.99,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 3,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Ember Basic",
    hp: 180,
    price: 259.5,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 4,
    img_url: "assets/charizard_cards/Legendary_black.png",
    name: "Mega Charizard GX",
    hp: 1200,
    price: 499.0,
    rarity: "Legendary",
    quantity: 0,
  },
  {
    id: 5,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Crimson V",
    hp: 230,
    price: 410.25,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 6,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Solar EX",
    hp: 215,
    price: 365.4,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 7,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Classic",
    hp: 190,
    price: 275.8,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 8,
    img_url: "assets/charizard_cards/Legendary_pink.png",
    name: "Charizard Ultra GX",
    hp: 2400,
    price: 525.0,
    rarity: "Legendary",
    quantity: 0,
  },
  {
    id: 9,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Inferno V",
    hp: 220,
    price: 420.75,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 10,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Blaze EX",
    hp: 210,
    price: 389.99,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 11,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Ember Basic",
    hp: 180,
    price: 259.5,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 12,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Mega Charizard GX",
    hp: 300,
    price: 499.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 13,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Crimson V",
    hp: 230,
    price: 410.25,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 14,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Solar EX",
    hp: 215,
    price: 365.4,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 15,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Classic",
    hp: 190,
    price: 275.8,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 16,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Charizard Ultra GX",
    hp: 320,
    price: 525.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 17,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Inferno V",
    hp: 220,
    price: 420.75,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 18,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Blaze EX",
    hp: 210,
    price: 389.99,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 19,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Ember Basic",
    hp: 180,
    price: 259.5,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 20,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Mega Charizard GX",
    hp: 300,
    price: 499.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 21,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Crimson V",
    hp: 230,
    price: 410.25,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 22,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Solar EX",
    hp: 215,
    price: 365.4,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 23,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Classic",
    hp: 190,
    price: 275.8,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 24,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Charizard Ultra GX",
    hp: 320,
    price: 525.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 25,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Inferno V",
    hp: 220,
    price: 420.75,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 26,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Blaze EX",
    hp: 210,
    price: 389.99,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 27,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Ember Basic",
    hp: 180,
    price: 259.5,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 28,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Mega Charizard GX",
    hp: 300,
    price: 499.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 29,
    img_url: "assets/charizard_cards/charizard_v.png",
    name: "Charizard Crimson V",
    hp: 230,
    price: 410.25,
    rarity: "Rare",
    quantity: 0,
  },
  {
    id: 30,
    img_url: "assets/charizard_cards/charizard_v1.png",
    name: "Charizard Solar EX",
    hp: 215,
    price: 365.4,
    rarity: "Ultra Rare",
    quantity: 0,
  },
  {
    id: 31,
    img_url: "assets/charizard_cards/charizard_v2.png",
    name: "Charizard Classic",
    hp: 190,
    price: 275.8,
    rarity: "Common",
    quantity: 0,
  },
  {
    id: 32,
    img_url: "assets/charizard_cards/mega_charizard.png",
    name: "Charizard Ultra GX",
    hp: 320,
    price: 525.0,
    rarity: "Ultra Rare",
    quantity: 0,
  },
];

let generateMarket = () => {
    return (market.innerHTML = content.map((x) => {
        return `
                    <div id="card-id-${x.id}" class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300            hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
                       
                            <div class="aspect-[3/4] w-full p-4">
                                <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
                                    style="background-image: url('${x.img_url}');"></div>
                            </div>
                             <button id="btn-favorite-${x.id}"
                                class="absolute right-3 top-3  flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-500/80" onclick ="addToFavorite(${x.id})">
                                <span class="material-symbols-outlined fill-icon text-lg">favorite</span>
                            </button>
                            <div class="flex flex-col gap-3 p-4 pt-0">
                                <div class="flex items-start justify-between">
                                    <h3 class="text-lg font-bold text-black dark:text-white">${x.name}</h3>
                                    <div class="flex items-center gap-1">
                                        <span class="text-sm font-semibold text-red-500">HP</span>
                                        <span class="text-lg font-bold text-black dark:text-white">${x.hp}</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-2xl font-bold text-primary">$ ${x.price}</p>
                                    <button onclick="addToCart(${x.id})" class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-color bg-[#4780db] hover:bg-[#4285F4]/90">
                                        <span class="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
            `
            ;
    }).join("") 
    )
}

generateMarket();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const list = document.getElementById("cart-items");

function updateCartDisplay() {
    list.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
        <div id="card-id-${item.id}" class="flex items-center gap-3 p-2 border border-black/10 rounded-lg bg-white shadow-sm dark:border-white/10 dark:bg-dark-slate">
            <!-- Image -->
            <div class="w-16 h-20 flex-shrink-0 rounded-lg bg-cover bg-center"
                style="background-image: url('${item.img_url}');">
            </div>
            <!-- Info -->
            <div class="flex-1 flex flex-col justify-between h-full">
                <div class="flex justify-between items-start">
                    <h3 class="text-sm font-semibold text-black  truncate">${item.name}</h3>
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-medium text-red-500">HP</span>
                        <span class="text-sm font-bold text-black ">${item.hp}</span>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-1">
                    <p class="text-sm font-bold text-primary">QT: ${item.quantity}</p>

                    <p class="text-sm font-bold text-primary">$${item.price}</p>
                    <button onclick="removeFromCart(${item.id})" 
                        class="flex h-7 w-7 items-center justify-center rounded-full bg-[#b72626] text-white text-sm hover:bg-[#b96923]/90 transition">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </div>
            </div>
        </div>

    `;
        list.appendChild(li);
    });
    let cartCounter = document.getElementById("cartCounter");
    cartCounter.innerHTML = cart.length;
    console.log(cart.length);
    updateTotalPrice();
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);

let cartTotal = document.getElementById("cart-total");
let counterPrice = 0;
function parsePrice(price) {
    return typeof price === "string" ? parseFloat(price.replace("$", "")) : price;
}

function updateTotalPrice() {
    const total = cart.reduce((sum, x) => sum + parsePrice(x.price) * x.quantity, 0);
    const cartTotal = document.getElementById("cart-total"); 
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
}


function addToCart(itemId) {
    const item = content.find(item => item.id === itemId);
    if (!item) return console.error("Item not found:", itemId);

    increment(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    console.log(` Added ${item.name}`);
}

function removeFromCart(itemId) {
    const item = content.find(item => item.id === itemId);
    if (!item) return console.error("Item not found:", itemId);

    decrement(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    console.log(` Removed ${item.name}`);
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCartDisplay();
    console.log(" Cart cleared!");
}

function increment(item) {
    let search = cart.find(x => x.id === item.id);

    if (search) {
        search.quantity += 1;
        counterPrice += search.price;
        cartTotal.innerHTML = counterPrice; //still a problem with the incrementation of the total price 
        console.log(counterPrice)

    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartDisplay();

}

function decrement(item) {
    let search = cart.find(x => x.id === item.id);
    if (!search) return;

    if (search.quantity >= 1) {
        search.quantity -= 1;
        counterPrice -= search.price; //still a problem with the decrementation of the total price 
        cartTotal.innerHTML = counterPrice;
        console.log(counterPrice)
    } else {
        cart = cart.filter(x => x.id !== item.id);
    }
    updateCartDisplay();
}

//filtering by sorting

document.addEventListener('DOMContentLoaded', () => {
    let filterBy = document.getElementById("select");


    filterBy.addEventListener('change', (event) => {
        const selectedCatagory = event.target.value;

        if (selectedCatagory == 'byPrice') {
            content.sort(
                (a, b) => (a.price - b.price));
            console.log("Sorted content:", content);
            generateMarket();

        } else if (selectedCatagory == 'byPriceDescent') {
            content.sort(
                (a, b) => (b.price - a.price));
            console.log("Sorted content:", content);
            generateMarket();

        } else if (selectedCatagory == 'alphabetically') {
            content.sort(
                (a, b) => a.name.localeCompare(b.name));
            console.log("Sorted content:", content);
            generateMarket();

        }
    })
})

//adding to the favorite 
let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

function addToFavorite(itemId) {
    const item = content.find(item => item.id === itemId); 
    if (!item) return console.error("Item not found:", itemId);

    const isAlreadyFavorite = favorite.some(favItem => favItem.id === itemId);
    if (isAlreadyFavorite) {
        alert(`${item.name} is already in the favorites`);
          
     
        return;
    }

    favorite.push(item);
    alert(`${item.name} got added to the favorites`)
    localStorage.setItem("favorite", JSON.stringify(favorite));
    console.log(`Added ${item.name} to favorites`);
}
//clicking the checkout button to add the buyed cards to the mydaeck page

const btnCheckout = document.getElementById("btnCheckout");
const btnWithdraw = document.getElementById("btnWithdraw");

if (btnCheckout) {
    btnCheckout.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        let myDeck = JSON.parse(localStorage.getItem("myDeck")) || [];

        myDeck = [...myDeck, ...cart];

        localStorage.setItem("myDeck", JSON.stringify(myDeck));

        localStorage.removeItem("cart");
        updateCartDisplay();

        console.log(" Checkout complete. Cards added to MyDeck:", myDeck);

      
    });
}

if (btnWithdraw) {
    btnWithdraw.addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("Your cart is already empty!");
            return;
        }

        localStorage.removeItem("cart");
        updateCartDisplay();
        console.log("Cart withdrawn (cleared).");
    });
}
//rarity filtergs
const rarityCheckboxes = document.querySelectorAll('input[type="checkbox"]');
function applyRarityFilter() {
    const rarities = Array.from(rarityCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextElementSibling.textContent.trim()); 

    const filteredContent = content.filter(card => rarities.includes(card.rarity));

    market.innerHTML = filteredContent.map(x => {
        return `
        <div id="card-id-${x.id}" class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
            <div class="aspect-[3/4] w-full p-4">
                <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat" style="background-image: url('${x.img_url}');"></div>
            </div>
            <button id="btn-favorite-${x.id}" class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-500/80" onclick="addToFavorite(${x.id})">
                <span class="material-symbols-outlined fill-icon text-lg">favorite</span>
            </button>
            <div class="flex flex-col gap-3 p-4 pt-0">
                <div class="flex items-start justify-between">
                    <h3 class="text-lg font-bold text-black dark:text-white">${x.name}</h3>
                    <div class="flex items-center gap-1">
                        <span class="text-sm font-semibold text-red-500">HP</span>
                        <span class="text-lg font-bold text-black dark:text-white">${x.hp}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold text-primary">$ ${x.price}</p>
                    <button onclick="addToCart(${x.id})" class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-color bg-[#4780db] hover:bg-[#4285F4]/90">
                        <span class="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

rarityCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        applyRarityFilter();
    });
});




applyRarityFilter();
//pagination logic

let currentPage = 1;
const cardsPerPage = 6; 
let filteredContent = []; 



applyPagination();


rarityCheckboxes.forEach(cb => cb.addEventListener("change", applyPagination));

function applyPagination() {
    const rarities = Array.from(rarityCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextElementSibling.textContent.trim());

    filteredContent = content.filter(card => rarities.includes(card.rarity));

    currentPage = 1;
    renderMarketPaginated();
}

function renderMarketPaginated() {
    const totalCards = filteredContent.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const paginated = filteredContent.slice(startIndex, endIndex);

    market.innerHTML = paginated.map(x => `
        <div id="card-id-${x.id}" class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
            <div class="aspect-[3/4] w-full p-4">
                <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat" style="background-image: url('${x.img_url}');"></div>
            </div>
            <button id="btn-favorite-${x.id}" class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-red-500/80" onclick="addToFavorite(${x.id})">
                <span class="material-symbols-outlined fill-icon text-lg">favorite</span>
            </button>
            <div class="flex flex-col gap-3 p-4 pt-0">
                <div class="flex items-start justify-between">
                    <h3 class="text-lg font-bold text-black dark:text-white">${x.name}</h3>
                    <div class="flex items-center gap-1">
                        <span class="text-sm font-semibold text-red-500">HP</span>
                        <span class="text-lg font-bold text-black dark:text-white">${x.hp}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold text-primary">$ ${x.price}</p>
                    <button onclick="addToCart(${x.id})" class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-color bg-[#4780db] hover:bg-[#4285F4]/90">
                        <span class="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    `).join("");

   

    updatePaginationUI(totalPages);
}

function updatePaginationUI(totalPages) {
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;

    const pageButtons = document.querySelectorAll(".page-number");
    pageButtons.forEach(btn => {
        const page = parseInt(btn.dataset.page);
        if (page === currentPage) {
            btn.classList.add("bg-primary", "text-black");
            btn.classList.remove("bg-black/5", "text-black/80");
        } else {
            btn.classList.remove("bg-primary", "text-black");
            btn.classList.add("bg-black/5", "text-black/80");
        }
    });
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredContent.length / cardsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderMarketPaginated();
    }
}

document.getElementById("prevPage").addEventListener("click", () => goToPage(currentPage - 1));
document.getElementById("nextPage").addEventListener("click", () => goToPage(currentPage + 1));

document.querySelectorAll(".page-number").forEach(btn => {
    btn.addEventListener("click", () => {
        const page = parseInt(btn.dataset.page);
        goToPage(page);
    });
});
