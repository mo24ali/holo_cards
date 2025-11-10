/**
 * Game logic: Draw 5 random cards from the deck and allow drag & drop into the arena.
 */

let myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");
const arena = document.getElementById("my_section");

let myHandCards = JSON.parse(localStorage.getItem("myHandCards")) || [];
let selectedCard = null;

function generateMyHandCards() {
    try {
        const deckSize = myDecks.length;

        if (deckSize === 0) {
            console.warn("Your deck is empty!");
            myHand.innerHTML = `<p class="text-gray-400 italic">No cards in your deck.</p>`;
            return;
        }

        let cardNums = Math.min(5, deckSize);
        myHandCards = [];

        const usedIndexes = new Set();
        while (cardNums > 0) {
            const randomIndex = Math.floor(Math.random() * deckSize);
            if (!usedIndexes.has(randomIndex)) {
                const selectedCard = myDecks[randomIndex];
                myHandCards.push(selectedCard);
                usedIndexes.add(randomIndex);
                cardNums--;
            }
        }

        localStorage.setItem("myHandCards", JSON.stringify(myHandCards));

        myHand.innerHTML = myHandCards.map((card, index) => `
            <div class="my_card bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg
                        text-center hover:scale-105 transition" draggable="true" data-index="${index}">
                <img src="${card.img_url}" 
                    class="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700" draggable="false">
                <h3 class="text-white text-lg font-semibold mb-1">${card.name}</h3>
                <p class="text-blue-300 text-sm mb-1">HP: ${card.hp}</p>
            </div>
        `).join("");

        setupDragAndDrop();
        console.log("Draw complete:", myHandCards);
    } catch (e) {
        console.error("Error generating hand:", e);
    }
}

// === Function to handle drag and drop ===
function setupDragAndDrop() {
    selectedCard = null;

    document.querySelectorAll(".my_card").forEach(card => {
        card.addEventListener("dragstart", e => {
            selectedCard = e.target;
            e.dataTransfer.effectAllowed = "move";
        });
    });

    arena.addEventListener("dragover", e => {
        e.preventDefault();
    });

    arena.addEventListener("drop", e => {
        e.preventDefault();
        if (selectedCard) {
            arena.appendChild(selectedCard);
            selectedCard = null;
            myHandCards.length --;
        }
    });
}

function drawCard() {
    if (myDecks.length === 0) {
        alert("No more cards in the deck!");
        return;
    }
    if (myHandCards.length >= 5) {
        alert("Your hand is full!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * myDecks.length);
    const drawnCard = myDecks.splice(randomIndex, 1)[0];
    myHandCards.push(drawnCard);

    localStorage.setItem("myDeck", JSON.stringify(myDecks));
    localStorage.setItem("myHandCards", JSON.stringify(myHandCards));

    generateMyHandCards();
}

// === Initialize when page loads ===
document.addEventListener("DOMContentLoaded", generateMyHandCards);
