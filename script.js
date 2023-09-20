// Define custom card piles for different intervals
const dailyCards = [
    { name: "Friendly", description: "WIthin one passing period, identify 15 people you recognise.", points: 100 },
    { name: "Good Student", description: "Complete two homework assignments before school gets out", points: 150 },
    { name: "Hot Potato", description: "Find someone else playing exhibition. Treat this card as hot potato. Everyone who successfully gets rid of this card also gets 200 points.", points: 350 },
    { name: "Game Time!", description: "Find a friend at any point and play the penis game with them. You must get to a shouting level. Card is automatically failed if you get caught.", points: 500 },
    { name: "Good Friend", description: "Give two of your friends gifts woth more than $5. Gifts may come from campus closet.", points: 500 },
    { name: "Hat Head", description: "Wear 5 hats at the same time. Do not steal any stranger's hats.", points: 350 },
    { name: "THURSTON!", description: "Find and high five Thurston Imhoff. If you are Thurston Imhoff, high five yourself.", points: 400 },
    { name: "Art Commission", description: "Draw and hang up a picture in Mr.Thatcher's room. (E-205)", points: 500 },
    { name: "Bet!", description: "Take any weekly card not yet completed. You may wager as many or as little points as you wish, up to 2500 points. If you do not complete the challenge, you lose those points from your total score.", points: N/A },
    { name: "Cursed!", description: "You must pick between one of the two challenge cards in your draw. You cannot complete it. You may not veto this card.", points: N/A },
    { name: "Cursed!", description: "You must pick between one of the two challenge cards in your draw. Halve it's point value. You may not veto this card.", points: N/A },
    { name: "Cursed!", description: "Find someone playing Exhibition, and give them 1,000 points. You may not veto this card.", points: -1000 },
    { name: "Modifier", description: "Double the worth of one of your two remaining challenge cards.", points: N/A },
    { name: "Free!", description: "Free 250 points. If you wish to veto this card, the price is zero points.", points: 250 },
    // Add more daily cards as needed
];

const weeklyCards = [
    { name: "Weekly Card 1", description: "Description for Weekly Card 1", points: 20 },
    { name: "Weekly Card 2", description: "Description for Weekly Card 2", points: 25 },
    { name: "Weekly Card 3", description: "Description for Weekly Card 3", points: 30 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    { name: "Weekly Card 4", description: "Description for Weekly Card 4", points: 35 },
    // Add more weekly cards as needed
];

const monthlyCards = [
    { name: "Monthly Card 1", description: "Description for Monthly Card 1", points: 50 },
    { name: "Monthly Card 2", description: "Description for Monthly Card 2", points: 75 },
    { name: "Monthly Card 3", description: "Description for Monthly Card 3", points: 100 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
    { name: "Monthly Card 4", description: "Description for Monthly Card 4", points: 125 },
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
