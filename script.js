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
    { name: "Bet!", description: "Take any weekly card not yet completed. You may wager as many or as little points as you wish, up to 2500 points. If you do not complete the challenge, you lose those points from your total score.", points: 0 },
    { name: "Cursed!", description: "You must pick between one of the two challenge cards in your draw. You cannot complete it. You may not veto this card.", points: 0 },
    { name: "Cursed!", description: "You must pick between one of the two challenge cards in your draw. Halve it's point value. You may not veto this card.", points: 0 },
    { name: "Cursed!", description: "Find someone playing Exhibition, and give them 1,000 points. You may not veto this card.", points: -1000 },
    { name: "Modifier!", description: "Double the worth of one of your two remaining challenge cards.", points: 0 },
    { name: "Free!", description: "Free 250 points. If you wish to veto this card, the price is zero points.", points: 250 },
    // Add more daily cards as needed
];

const weeklyCards = [
    { name: "Present!", description: "Have Perfect Attendance", points: 1000 },
    { name: "Paying Attention", description: "Never use SmartPass", points: 1000 },
    { name: "Hungry", description: "Eat school lunch every day. You must get a full lunch. You must eat the whole meal.", points: 1250 },
    { name: "Reminiscing", description: "Find 15 teachers you've had in the past, and get their autographs. If you haven't had 15 teachers yet, get any 15.", points: 1250 },
    { name: "Improper Dressing", description: "If during winter, wear full summer attire; shorts, t-shirt, sandals. If it is not winter you may reroll your hand.", points: 1100 },
    { name: "Photogenic", description: "Take 3 selfies with Bourdage in the background.", points: 1250 },
    { name: "L", description: "Write an L on your forehead. It must stay there all week.", points: 1500 },
    { name: "Aggressive Hand Signs", description: "Flip off Mrs. Florip 3 times thurought the week. Must be on 3 seperate days. +1000 points if she notices.", points: 2000 },
    { name: "Attractive", description: "Talk to 5 of your teachers. You must bring up in casual conversation that they look really hot.", points: 1500 },
    { name: "Never Forget", description: "Once per day, put a sticky not on King Stoppa's old door that reads, -We Miss You King Stoppa", points: 1250 },
    { name: "Scary!", description: "Find Evan McDonald, and scare him each day.", points: 1500 },
    { name: "Wrong Season", description: "Each day, dress for christmas. If it is Christmas season, dress for halloween.", points: 1500 },
    { name: "Bet!", description: "Sacrafice one of your weekly cards, and triple the point value of your last remaining challenge. If you do not complete the card by the end of the week, you lose the points from your total score. You do not need to accept this card, you may veto it for zero cost.", points: 0 },
    { name: "Sucks to Suck", description: "You do not get a third weekly challenge. You do not get any points for this card. You cannot veto this card. Sucks to Suck", points: 0 },
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
