

let userInput;

function getUserNumber(){
    userInput = prompt('What is the number limit for the fuzzbuzz program?');
    userInput = parseInt(userInput);
    if(isNaN(userInput)){
        alert("Please enter a real number...");
    }
    getUserNumber();
}




