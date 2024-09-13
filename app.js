let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    //computer has 3 options-rock,paper and scissors
    //storing these in an array
    const options = ['rock', 'paper', 'scissors'];

    //to generate a random option, we use Math.random 
    //get a random number o,1 or 2

    const randIdx = Math.floor(Math.random() * 3);

    //take this random num as index for the options array

    return options[randIdx];
}

const drawGame = () => {
    console.log("the game was a draw");
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you won!");
    }
    else {
        console.log("you lost");
    }
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = getCompChoice();
    console.log("computer choice =", compChoice);

    //results
    //draw scenario
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true; //assume
        if (userChoice === "rock") { //computer chose paper or scissors
            userWin = compChoice === "paper" ? true : false;
        }
        else if (userChoice === "paper") { // computer chose rock or scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else { //user chose scissors, computer chose rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

//for accepting user's choice through clicks
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    })
})