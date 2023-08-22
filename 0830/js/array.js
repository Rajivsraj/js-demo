/*
let names = ["Rahul", "sumit", "amit", "ajay"];

names.forEach(function(v, i, arr){
    console.log("index: "+i+ "value: "+v, " arr: "+arr);
});
*/

/*
let stu = {
    name: "Rahul",
    age: 30,
    city: "new Dlehi"
}
// Iterate object and array
for(let x in stu){
    console.log(stu[x]);
}
*/

/*
let names = ["Rahul", "sumit", "amit", "ajay"];
// Iterate object and array
for(let x in names){
    console.log(names[x]);
}
*/

// let names = ["Rahul", "sumit", "amit", "ajay"];
// // is used to iterate array
// for(let x of names){
//     console.log(x);
// }






// ARRAY
/*
let x = []
    // OR
// let x = new Array();

x[0] = "Rahul";
x[1] = "Sumti";
x[2] = "Amit";
x[3] = "Ajay";


// let names = ["Rahul", "sumit", "amit", "ajay", "vijay"];
    // OR 
// let names = new Array("Rahul", "sumit", "amit", "ajay", "vijay");


let names = new Array();
console.log(names);
*/


/*
let names = [
    "Rahul", 
    "sumit", 
    "amit", 
    "ajay", 
    "vijay"
];
console.log(names);

*/




// 2D ARRAY
/*
let data = [
    [], 
    [],
    []
];

data[0][0] = "Sohan"
data[0][1] = "Mohan"
data[0][2] = "Rohan"
data[0][3] = "Aman"
data[1][0] = "Rahul"

console.log(data[0]);
    // OR

let data = [
    ["Sohan", "Mohan", "Rohan", "Aman"], 
    ["Rahul"]
];


let data2 = [
    "rahul",
    "sumit"
];


data2[0] = "Mohan"
console.log(data2[0]);
*/

/*
let data = [
    ["Rahul", "Sumit", "amit", "ajay"],
    [53, 64, 75, 75],
    ["Delhi", "Mumbai", "PUnjab", "Haryana"]
]

console.log(data);

for(let row of data){
    for(let value of row){
        console.log(value);
    }
}*/

let array=[
    [
        ["Rahul" , "amit", "sumit"]
    ]
];

let x = [
    "rahul",
    [
        "sumit", 
        "akram", 
        [45,45,4,6,5,6,54]
    ],
    "amit"
];

x[1][2][2];

console.log(array[0][2])
console.log(array[0][0][2])