
let myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");
const arena = document.getElementsByClassName("my_section");

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

        myHand.innerHTML = myHandCards.map(card => `
                                                    <div id="card-${card.id}" draggable="true" 
                                                        class="my_card bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg
                                                                text-center hover:scale-105 transition">
                                                        <img src="${card.img_url}" class="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700" draggable="false">
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

function setupDragAndDrop() {
    selectedCard = null;

    document.querySelectorAll(".my_card").forEach(card => {
        card.addEventListener("dragstart", e => {
            selectedCard = e.target;
            e.dataTransfer.effectAllowed = "move";
        });
    });

    for (let el of arena) {
        el.addEventListener("dragover", e => {
            e.preventDefault();
        });

        el.addEventListener("drop", e => {
            e.preventDefault();
            if (selectedCard) {
                if(!(el.children.length > 0)){
                    el.appendChild(selectedCard);
                selectedCard = null;
                myHandCards = myHandCards.filter(card => card.id !== selectedCard.id);
                localStorage.setItem("myHandCards", JSON.stringify(myHandCards));
                chooseMode(selectedCard.id);
                }else{
                    alert("3amra")
                }
            }
           
        });
    }
}

// === Initialize when page loads ===
document.addEventListener("DOMContentLoaded", generateMyHandCards);

function chooseMode(cardId) {
    let target = document.getElementById("popup");
    target.innerHTML = `
        <div class="container border bg-white z-10 p-6 rounded-xl shadow-lg text-center">
            <h2 class="font-semibold text-lg mb-4">Choose your action</h2>
            <div class="btnChoices flex justify-center gap-4">
                <button id="attackBtn" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    Attack
                </button>
                <button id="defenseBtn" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Defense
                </button>
            </div>
        </div>
    `;
    target.classList.remove("hidden");

    document.getElementById("attackBtn").addEventListener("click", () => attack(cardId));
    document.getElementById("defenseBtn").addEventListener("click", () => defense(cardId));
}

function attack(cardId) {
    const target = document.getElementById(cardId);
    if (!target) return;
    target.classList.add("opacity-50", "scale-90", "transition", "duration-300");
    alert("Attack mode activated!");
}

function defense(cardItem) {
    let target = myHandCards.find((item) => item.id === cardItem);
    alert("defenseMode");
    target.classList.add("hidden");
}