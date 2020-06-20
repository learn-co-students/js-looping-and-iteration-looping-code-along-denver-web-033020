// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let thankYouList = []
    for (let counter = 0; counter < nameArray.length; counter++) {
        thankYouList.push(`Thank you, ${nameArray[counter]}, for the wonderful ${eventName} gift!`);
    };
    return thankYouList;
};

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--;
    };
};