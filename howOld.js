/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that 
age was (or will be) during that year. Handle three different cases: 

1. If the year is in the future, you should return a string in the following format: If the year is in the future, you should return a string in the following format:
2.If the year is before they were born, you should return a string in the following format: 'The year [year passed in] was [calculated number of years] years before you were born'
3. If the year is in the past but not before the person was born, you should return a string in the following format: 'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:
const howOld = (age, year) => {
  let dateToday = new Date();
  let currentYear = dateToday.getFullYear();
  const yearDiff = year - currentYear;
  const newAge = age + yearDiff;

  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
      return `The year ${year} was ${-newAge} years before you were born`;
  } else {
      return `You were ${newAge} in the year ${year}`;
  }
}
console.log(howOld(32, 2081));

// Once your function is written, write function calls to test your code!
