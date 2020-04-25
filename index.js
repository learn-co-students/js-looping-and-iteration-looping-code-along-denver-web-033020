// Code your solutions in this file
function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}
writeCards(names, surpise);

function countDown(beginning) {
while (beginning > 0) {
    console.log(beginning);
    beginning -= 1;
}
console.log(beginning);
}

