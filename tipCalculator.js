/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.
Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/

// Write your function here:
const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad':
      return total * .05;
    case 'ok':
      return total * .15;
    case 'good':
      return total * .20;
    case 'excellent':
      return total * .30;
    default:
      return total * .18;
  }
}
// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('excellent', 80)) //should return 20

// We encourage you to add more function calls of your own to test your code!
