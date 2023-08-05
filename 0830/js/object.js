/*
// Empty Object
let student = {};
// let stuarr = [];
// console.log(typeof(obj));
// console.log(typeof(6565));
// console.log(typeof("dslf"));
// console.log(typeof(345.45));
// console.log(obj);

// stuarr[0] = "hello";
// stuarr[1] = "30"

student["name"] = "Rahul";
student["age"] = 30;
student["course"] = "WD";

console.log(student);
// console.log(stuarr);
*/


// let student = {name: "Rahul", age: 30, course: "IT"};
// console.log(student);



/*
let student = {
    name: "Rahul", 
    "last name": "Kumar",
    age: 30, 
    course: "IT",
    3: "hello"
    
};
console.log(student);

// access value
console.log(student.name);
// console.log(student."last name");    # error
console.log(student.age);
// console.log(student.3);      // error
        // or
console.log(student["name"]);
console.log(student["last name"]);
console.log(student["age"]);
console.log(student[3]);
*/

/*
let student = {
    name: "rahul",
    lname: "Kumar",
    fees: function(){ 
        return 3000; 
    },
}
console.log(student.fees());
console.log(student["fees"]());

delete student.lname;
console.log(student.lname);
console.log(student);
*/

/*
let student = new Object();
// document.write(typeof(student));
student["name"] = "Rahul";  // 1 way to initialize and assign value
student.lanme = "Kumar";    // 2nd way to initialize and assign value
console.log(student);
*/

/*
let stu2 = new Object();
stu2.age = 30;
stu2.fullname = function(){ return "Rahul Kumar"; };

console.log(stu2);
*/

// function sum(){
//     return 3094540;
// }


// let student = {
//     name: "rahul",
//     lname: "Kumar",
//     fees: function(){ 
//         return 3000; 
//     },
//     total: sum
// }

// console.log(student);
// console.log(student.total());



// function mobile(){
//     let wages = 1500;
//     this.ram = "4GB";
//     this.storage = "16GB";
//     this.color = "green";
//     this.price = function(){
//         return t+m+w;
//     }
// }

// let x = new mobile();
// console.log(x);
// console.log(x.mobile_name());   // access priavate property using public property



// function mobile(){
//     this.brand = "samsung";
//     this.ram = "4GB";
//     this.storage = "16GB";
//     this.color = "green";
//     this.price = function(){
//         return this.brand;
//     }
// }


// // prototype
// let rahul = new mobile();
// mobile.prototype.camera = "108px";
// console.log(rahul);

// let sumit = new mobile();
// sumit.sensor = true;
// console.log(sumit);

// let ajay = new mobile();
// console.log(ajay);
// console.log(ajay.camera);

// console.log(Object.keys(rahul));
// for(let y in ajay){
//     console.log(ajay[y]);
//     if(typeof(ajay[y]) == "function"){
//         console.log(ajay[y]());
//     }
// }

// function adca(){

// this.course="Advance diploma in compute application";
// this.time="2 years";
// }
// let x= new adca();
// document.write(x);

function mobile(){
    this.brand = "samsung";
    this.ram = "4GB";
    this.storage = "16GB";
    this.color = "green";
    this.price = function(){
        return this.brand;
    }
}

let sam = new mobile()
// mobile.prototype.camera = "32px";

// console.log(sam);
// console.log(sam.brand);
// console.log(sam.__proto__);
// console.log(mobile.prototype);

// console.log(sam.brand);


// let x = {
//     name: "Rahul",
//     age: 20
// };

// let x = 50;
// console.log(x);
// console.log(Object.getPrototypeOf(x));
// console.log(Object.getPrototypeOf(Object.prototype));

// let arr = ["hello", "hi", "by"]
let arr = "Hello";
// let arr = 545;
// let arr = 545.45;
console.log(arr);
// console.log(Object.prototype);
console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(arr).__proto__);


// console.log(x.__proto__);
// console.log(sam.getProtoTypeOf());
