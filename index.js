const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}

// wrapGifts(gifts);

function writeCards(names, event){
  const cards = []
   for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
    
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number){
    let i = 0
    while(i <= number){
        console.log(number--);
    }
}

countDown(10);