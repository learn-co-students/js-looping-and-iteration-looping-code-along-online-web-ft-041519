// Code your solutions in this file

function writeCards(names, event) {
  const newArray = []
  for (let i = 0; i <= names.length - 1; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return newArray;
}

function countdown(number){
  while (number >= 0){
  console.log(number--);}
}
