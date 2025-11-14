// import Toastify from 'toastify-js'
let myDecks = JSON.parse(localStorage.getItem("myDeck")) || [];
const myHand = document.getElementById("my_hand");
const arena = document.getElementsByClassName("my_section");
const opponnent = document.getElementsByClassName("opp_section");
let myHandCards = JSON.parse(localStorage.getItem("myHandCards")) || [];
let audioStart = new Audio("../assets/videoplayback.m4a");
let oppCardIdHolder = null;
let myCardIdHolder = null;
let selectedCard = null;
let verifier = 1;
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
    class="my_card bg-gradient-to-br from-gray-800 to-gray-900 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl 
            text-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-grab active:cursor-grabbing
            border border-gray-600 hover:border-gray-500 min-w-[110px] xs:min-w-[120px] sm:min-w-[140px] md:min-w-[150px]
            flex-shrink-0 transform-gpu">
    <div class="relative mb-1 xs:mb-2 sm:mb-3">
        <img src="${card.img_url}" 
             class="w-full h-20 xs:h-24 sm:h-32 md:h-36 lg:h-40 xl:h-44 object-cover rounded-md sm:rounded-lg 
                    border border-gray-600 shadow-inner" 
             draggable="false"
             alt="${card.name}"
             loading="lazy">
        <div class="absolute top-1 right-1 xs:top-1.5 xs:right-1.5 bg-red-500 text-white text-[10px] xs:text-xs px-1 rounded">
            HP
        </div>
    </div>
    <h3 class="text-white text-xs xs:text-sm sm:text-base font-semibold mb-1 xs:mb-1.5 line-clamp-2 leading-tight px-1">
        ${card.name}
    </h3>
    <div class="flex items-center justify-between text-[10px] xs:text-xs sm:text-sm px-1 xs:px-2">
        <span class="text-blue-300 font-medium">${card.hp} HP</span>
        <span class="text-yellow-400 text-[8px] xs:text-[10px]">${card.rarity}</span>
    </div>
