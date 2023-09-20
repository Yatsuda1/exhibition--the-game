// Define your custom card pile here
const customCardPile = [
    { name: "Card 1", description: "Description for Card 1", points: 10 },
    { name: "Card 2", description: "Description for Card 2", points: 20 },
    { name: "Card 3", description: "Description for Card 3", points: 30 },
    // Add more cards as needed
];

// Function to draw cards
function drawCards() {
    const interval = document.getElementById("interval").value;
    const cardResults = document.getElementById("cardResults");

    // Clear previous results
    cardResults.innerHTML = "";

    // Shuffle the card pile (optional)
    const shuffledCards = shuffleArray(customCardPile);

    // Draw three cards
    for (let i = 0; i < 3; i++) {
        const card = shuffledCards[i];
        const cardElement = document.createElement("div");
        cardElement.innerHTML = `<strong>${card.name}</strong><br>${card.description}<br>Points: ${card.points}`;
        cardResults.appendChild(cardElement);
    }
}

// Shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById("drawCards").addEventListener("click", drawCards);
