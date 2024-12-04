// question sheet-1
// 1.Create a variable called carName, assign the value Volvo to it.

let carName = "Volbo" ; 

// 2.On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 
{
    let firstName = "John";  // write variable name
    let lastName = "Doe" //write variable values 
    let age = 35 ; // write variable name and values both 
    
}
// 3.Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x*=y // what will be the value of x ?

// 4.Use comments to describe the correct data type of the following variables:

let length = 16; // int ? 
let lastName = "Johnson"; // string type ? 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object ? 

// 5.Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}
myFunction();
// call the function and see the output

// 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").
const person ={
    name:"john",
    age:50
};
alert(person.name + "is" + person.age);

// 1. The <button> element should do something when someone clicks on it. Try to fix it!

<button>Click me.</button> 
const button = document.getElementsId("button");
button.addEventListener("click");
alert("button clicked");


// 7.1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    Brand.unshift = "Ford";
console.log(Brand);
 
// 8.1. Use the correct Math method to create a random number.
let number = Math.random();

// 2. Use the correct Math method to return the largest number of 10 and 20.
let largeNumber = Math.max(10,20);

// 3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);