</div>
                                                `).join("");


         // Generate cards for mobile hand
        syncMobileHand();

        setupDragAndDrop();
        setupMobileHandInteractions();
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
    audioStart.muted = false;
    audioStart.play();
    generateMyHandCards();
    audioStart.play();
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
                alert("THis place is occupied");
                return;
            }
            el.appendChild(selectedCard);
            const droppedCardId = selectedCard.id.replace("card-", "");
            myHandCards = myHandCards.filter(card => card.id != droppedCardId);
            localStorage.setItem("myHandCards", JSON.stringify(myHandCards));
            chooseMode(droppedCardId);
            myCardIdHolder = Number(selectedCard.id.replace("card-", ""));              // it takes the id card-4
                                //but after the .replace() and number now we can take the integer id
            console.log(myCardIdHolder);

            selectedCard = null;
            let audioDrop = new Audio("../assets/cardDropSoundEffects.m4a");
            audioDrop.play();

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
    verifier = 1;
    document.getElementById("popup").innerHTML = "";

}
function defense(cardId) {
    const card = document.getElementById(`card-${cardId}`);
    card.classList.add("ring-4", "ring-blue-500", "opacity-80", "transition", "duration-300", "rotate-90");
    verifier = 0;
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
                                    <div id="opp-card-${choosen.id}" 
     class="my_card bg-gradient-to-br from-red-800/90 to-red-900/80 p-2 xs:p-3 sm:p-4 rounded-lg sm:rounded-xl 
            shadow-lg hover:shadow-xl text-center transition-all duration-300 cursor-default
            border-2 border-red-600/50 hover:border-red-500/70 min-w-[110px] xs:min-w-[120px] sm:min-w-[140px] md:min-w-[150px]
            flex-shrink-0 transform-gpu group opacity-90 hover:opacity-100">
    
    <!-- Image Container -->
    <div class="relative mb-1 xs:mb-2 sm:mb-3 overflow-hidden rounded-md sm:rounded-lg">
        <img src="${choosen.img_url}" 
             class="w-full h-20 xs:h-24 sm:h-32 md:h-36 lg:h-40 xl:h-44 object-cover rounded-md sm:rounded-lg 
                    border-2 border-red-600/60 shadow-inner" 
             draggable="false"
             alt="${choosen.name}"
             loading="lazy">
        
        <!-- Enemy HP Badge -->
        <div class="absolute top-1 left-1 bg-gradient-to-r from-red-600 to-red-700 text-white 
                   text-[9px] xs:text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-red-400">
            💀 ${choosen.hp}
        </div>
        
        <!-- Enemy Rarity Badge -->
        <div class="absolute top-1 right-1 bg-black/80 text-red-300 
                   text-[8px] xs:text-[9px] font-medium px-1.5 py-0.5 rounded-full border border-red-500/50">
            ${choosen.rarity.split(' ')[0]}
        </div>
    </div>

    <!-- Card Name -->
    <h3 class="text-white text-xs xs:text-sm font-bold mb-1 xs:mb-1.5 line-clamp-2 leading-tight 
               px-1 group-hover:text-red-200 transition-colors">
        ${choosen.name}
    </h3>

    <!-- Stats Bar -->
    <div class="flex items-center justify-between bg-red-900/40 rounded-full px-2 xs:px-3 py-1 xs:py-1.5 
                border border-red-600/30 backdrop-blur-sm">
        <div class="flex items-center gap-1">
            <span class="text-red-300 text-[10px] xs:text-xs font-semibold">${choosen.hp}</span>
            <span class="text-red-400 text-[8px] xs:text-[10px]">HP</span>
        </div>
        
        <!-- Enemy Type Indicator -->
        <div class="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-red-400 shadow-sm animate-pulse"></div>
    </div>
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
let ptMob = document.getElementById("life-point-mobile");
pt.innerHTML = `${LF} LF`;
ptMob.innerHTML = `${LF} LF`;
let myHp = 0;
let oppHp = 0;
let myHpSpan = document.getElementById("my-hp");
let oppHpSpan = document.getElementById("opp-hp");
let popupVictory = document.getElementById("popup-victory");
function calculateScore(myCardId, oppCardId) {
    let oppCard = opponentCards.find((card) => card.id === oppCardId);
    let myCard = myDecks.find((card) => card.id === myCardId);

    if (!oppCard || !myCard) {
        console.log("Card not found!");
        return;
    }

    let roundWinner = null;

    if (myCard.hp > oppCard.hp) {
        roundWinner = 'player';
        LF += 10;
        oppHp -= 50;
        Toastify({ text: "You won this round!", duration: 2000, position: "center" }).showToast();
    } else if (myCard.hp < oppCard.hp) {
        roundWinner = 'opponent';
        LF -= 5;
        myHp -= 50;
        Toastify({ text: "You lost this round!", duration: 2000, position: "center" }).showToast();
    } else {
        roundWinner = 'draw';
        Toastify({ text: "You got equal HP", duration: 2000, position: "center" }).showToast();
    }

    pt.innerHTML = `${LF} LF`;
    ptMob.innerHTML = `${LF} LF`;
    myHpSpan.innerHTML = `${myHp}`;
    oppHpSpan.innerHTML = `${oppHp}`;

    let gameWinner = null;

    if (myHp <= 0 && oppHp <= 0) {
        gameWinner = 'draw';
    } else if (myHp <= 0) {
        gameWinner = 'opponent';
    } else if (oppHp <= 0) {
        gameWinner = 'player';
    }

    if (gameWinner) {
        let message = "";
        if (gameWinner === 'draw') {
            message = "Game Over! It's a draw!";
        } else if (gameWinner === 'player') {
            message = "Congratulations! You won the game!";
        } else {
            message = "Game Over! You lost the game!";
        }

        Toastify({
            text: message,
            duration: 4000,
            position: "center",
            backgroundColor: gameWinner === 'player' ? "#4CAF50" : gameWinner === 'opponent' ? "#f44336" : "#FF9800"
        }).showToast();

        disableGameplay();

        console.log(`Game Over! Winner: ${gameWinner}`);
        console.log(`Final Score - Player HP: ${myHp}, Opponent HP: ${oppHp}, LF: ${LF}`);
    } else {
        console.log(`Round Result: ${roundWinner} | Player HP: ${myHp}, Opponent HP: ${oppHp}`);
    }
    if (arena.length == 5) {
        console.log("game over");
    }
}



// function victory(myHp, oppHp) {
//     if (myHp > oppHp) {
//         popupVictory.innerHTML = `
//             <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div class="bg-white p-6 rounded-xl shadow-lg text-center w-80">
//                     <h2 class="font-semibold text-lg mb-4">Choose your action</h2>
//                     <div class="flex justify-center gap-4 mb-4">
//                     <button id="attackBtn" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
//                         Attack
//                     </button>
//                     <button id="defenseBtn" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//                         Defense
//                     </button>
//                 </div>
                
