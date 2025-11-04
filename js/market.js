let market = document.getElementById("market");
let content = [
    {
        id: "1",
        img_url: "../assets/charizard_cards/charizard_v.png",
        name: "Charizard VMAX",
        hp: 200,
        price: "$350.50",

    }, {
        id: "2",
        img_url: "../assets/charizard_cards/charizard_v1.png",
        name: "Charizard Ex",
        hp: 200,
        price: "$350.50",
    }, {
        id: "3",
        img_url: "../assets/charizard_cards/charizard_v2.png",
        name: "Charizard Basic",
        hp: 200,
        price: "$350.50",
    }, {
        id: "4",
        img_url: '../assets/charizard_cards/mega_charizard.png',
        name: "Charizard GX",
        hp: 200,
        price: "$350.50",
    },{
        id: "1",
        img_url: "../assets/charizard_cards/charizard_v.png",
        name: "Charizard VMAX",
        hp: 200,
        price: "$350.50",

    }, {
        id: "2",
        img_url: "../assets/charizard_cards/charizard_v1.png",
        name: "Charizard Ex",
        hp: 200,
        price: "$350.50",
    }, {
        id: "3",
        img_url: "../assets/charizard_cards/charizard_v2.png",
        name: "Charizard Basic",
        hp: 200,
        price: "$350.50",
    }, {
        id: "4",
        img_url: '../assets/charizard_cards/mega_charizard.png',
        name: "Charizard GX",
        hp: 200,
        price: "$350.50",
    }]

//console.log(market);

// function generateMarket(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         market.innerHTML += `
//             <div class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
//                 <div class="aspect-[3/4] w-full p-4">
//                     <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
//                         style="background-image: url('${arr[i].img_url}');"></div>
//                 </div>
//                 <div class="flex flex-col gap-3 p-4 pt-0">
//                     <div class="flex items-start justify-between">
//                         <h3 class="text-lg font-bold text-black dark:text-white">${arr[i].name}</h3>
//                         <div class="flex items-center gap-1">
//                             <span class="text-sm font-semibold text-red-500">HP</span>
//                             <span class="text-lg font-bold text-black dark:text-white">${arr[i].hp}</span>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-between">
//                         <p class="text-2xl font-bold text-primary">${arr[i].price}</p>
//                         <button class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90">
//                             <span class="material-symbols-outlined">add_shopping_cart</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }

// generateMarket(content);



let generateMarket = () => {
    return(market.innerHTML= content.map((x)=>{
            return `
                        <div class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-dark-slate">
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
                        <p class="text-2xl font-bold text-primary">${x.price}</p>
                        <button class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90">
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

