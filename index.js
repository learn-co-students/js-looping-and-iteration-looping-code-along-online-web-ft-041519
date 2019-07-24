function writeCards(names, event) {
    let list = [];

    for (let i = 0; i < names.length; i++) {
        list.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return list;
};

function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}