//            Q1         //
/*Create a blank array: Start by setting upan empty array named myWork that will hold
objects.
2. Use a loop to create a lessons : Write afor loop that runs from 1 to 10. In each interation:
o Create an object representing a lesson.
o Each lesson should have a name property , which is a string like "Lesson 1" ,
"Lesson 2" , etc.
o Each lesson should also have astatus property, which alternates between true
and false. This means " Lesson 1"will have atatus : true, "Lesson 2 " will have
status : false , and so on.
3. Add the lesson to the array : Push each lesson object into the myWork array.
4. Print the result : Finally , log the myWork array to the console to see the list of lesson*/
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1
    };
    myWork.push(lesson);
}
console.log(myWork);
//             Q2           //
/*2. Guessing Game (Using while loop)
objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.*/
var maxiValue = 20;
var randomNum = (Math.floor(Math.random() * maxiValue + 1));
console.log(randomNum);
var correctGuess = false;
var guessedNum = [1, 3, 5, 6, 8, 9, 11, 13, 16, 19];
var n = 0;
while (!correctGuess && n < guessedNum.length) {
    var currentGuess = guessedNum[n];
    if (currentGuess === randomNum) {
        correctGuess = true;
        console.log("Congrats! You've guessed thecorrect number.");
    }
    else if (currentGuess < randomNum) {
        console.log("Your guess ".concat(currentGuess, " is too low... Try Again"));
    }
    else {
        console.log("Your guess ".concat(currentGuess, "is too high... Try Again"));
    }
    ;
    n++;
    console.log("The random number was ".concat(randomNum));
}
;
//          Q # 3        //
/*. Counter Incrementer (Using do while loop)
Objective: Createa program that increments acounter by aspecified step value using a
do. . .while loop and prints the counter value to the console until it reaches or exceeds 100.
Steps to Follw:
1. Set the string starting counter to 0: Create a variable counterand initialize it to 0.
2. Create a variable , step, to increase your counter by: Define a variablestep to hold
the value by which the counter will be incremented.
3. Add a do. . .while loop:bIn the loop, print the counter to the console and increment it by
the step amount each iteration.
4. counter to loop until the counteris equal to or more than 100: The loop should run
as long as the counter is less than 100.*/
var counter = 0;
var step = 5;
do {
    console.log("Counter value ".concat(counter));
    counter += step;
} while (counter <= 100);
console.log("Counter has been finished!");
//       Q # 4          //
/*4.Exploring objects with for . . .in Loop
Objective: Practice working with objects inTypeScript and iterating over their properties using
a for. . .in lopp.
Instructions:
1. Create a simple object with three items:
onDefine an object called myObject with three properties:item1, item2, and item3,
each with corresponding string values.
2. Use a for. . .in loop to get propertis' names and values from the object:
o Iterate through the properties of myObject using a for. . .in loop.
o Inside the loop, print each property's name and its corresponding value to theconsole.
*/
var myObject = {
    item1: "Bag",
    item2: "Clutch",
    item3: "Wallet",
};
for (var key in myObject) {
    console.log("key:", myObject[key]);
}
;
//       Q # 5         //
/*5. Exploring Arrays eith Loops(Using loop)
objective: Practice working with arrays in Typescript and using for loopsand for. . .of loops
to Iterate through arrayelements.
Instructions:
1.Create an empty array:
o Define an empty array called myArray.
2. Run a loop 10 times,adding a new incrementing value (starting from 1) to the myArray.
3. Log the array into the console:
o After populating the array, log the myArray into the console.
4. Use the for loop to interate through the array:
o Use a for loop to iterate through the array elements.
o Adjust the number of iterations based on the number of valuesin the array.
o Output each array element long with its index into the console.
Use the for. . .of loop to output the value into the console from the array:
o Use a for. . .to iterate through the arrayelements.
o Output each array element directly into the console.*/
var myArray = [];
for (var b = 1; b <= 10; b++) {
    myArray.push(b);
}
console.log("My Array", myArray);
for (var r = 0; r < myArray.length; r++) {
    console.log("element ".concat(r, " : ").concat(myArray[r]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("".concat(value));
}
