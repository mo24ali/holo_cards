let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
const favContainer = document.getElementById("favorite-div");

const generateFavoriteCard = (item) => {
    return `
        <div id="fav-card-id-${item.id}"
            class="relative flex flex-col rounded-xl border border-black/10 bg-black shadow-lg transition-all duration-300
                   hover:-translate-y-1 hover:shadow-2xl
                   dark:border-white/10 dark:bg-dark-slate">

            <div class="aspect-[3/4] w-full p-4">
                <div class="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
                    style="background-image: url('${item.img_url}');"></div>
            </div>

            <button id="btn-favorite-${item.id}"
                class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500/80 text-white backdrop-blur-sm transition-colors hover:bg-red-600"
                onclick="removeFromFavorite(${item.id})">
                <span class="material-symbols-outlined fill-icon text-lg">favorite</span>
            </button>

            <div class="flex flex-col gap-3 p-4 pt-0">
                <div class="flex items-start justify-between">
                    <h3 class="text-lg font-bold text-black dark:text-white">${item.name}</h3>
                    <div class="flex items-center gap-1">
                        <span class="text-sm font-semibold text-red-500">HP</span>
                        <span class="text-lg font-bold text-black dark:text-white">${item.hp}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold text-primary">$${item.price.toFixed(2)}</p>
                    <button onclick="addToCart(${item.id})"
                        class="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white bg-[#4780db] hover:bg-[#4285F4]/90 transition">
                        <span class="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div> 
    `;
};

console.log(favorite);

function updateFavoriteDisplay() {
    if (favContainer) {
        favContainer.innerHTML = favorite.map(generateFavoriteCard).join('');
    }
    const favCounter = document.getElementById("favCounter"); 
    if (favCounter) {
        favCounter.textContent = favorite.length;
    }

    const favCountText = document.querySelector('p.text-sm.text-black\\/60');
    if (favCountText) {
        favCountText.textContent = `${favorite.length} favorited cards`;
    }
}

function removeFromFavorite(itemId) {
    favorite = favorite.filter(favItem => favItem.id !== itemId);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    updateFavoriteDisplay();
    console.log(`Removed item ${itemId} from favorites`);
}



document.addEventListener("DOMContentLoaded", updateFavoriteDisplay);