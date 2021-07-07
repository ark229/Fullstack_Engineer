/*
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, 
but there’s something not quite right. Can you fix our code, please? 

We want our code to always return a whole number between 1 and 12. It’s so close! 
You’ll need to use Math.floor to get the functionality we need. 
*/

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}

console.log(rollTheDice());
