//          Assignment of Array            //
//                Q#1                      //
const fruits : string [] = ["apple", "banana", "mango","orange"];
console.log(fruits);       
//                Q#2                      //
const numbers : number[] = [10,20,20,40];
console.log(numbers);
//                Q#3                      //
const thirdFruit = fruits[2];
console.log(thirdFruit);
//                 Q#4                     //
numbers[1] = 25;
console.log(numbers);
//                 Q#5                     //
fruits.push("Grape");
console.log(fruits);
//                 Q#6                     //
const lastFruit = fruits.pop();
console.log(fruits);
//                 Q#7                     //
const firstFruit = fruits.shift();
console.log(fruits);
//                 Q#8                     //
fruits.unshift("Kiwi");
console.log(fruits);
//                 Q#9                     //
fruits.slice(1,2);
console.log(fruits);
//                 Q#10                    //
fruits.splice(2,0,"pineapple","pear");
console.log(fruits);
//                 Q#11                    //
const citrusFruits = fruits.slice(0,2);
console.log(citrusFruits);
//                 Q#12                    //
const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);