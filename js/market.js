let market = document.getElementById("market");
let content = [
    {
        id: 1,
        img_url: "../assets/charizard_cards/charizard_v.png",
        name: "Charizard Inferno V",
        hp: 220,
        price: 420.75,
    },
    {
        id: 2,
        img_url: "../assets/charizard_cards/charizard_v1.png",
        name: "Charizard Blaze EX",
        hp: 210,
        price: 389.99,
    },
    {
        id: 3,
        img_url: "../assets/charizard_cards/charizard_v2.png",
        name: "Charizard Ember Basic",
        hp: 180,
        price: 259.50,
    },
    {
        id: 4,
        img_url: "../assets/charizard_cards/mega_charizard.png",
        name: "Mega Charizard GX",
        hp: 300,
        price: 499.00,
    },
    {
        id: 5,
        img_url: "../assets/charizard_cards/charizard_v.png",
        name: "Charizard Crimson V",
        hp: 230,
        price: 410.25,
    },
    {
        id: 6,
        img_url: "../assets/charizard_cards/charizard_v1.png",
        name: "Charizard Solar EX",
        hp: 215,
        price: 365.40,
    },
    {
        id: 7,
        img_url: "../assets/charizard_cards/charizard_v2.png",
        name: "Charizard Classic",
        hp: 190,
        price: 275.80,
    },
    {
        id: 8,
        img_url: "../assets/charizard_cards/mega_charizard.png",
        name: "Charizard Ultra GX",
        hp: 320,
        price: 525.00,
    },

]


let generateMarket = () => {
    return (market.innerHTML = content.map((x) => {
        return `
                        <div id="card-id-${x.id}" class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
                <div class="aspect-[3/4] w-full p-4">
                    <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
                        style="background-image: url('${x.img_url}');"></div>
                </div>
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
                        <button onclick="addToTheCart(${x.id})" class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-color bg-[#4780db] hover:bg-[#4285F4]/90" onclick="addToCart()">
                            <span class="material-symbols-outlined">add_shopping_cart</span>
                        </button>
                    </div>
                </div>
            </div>
            `
            ;
    }).join("") //join() function used to 
    )
}

generateMarket();



// let cart = document.getElementById("cart");
// console.log(cart);

// let addFunction = (id) => {
//     let selectedId = id;
//     let search = cart.firs
// }

const list = document.getElementById("cart-items");
function addToTheCart(idCard) {

    let li = document.createElement("li");

   for(let i = 0 ; i < content.length ; i++){
    if(content[i].id == idCard ){
        alert("exist");
        li.innerHTML = `
        <div id="card-id-${content[i].id}" class="flex items-center gap-3 p-2 border border-black/10 rounded-lg bg-white shadow-sm dark:border-white/10 dark:bg-dark-slate">
            <!-- Image -->
            <div class="w-16 h-20 flex-shrink-0 rounded-lg bg-cover bg-center"
                style="background-image: url('${content[i].img_url}');">
            </div>
            <!-- Info -->
            <div class="flex-1 flex flex-col justify-between h-full">
                <div class="flex justify-between items-start">
                    <h3 class="text-sm font-semibold text-black  truncate">${content[i].name}</h3>
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-medium text-red-500">HP</span>
                        <span class="text-sm font-bold text-black ">${content[i].hp}</span>
                    </div>
                </div>

                <div class="flex justify-between items-center mt-1">
                    <p class="text-sm font-bold text-primary">$${content[i].price}</p>
                    <button onclick="addToTheCart(card)" 
                        class="flex h-7 w-7 items-center justify-center rounded-full bg-[#b72626] text-white text-sm hover:bg-[#b96923]/90 transition">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </div>
            </div>
        </div>

    `;
    }
   }
    
    list.appendChild(li);
}


let btnCheckout = document.getElementById("btnCheckout");
let withdrawl = document.getElementById("btnWithdraw");
btnCheckout.addEventListener('click', () => {
    list.innerHTML = "";
    //add the cards to my deck section
})

withdrawl.addEventListener('click', () => {
    list.innerHTML = "";
    alert("you withdrawl your shoppings");
})