//             </div>
//             </div>
        

//         `
//     }
// }
//added some animation to the arena

function disableGameplay() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.pointerEvents = 'none';
        card.style.opacity = '0.6';
    });

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.style.display = 'block';
}

const attackBtn = document.getElementById("attackBtnPt");

attackBtn.addEventListener('click', () => {

    // console.log(verifier.dataset.id);
    if (!myCardIdHolder || !oppCardIdHolder) {
        console.log("You must select both cards before attacking!");
        Toastify({
            text: "Select both cards before attacking!",
            duration: 2000,
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }).showToast();

        return;
    }
    if (verifier === 0) {
        console.log("defender");

        Toastify({
            text: "this is on defense",
            duration: 2000,
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }).showToast();
    }
    else if (verifier === 1) {
        console.log("My Card:", myCardIdHolder);
        console.log("Opponent Card:", oppCardIdHolder);

        calculateScore(myCardIdHolder, oppCardIdHolder);
        let audioAttack = new Audio("../assets/AttackSoundEffects.m4a");
        audioAttack.play();
    }
});

let attackBtnMob = document.getElementById("attackBtnPtMobile");

attackBtnMob.addEventListener('click', () => {

    // console.log(verifier.dataset.id);
    if (!myCardIdHolder || !oppCardIdHolder) {
        console.log("You must select both cards before attacking!");
        Toastify({
            text: "Select both cards before attacking!",
            duration: 2000,
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }).showToast();

        return;
    }
    if (verifier === 0) {
        console.log("defender");

        Toastify({
            text: "this is on defense",
            duration: 2000,
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
        }).showToast();
    }
    else if (verifier === 1) {
        console.log("My Card:", myCardIdHolder);
        console.log("Opponent Card:", oppCardIdHolder);

        calculateScore(myCardIdHolder, oppCardIdHolder);
        let audioAttack = new Audio("../assets/AttackSoundEffects.m4a");
        audioAttack.play();
    }
});


window.addEventListener('reload', audioStart.play());
window.addEventListener('load', audioStart.play());
window.addEventListener('click', audioStart.play());


////////////////////////////////////////////////////////////mobile section /////////////////////////////////////////////////////////////////////////////////////////////
// Mobile hand containers
const mobileHand = document.getElementById('mobile_hand');


