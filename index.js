// Code your solutions in this file

function writeCards(names, event) {
    let store = []

    for (let i = 0; i < names.length; i++) {
      store.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
   
    return store

  }

function countdown(countdown) {

    while (countdown > -1) {
        console.log(countdown--);
      }

}
