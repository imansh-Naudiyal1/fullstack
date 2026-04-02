function checkMummyMood() {
    return new Promise((resolve) => {
        console.log("1. Mummy ka mood check ho raha hai...");
        setTimeout(() => {
            resolve("Happy"); 
        }, 2000);
    });
}

function askForMoney(mood) {
    return new Promise((resolve) => {
        console.log(`2. Mummy ka mood ${mood} hai, ab 500 rupaye maang raha hoon...`);
        setTimeout(() => {
            resolve(500); 
        }, 2000);
    });
}


function buyTicket(rupaye) {
    return new Promise((resolve) => {
        console.log(`3. Mere paas ${rupaye} rupaye hain, ticket book kar raha hoon!`);
        setTimeout(() => {
            resolve("TICKET_CONFIRMED");
        }, 2000);
    });
}

checkMummyMood()
    .then(mood => askForMoney(mood)) // Mood aaya -> Paise maange
    .then(paisa => buyTicket(paisa))  // Paise aaye -> Ticket li
    .then(result => console.log("Final Status: " + result)); 