function syncMobileHand() {
    mobileHand.innerHTML = myHandCards.map(card => `
        <div id="mobile-card-${card.id}" 
            class="mobile_card bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl shadow-md hover:shadow-xl 
                    text-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer
                    border border-gray-600 hover:border-gray-500 min-w-[100px] flex-shrink-0 transform-gpu">
            <div class="relative mb-2">
                <img src="${card.img_url}" 
                     class="w-full h-16 object-cover rounded-lg border border-gray-600 shadow-inner" 
                     draggable="false"
                     alt="${card.name}"
                     loading="lazy">
                <div class="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1 rounded">
                    HP
                </div>
            </div>
            <h3 class="text-white text-xs font-semibold mb-1 line-clamp-2 leading-tight px-1">
                ${card.name}
            </h3>
            <div class="flex items-center justify-between text-[10px] px-1">
                <span class="text-blue-300 font-medium">${card.hp} HP</span>
                <span class="text-yellow-400 text-[8px]">${card.rarity}</span>
            </div>
        </div>
    `).join("");
}

function setupMobileHandInteractions() {
    document.querySelectorAll(".mobile_card").forEach(card => {
        card.addEventListener("click", function() {
            const cardId = this.id.replace("mobile-card-", "");
            handleMobileCardSelection(cardId);
        });
    });
}

function handleMobileCardSelection(cardId) {
    const mySections = document.querySelectorAll(".my_section");
    let emptySection = null;
    
    for (let section of mySections) {
        if (section.children.length === 0) {
            emptySection = section;
            break;
        }
    }
    
    if (!emptySection) {
        alert("No empty slots available!");
        return;
    }
    
    // Remove card from hand
    const cardIndex = myHandCards.findIndex(card => card.id == cardId);
    if (cardIndex !== -1) {
        const droppedCard = myHandCards.splice(cardIndex, 1)[0];
        localStorage.setItem("myHandCards", JSON.stringify(myHandCards));
        
        // Update both hand displays
        generateMyHandCards();
        
        // Place card in field
        emptySection.innerHTML = `
            <div id="card-${droppedCard.id}" 
                class="my_card bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg shadow-md 
                        text-center border border-gray-600 min-w-full">
                <div class="relative mb-1">
                    <img src="${droppedCard.img_url}" 
                         class="w-full h-16 object-cover rounded-md border border-gray-600" 
                         draggable="false"
                         alt="${droppedCard.name}">
                    <div class="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1 rounded">
                        HP
                    </div>
                </div>
                <h3 class="text-white text-xs font-semibold mb-1 line-clamp-2">${droppedCard.name}</h3>
                <div class="flex justify-between text-[10px]">
                    <span class="text-blue-300">${droppedCard.hp} HP</span>
                    <span class="text-yellow-400">${droppedCard.rarity}</span>
                </div>
            </div>
        `;
        
        myCardIdHolder = Number(droppedCard.id);
        console.log("Mobile card placed:", myCardIdHolder);
        
        // Play sound
        let audioDrop = new Audio("../assets/cardDropSoundEffects.m4a");
        audioDrop.play();
        
        // Show action selection
        chooseMode(droppedCard.id);
        
        // Close mobile hand panel
        closeMobileHand();
    }
}

function closeMobileHand() {
    const mobileHandSection = document.getElementById("mobileHandSection");
    mobileHandSection.classList.add("opacity-0", "pointer-events-none");
    mobileHandSection.classList.remove("opacity-100", "pointer-events-auto");
    mobileHandSection.querySelector("div").classList.add("translate-y-full");
}

// Mobile hand toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    const mobileHandToggle = document.getElementById('mobileHandToggle');
    const mobileHandSection = document.getElementById('mobileHandSection');
    const mobileHandClose = document.getElementById('mobileHandClose');

    mobileHandToggle.addEventListener('click', function() {
        mobileHandSection.classList.remove('opacity-0', 'pointer-events-none');
        mobileHandSection.classList.add('opacity-100', 'pointer-events-auto');
        mobileHandSection.querySelector('div').classList.remove('translate-y-full');
    });

    mobileHandClose.addEventListener('click', closeMobileHand);

    mobileHandSection.addEventListener('click', function(e) {
        if (e.target === mobileHandSection) {
            closeMobileHand();
        }
    });

    // Initialize the game
    generateMyHandCards();
});








 