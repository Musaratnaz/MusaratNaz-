//   Assignment # 1       //
//   Task  1              //
let  people ={ friends :[]};
//   Task  2              //
let friend1 ={
    firstName : "Musarat",
    lastName : "Naz",
    Id :1
};
let friend2 ={
    firstName : "Ali",
    lastName : "Abbas",
    Id :2
};
let friend3 = {
    firstName : "Tania",
    lastName : "Naz",
    Id :3
};
//  Task  3             //
people.friends.push(friend1,friend2,friend3);
//   Task  4            // 
console.log(people);
//    Assignment # 2    //
const scramledArray =["Student","of",true,123,"am", "a","GIAIC","I"]
scramledArray.splice(2,2)
scramledArray.pop();
scramledArray.unshift("I")
scramledArray[1] = "am";
scramledArray[2] ="a";
scramledArray[3] ="student";
scramledArray[4] = "of";
scramledArray[5] ="GIAIC";
console.log(scramledArray.join(""));
//     Assignment # 3     //
type products = {
    name : string;
    model : number;
    cost : number;
    quantity:number;
}
let product: products ={
    name : "Hp printer",
    model: 850,
    cost : 6000,
    quantity :50,
}
const product1 : products={
    name: "Kodak }scanners",
    model : 1030,
    cost :5600,
    quantity :30,
}
const product2: products ={
    name :"canon DSLR",
    model:250,
    cost:25000,
    quantity:50,
}
    let inventory = {
    product : [product,product1,product2]
}
console.log ("Quantity of the third product:",inventory.product[2].quantity);
let product3: products = {
    name :"sonic speakers",
    model :226,
    cost :5000,
    quantity:30,
}
inventory.product.push(product3)
console.log("Name of the fourth product:",inventory.product[3].name);
console.log("cost of the first product :",inventory.product[0].cost);  
//      Assignment # 4         //
interface student {
    name : 2030;
    senior: 425;
    completedassignments :123;

}
let students : any []=[
    {name :"Musarat",
     senior:true,
     completedassignments:true,   
},
     {name :"Tania" ,
      senior : false,
    completedassignments :true
},
     {name :"Lotus",
      senior : true,
      completedassignments:false
},
]
console.log(students);
