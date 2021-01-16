
let userInput;

function getUserNumber(){
    userInput = prompt('What is the number limit for the fuzzbuzz program?');
    userInput = parseInt(userInput);

    isNaN(userInput) ? (alert("Please enter a real number..."),  getUserNumber() ) : fizzBuzz(userInput);
    
    // if(isNaN(userInput)){
    //     alert("Please enter a real number...");
    //     getUserNumber();
    // }else{
    //     fizzBuzz(userInput);
    // }
}


function fizzBuzz(stopNumber){
    for(i=1; i <= stopNumber; i++){

        if((i % 15) === 0){
            document.querySelector('p').innerText += ` fizzbuzz `;


        }else if((i % 5) === 0){
            document.querySelector('p').innerText += ` buzz `;

        }else if((i % 3) === 0){
            document.querySelector('p').innerText += ` fizz `;

        }else{
            document.querySelector('p').innerText += ` ${i} `;
        }

    }
    
}

getUserNumber();









