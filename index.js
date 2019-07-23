// Code your solutions in this file
function writeCards(names) {
    let thankYou = []
    for(let i = 0; i < names.length; i++) {
        let thanks = "Thank you, " + names[i] + ", for the wonderful surprise gift!"
        thankYou.push(thanks)
    }
    return thankYou
}

function countdown(num) {
    for(let i = num; i > -1; i--) {
        console.log(i)
    }
}
