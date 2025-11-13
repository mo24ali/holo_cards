// import Toastify from 'toastify-js'
let myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");
const arena = document.getElementsByClassName("my_section");
const opponnent = document.getElementsByClassName("opp_section");
let myHandCards = JSON.parse(localStorage.getItem("myHandCards")) || [];
let oppCardIdHolder = null;
let myCardIdHolder = null; 
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
                                                        <h3 class="text-white text-lg font-semibold mb-1 md:break-all">${card.name}</h3>
                                                        <p class="text-blue-300 text-sm mb-1">HP: ${card.hp}</p>
                                                    </div>
                                                `).join("");


        setupDragAndDrop();
        console.log("Draw complete:", myHandCards);
    } catch (e) {
        console.error("Error generating hand:", e);
    }
}
function drawCard() {

    if (myDecks.length === 0) {
        Toastify({
            text: "wait for the opponent to play",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #ec8632ff, #96c93d)",
            },
        }).showToast();
        return;
    }
    if (myHandCards.length >= 5) {
        Toastify({
            text: "Your hand is full",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #ec8632ff, #96c93d)",
            },
        }).showToast();
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
            myCardIdHolder = Number(selectedCard.id.replace("card-",""));              // it takes the id card-4
                                                                                        //but after the .replace() and number now we can take the integer id
            
            console.log(myCardIdHolder);
            
            selectedCard = null;

        });
    }

}
document.addEventListener("DOMContentLoaded", generateMyHandCards);
function chooseMode(cardId) {
    const popup = document.getElementById("popup");
    let randomIndex = Math.floor(Math.random() * 5);

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
        
      </div>
    </div>
                        `;

    // Add event listeners
    document.getElementById("attackBtn").addEventListener("click", function () {
        Toastify({
            text: "wait for the opponent to play",
            duration: 3000,
            gravity: "top",
            position: "center",
        }).showToast();
        attack(cardId);
        setTimeout(() => opponentResponse(randomIndex), 2000);
    });
    document.getElementById("defenseBtn").addEventListener("click", function () {
        Toastify({
            text: "wait for the opponent to play",
            duration: 3000,
            gravity: "top",
            position: "center",
        }).showToast();
        defense(cardId);
        setTimeout(() => opponentResponse(randomIndex), 2000);
    });


    console.log("in choose mode function");



}
function attack(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    card.classList.add("ring-4", "ring-red-500", "scale-105", "transition", "duration-300");
    card.setAttribute("draggable", "false");
    document.getElementById("popup").innerHTML = "";
}
function defense(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    card.classList.add("ring-4", "ring-blue-500", "opacity-80", "transition", "duration-300", "rotate-90");
    card.setAttribute("draggable", "false");
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
    }
]
function opponentResponse(index) {
    // let index = Math.floor(Math.random() * 5);
    // indexes.push(index);
    if (opponnent[index].children.length > 0) {
        // alert("busted");
        let newIndex = Math.floor(Math.random() * opponnent.length);
        opponentResponse(newIndex);

    }
    let choosen = opponentCards[index];

    opponnent[index].innerHTML = `
                                    <div id="opp-card-${choosen.id}" class="my_card bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg
                                                text-center hover:scale-105 transition">
                                        <img src="${choosen.img_url}" class="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700" draggable="false">
                                        <h3 class="text-white text-lg font-semibold mb-1">${choosen.name}</h3>
                                        <p class="text-blue-300 text-sm mb-1">HP: ${choosen.hp}</p>
                                    </div>
                                `


    chooseModeOpp(choosen.id);
    oppCardIdHolder = choosen.id;                   //it returns integer to the id
    console.log("in the opponentResponse");
    
    console.log(oppCardIdHolder);
}
function chooseModeOpp(cardId) {

    let choice = Math.floor(Math.random() * 2);
    if (choice == 1) {
        attackOpp(cardId);
    } else {
        defenseOpp(cardId);
    }

}
function attackOpp(cardId) {
    const card = document.getElementById(`opp-card-${cardId}`);
    card.classList.add("ring-4", "ring-red-500", "scale-105", "transition", "duration-300");
    card.setAttribute("draggable", "false");
    document.getElementById("popup").innerHTML = "";
}
function defenseOpp(cardId) {
    const card = document.getElementById(`opp-card-${cardId}`);

    card.classList.add("ring-4", "ring-blue-500", "opacity-80", "transition", "duration-300", "rotate-90");
    card.setAttribute("draggable", "false");
    document.getElementById("popup").innerHTML = "";
}
let LF = 0;
let pt = document.getElementById("life-point");
pt.innerHTML = `${LF} LF`;

function calculateScore(myCardId, oppCardId) {
    // myHandCards = JSON.parse(localStorage.getItem("myHandCards"));

    // JSON.stringify(myHandCards);
    let oppCard = opponentCards.find((card) => card.id === oppCardId);
    let myCard = myDecks.find((card) => card.id === myCardId);
    if (!oppCard) {
        console.log("Opponent card not found!");
        return;
    }
    if (!myCard) {
        console.log(myHandCards); //test
        
        console.log("My card not found!");
        return;
    }

    if (myCard.hp > oppCard.hp) {
        LF += 10;
        pt.innerHTML = `${LF} LF`;
        Toastify({ text: "You won this round!", duration: 2000, position: "center"}).showToast();
    }else if(myCard.hp == oppCard.hp){
        LF += 0;
        pt.innerHTML = `${LF} LF`;
        Toastify({ text: "You got equal HP", duration: 2000 , position: "center" }).showToast();
    }else {
        LF -= 5;
        pt.innerHTML = `${LF} LF`;
        Toastify({ text: "You lost this round!", duration: 2000 , position: "center" }).showToast();
    }

    console.log("in calculate function");
}

const attackBtn = document.getElementById("attackBtnPt");

attackBtn.addEventListener('click', () => {
    if (!myCardIdHolder || !oppCardIdHolder) {
        console.log("You must select both cards before attacking!");
        Toastify({
            text: "Select both cards before attacking!",
            duration: 2000,
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }).showToast();
        return;
    }

    console.log("My Card:", myCardIdHolder);
    console.log("Opponent Card:", oppCardIdHolder);

    calculateScore(myCardIdHolder, oppCardIdHolder);
});

