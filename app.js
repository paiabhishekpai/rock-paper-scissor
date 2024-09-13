let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const userScorePara=document.querySelector(".userscore");
const compScorePara=document.querySelector(".compscore");


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
    // console.log("the game was a draw");
    msg.innerText="It was a draw. Play again.";
    msg.style.backgroundColor = "grey";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { //user won
        // console.log("you won!");
        //update score
        userScore++;
        userScorePara.innerText=userScore;
        //declare result
        msg.innerText=`You Won...!   your ${userChoice} beats ${compChoice}    Congratulations`  ;
        msg.style.backgroundColor = "green";
    }
    else { //computer won
        // console.log("you lost");
        //update score
        compScore++;
        compScorePara.innerText=compScore;
        //declare result
        msg.innerText=`You lost...  ${compChoice} beats your ${userChoice}...  Better luck next time...`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    const compChoice = getCompChoice();
    // console.log("computer choice =", compChoice);

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

        showWinner(userWin,userChoice,compChoice);
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