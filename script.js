// Define custom card piles for different intervals
const dailyCards = [
    { name: "Daily Card 1", description: "Description for Daily Card 1", points: 5 },
    { name: "Daily Card 2", description: "Description for Daily Card 2", points: 10 },
    { name: "Daily Card 3", description: "Description for Daily Card 3", points: 15 },
    { name: "Daily Card 4", description: "Description for Daily Card 4", points: 20 },
    // Add more daily cards as needed
];

const weeklyCards = [
    { name: "Weekly Card 1", description: "Description for Weekly Card 1", points: 20 },
    { name: "Weekly Card 2", description: "Description for Weekly Card 2", points: 25 },
    { name: "Weekly Card 3", description: "Description for Weekly Card 3", points: 30 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    // Add more weekly cards as needed
];

const monthlyCards = [
    { name: "Monthly Card 1", description: "Description for Monthly Card 1", points: 50 },
    { name: "Monthly Card 2", description: "Description for Monthly Card 2", points: 75 },
    { name: "Monthly Card 3", description: "Description for Monthly Card 3", points: 100 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    // Add more monthly cards as needed
];

// Function to draw cards based on the selected interval
function drawCards() {
    const interval = document.getElementById("interval").value;
    const cardResults = document.getElementById("cardResults");

    // Clear previous results
    cardResults.innerHTML = "";

    // Determine the card pile based on the selected interval
    let selectedCardPile;
    switch (interval) {
        case "daily":
            selectedCardPile = dailyCards;
            break;
        case "weekly":
            selectedCardPile = weeklyCards;
            break;
        case "monthly":
            selectedCardPile = monthlyCards;
            break;
        default:
            selectedCardPile = [];
            break;
    }

    // Shuffle the selected card pile (optional)
    const shuffledCards = shuffleArray(selectedCardPile);

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
