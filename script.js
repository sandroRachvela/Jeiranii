let playerChoice = null;
let playerScore = 0;
let aiScore = 0;

function changeAIImage(imageSrc) {
    const box4 = document.getElementById('box4');
    box4.innerHTML = `<img src="${imageSrc}" alt="AI's Image">`;
}

function changePlayerImage(imageSrc) {
    const box5 = document.getElementById('box5');
    box5.innerHTML = `<img src="${imageSrc}" alt="Player's Image">`;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function selectBox(boxId) {
    playerChoice = boxId; 
    changePlayerImage(document.getElementById(boxId).querySelector('img').src); 
}

function startGame() {
    if (playerChoice) {
        const randomNumber = getRandomNumber();
        let aiChoice;

        switch (randomNumber) {
            case 1:
                aiChoice = "macrateli.jpg";
                break;
            case 2:
                aiChoice = "kvis.jpg";
                break;
            case 3:
                aiChoice = "furceli.jpg";
                break;
        }

        changeAIImage(aiChoice);

        setTimeout(function() {
            if (playerChoice === "box1") {
                if (aiChoice === "macrateli.jpg") {
                    alert("It's a draw!");
                } else if (aiChoice === "kvis.jpg") {
                    alert("You lost!");
                    aiScore++;
                } else {
                    alert("You win!");
                    playerScore++;
                }
            } else if (playerChoice === "box2") {
                if (aiChoice === "macrateli.jpg") {
                    alert("You won!");
                    playerScore++;
                } else if (aiChoice === "kvis.jpg") {
                    alert("It's a draw!");
                } else {
                    alert("You lost!");
                    aiScore++;
                }
            } else if (playerChoice === "box3") {
                if (aiChoice === "macrateli.jpg") {
                    alert("You lost!");
                    aiScore++;
                } else if (aiChoice === "kvis.jpg") {
                    alert("You won!");
                    playerScore++;
                } else {
                    alert("It's a draw!");
                }
            }

           
            document.getElementById('note').textContent = `Player Score: ${playerScore}\nAI Score: ${aiScore}`;

          
document.getElementById('box4').innerHTML = "";
document.getElementById('box5').innerHTML = "";


           
            if (playerScore === 3 || aiScore === 3) {
                if (playerScore === 3) {
                    alert("Congratulations! You win the game!");
                } else {
                    alert("AI wins the game. Better luck next time!");
                }
                
                playerScore = 0;
                aiScore = 0;
            }

            playerChoice = null;
        }, 1000); 
    } else {
        alert("Please select a box first.");
    }
}

function newGame() {
    // Clear scores and notes
    playerScore = 0;
    aiScore = 0;
    document.getElementById('note').textContent = "";
    
    // Clear images
    document.getElementById('box4').innerHTML = "";
    document.getElementById('box5').innerHTML = "";
}

nsxnx



