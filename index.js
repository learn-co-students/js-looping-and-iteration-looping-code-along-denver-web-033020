// Code your solutions in this file

function writeCards(names){
    let newArray = []
    for(let i = 0; i < names.length; i++){
       newArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return newArray
}

function countDown(num){
    for(num; num >= 0; num--){
        console.log(num)
    }
}