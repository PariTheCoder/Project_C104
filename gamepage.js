// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
player_name = localStorage.getItem("player_name");
  
// function for number guessed by user     
var guess = 1

function submit() {
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("CONGRATULATIONS!!!"+player_name+" YOU GUESSED IT RIGHT IN "+ guess + "GUESS ");
        guess= 1;
    }

    else if(x > y)
    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}