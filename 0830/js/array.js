/*
let names = ["Rahul", "sumit", "amit", "ajay"];

names.forEach(function(v, i, arr){
    console.log("index: "+i+ "value: "+v, " arr: "+arr);
});
*/


let stu = {
    name: "Rahul",
    age: 30,
    city: "new Dlehi"
}
// Iterate object and array
for(let x in stu){
    console.log(stu[x]);
}


let names = ["Rahul", "sumit", "amit", "ajay"];
// Iterate object and array
for(let x in names){
    console.log(names[x]);
}

// let names = ["Rahul", "sumit", "amit", "ajay"];
// // is used to iterate array
// for(let x of names){
//     console.log(x);
// }