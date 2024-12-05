// Question sheet-2
// 1.Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function celsiusToFahrenheit(celsius) {
    return ((celsius*9/5)+32);
  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77

//   2.Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(num) {
    return number % 2 === 0;
}
  
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
//   4.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
  
function sum(a, b) {
    return a+b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30
  
//  4.Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(arr) {
    return Math.min(arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
    
//   5.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return countVowels;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3

// 6.Write a function to get the first element of an array. The function should take a single argument, which is the array.
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

// 7.Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr) {
  if (arr.length===0){
    return true;
  }
  else{
    return false;
  }
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// 8.Write a function to return the factorial of a number. The function should take a single argument, which is the number.
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  let result = num*factorialize(num-1);
  return result;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040

// 9.Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
  
   return inputString.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"


