let youScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        const userChoice = button.getAttribute("Id");
         chanceContainer( userChoice);
       
    })
});

const getCompChoice = () => {
    const choices = ["rock" , "paper" , "scissor"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

const messageContainer = (msg) =>{
    const msgElement = document.getElementById("winner");
    msgElement.innerText = msg; 
}

const chanceContainer = (userChoice) => {
    const compChoice = getCompChoice();
    console.log("You Choose:", userChoice); 
    console.log("Computer Chose:", compChoice);

    if(userChoice===compChoice){
         winner.style.backgroundColor = "Orange";
        messageContainer("It's a Tie");
    } else if(
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
        
    ){
        youScore++;
        you0.innerText = youScore;
        winner.style.backgroundColor = "Green";
        messageContainer("You Win!");
       
    
    }
    else {
        compScore++;
        comp0.innerText = compScore;
         winner.style.backgroundColor = "Red";
        messageContainer("Computer Wins!");
    }
};

