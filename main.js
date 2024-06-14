//   Assignment # 1       //
//   Task  1              //
var people = { friends: [] };
//   Task  2              //
var friend1 = {
    firstName: "Musarat",
    lastName: "Naz",
    Id: 1
};
var friend2 = {
    firstName: "Ali",
    lastName: "Abbas",
    Id: 2
};
var friend3 = {
    firstName: "Tania",
    lastName: "Naz",
    Id: 3
};
//  Task  3             //
people.friends.push(friend1, friend2, friend3);
//   Task  4            // 
console.log(people);
//    Assignment # 2    //
var scramledArray = ["Student", "of", true, 123, "am", "a", "GIAIC", "I"];
scramledArray.splice(2, 2);
scramledArray.pop();
scramledArray.unshift("I");
scramledArray[1] = "am";
scramledArray[2] = "a";
scramledArray[3] = "student";
scramledArray[4] = "of";
scramledArray[5] = "GIAIC";
console.log(scramledArray.join(""));
var product = {
    name: "Hp printer",
    model: 850,
    cost: 6000,
    quantity: 50,
};
var product1 = {
    name: "Kodak }scanners",
    model: 1030,
    cost: 5600,
    quantity: 30,
};
var product2 = {
    name: "canon DSLR",
    model: 250,
    cost: 25000,
    quantity: 50,
};
var inventory = {
    product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.product[2].quantity);
var product3 = {
    name: "sonic speakers",
    model: 226,
    cost: 5000,
    quantity: 30,
};
inventory.product.push(product3);
console.log("Name of the fourth product:", inventory.product[3].name);
console.log("cost of the first product :", inventory.product[0].cost);
var students = [
    { name: "Musarat",
        senior: true,
        completedassignments: true,
    },
    { name: "Tania",
        senior: false,
        completedassignments: true
    },
    { name: "Lotus",
        senior: true,
        completedassignments: false
    },
];
console.log(students);
