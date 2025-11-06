document.addEventListener("DOMContentLoaded", () => {
    const myDeckContainer = document.getElementById("myDeckContainer");
    const myDeck = JSON.parse(localStorage.getItem("myDeck")) || [];

    if (myDeck.length === 0) {
        myDeckContainer.innerHTML = "<p class='text-gray-500'>No cards in your deck yet.</p>";
        return;
    }

    myDeckContainer.innerHTML = myDeck.map(card => `
        <div class="p-4 border rounded-lg bg-white shadow-md dark:bg-dark-slate">
            <div class="w-full aspect-[3/4] bg-cover bg-center rounded-md" style="background-image: url('${card.img_url}');"></div>
            <h3 class="mt-2 text-lg font-bold">${card.name}</h3>
            <p class="text-sm text-gray-600">HP: ${card.hp}</p>
            <p class="text-sm font-semibold text-blue-600">$${card.price}</p>
        </div>
    `).join("")

})
