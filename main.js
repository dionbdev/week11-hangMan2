var inquirer = require('inquirer');


//RECURSIVE FUNCTION WHICH WILL ALLOW THE USER TO CREATE 5 PLAYERS AND THEN WILL PRINT EACH PLAYER'S STATS AFTERWARDS
var startGame = function() {
    //IF THE LENGTH OF THE team ARRAY IS 8 OR HIGHER, NO MORE QUESTIONS WILL BE ASKED
    if (words.length < 7) {
        
        inquirer.prompt([{
            name: "Guesses",
            message: "Guesses a letter"
        }, 

        }]).then(function(answers) {
            
            if (Guesses < 7) {
                words.push(answer);
                console.log(letter.words + " ");
            } else {
                
                console.log(player.name + "Game Over");
            }
            //RUNS THE createPlayer FUNCTION ONCE MORE
            startGame();
        })
    } else {
        //LOOPS THROUGH THE team ARRAY AND CALLS printStats() FOR EACH OBJECT IT CONTAINS
        for (var i = 0; i < words.length; i++) {
            team[i].printStats();
        }
    }
}

//CALLS THE FUNCTION createPlayer() TO START THE CODE
startGame();