
let myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");
const arena = document.getElementsByClassName("my_section");
const opponnent = document.getElementsByClassName("opp_section");
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
    // const randomIndex = myHandCards.length -1 ; 
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
        el.addEventListener("dragover", e => e.preventDefault());

        el.addEventListener("drop", e => {
            e.preventDefault();
            if (!selectedCard) return;

            if (el.children.length > 0) {
                alert("3amra!");
                return;
            }

            el.appendChild(selectedCard);

            const droppedCardId = selectedCard.id.replace("card-", "");

            myHandCards = myHandCards.filter(card => card.id != droppedCardId);
            localStorage.setItem("myHandCards", JSON.stringify(myHandCards));

            chooseMode(droppedCardId);
            let randomIndex = Math.floor(Math.random() * 5);
            setTimeout(opponentResponse(randomIndex), 2000);
            selectedCard = null;
        });
    }

}

document.addEventListener("DOMContentLoaded", generateMyHandCards);

function chooseMode(cardId) {
    const popup = document.getElementById("popup");

    popup.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        <h2 class="font-semibold text-lg mb-4">Choose your action</h2>
        <div class="flex justify-center gap-4 mb-4">
          <button id="attackBtn" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Attack
          </button>
          <button id="defenseBtn" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Defense
          </button>
        </div>
        <button id="closePopup" class="text-gray-500 hover:text-gray-700 text-sm">Cancel</button>
      </div>
    </div>
  `;

    // Add event listeners
    document.getElementById("attackBtn").addEventListener("click", () => attack(cardId));
    document.getElementById("defenseBtn").addEventListener("click", () => defense(cardId));
    document.getElementById("closePopup").addEventListener("click", () => popup.innerHTML = "");
}



function attack(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    card.classList.remove("ring-4", "ring-blue-500", "opacity-80", "transition", "duration-300");
    card.classList.add("ring-4", "ring-red-500", "scale-105", "transition", "duration-300");
    document.getElementById("popup").innerHTML = "";
    
    
}

function defense(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    card.classList.remove("ring-4", "ring-red-500", "scale-105", "transition", "duration-300");
    card.classList.add("ring-4", "ring-blue-500", "opacity-80", "transition", "duration-300");
    document.getElementById("popup").innerHTML = "";
}


let opponentCards = [
    {
        id: 1,
        img_url: "assets/charizard_cards/charizard_v.png",
        name: "Charizard Inferno V",
        hp: 220,
        price: 420.75,
        rarity: "Ultra Rare",
        quantity: 0,
     
    }
    ,
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
    }
]


function opponentResponse(index){
    let choosen = opponentCards[index];
   opponnent[index].innerHTML =  `
                                                    <div id="card-${choosen.id}" draggable="true" 
                                                        class="my_card bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg
                                                                text-center hover:scale-105 transition">
                                                        <img src="${choosen.img_url}" class="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700" draggable="false">
                                                        <h3 class="text-white text-lg font-semibold mb-1">${choosen.name}</h3>
                                                        <p class="text-blue-300 text-sm mb-1">HP: ${choosen.hp}</p>
                                                    </div>
                                                `
    }
        



