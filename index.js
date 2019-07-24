// Code your solutions in this file
function writeCards(names) {
    const newArray = []
    for (let i = 0; i <= names.length - 1 ; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countdown (number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}