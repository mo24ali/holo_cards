/**
 * 
 * here is the logic the cards are getted from the deck and only five cards that are showed by hand 
 */



function drawCard() {
    try {

        generateMyHandCards();
    } catch (e) {
        alert("not drawn")
    }

}
//drag and drop logic to be implemented

const myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");

function generateMyHandCards() {
    try {
        const myHandCards = [];
        const deckSize = myDecks.length;
        if (deckSize === 0) {
            console.warn("Your deck is empty!");
            myHand.innerHTML = `<p class="text-gray-400 italic">No cards in your deck.</p>`;
            return;
        }
        let cardNums = Math.min(5, deckSize);
        while (cardNums > 0) {
            const randomIndex = Math.floor(Math.random() * deckSize);
            const selectedCard = myDecks[randomIndex];
            myHandCards.push(selectedCard);
            cardNums--;
        }
        myHand.innerHTML = myHandCards.map(card => `
                    <div class="my_card bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg
                                text-center hover:scale-105 transition" draggable="true">
                        <img src="${card.img_url}" 
                            class="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700">
                        <h3 class="text-white text-lg font-semibold mb-1">${card.name}</h3>
                        <p class="text-blue-300 text-sm mb-1">HP: ${card.hp}</p>
                    </div>
        `).join("");
        console.log("Draw complete:", myHandCards);
    } catch (e) {
        console.error("Error generating hand:", e);
    }
}



document.addEventListener("DOMContentLoaded", generateMyHandCards);


