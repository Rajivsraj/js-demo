/*
function Mobile(){
    this.brand = "samsung";
    this.color = "blue";
    this.ram = "40GB";
}

console.log(Mobile);
    // or
console.log(Mobile.prototype.constructor);

console.log(Mobile == Mobile.prototype.constructor);

let samsung = new Mobile();
console.log(samsung);
*/


/*
let Mobile = {
    name: "samsunb",
    ram: "32gb",
    price: 50000,
}

console.log(Mobile);
console.log(Mobile.__proto__);
console.log(Mobile == Mobile.__proto__);    // false
*/


// console.log(Object);
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);

// let Mobile = {
//     name: "samsunb",
//     ram: "32gb",
//     price: 50000,
// }

// console.log(Mobile);
// console.log(Object.getPrototypeOf(Mobile));
//     // or
// console.log(Mobile.__proto__)


// console.log(Object);
// console.log(Object.prototype)
// console.log(Object.prototype.__proto__);
// console.log(Object.getPrototypeOf(Object.prototype))
// console.log(Object.getPrototypeOf(Object));
// console.log(Object.getPrototypeOf(Object.prototype));


/*
// array
let x = ["hi", "hello", "by"];
console.log(x);
console.log(x.__proto__);
console.log(Object.getPrototypeOf(x))
*/

/*
// String
let s = "Hello";
console.log(s.__proto__.__proto__.__proto__);

console.log(s.__proto__);
    //or
console.log(Object.getPrototypeOf(s));
*/


/*
// Number
let n = 40;
console.log(n);
console.log(n.__proto__);
    // or
console.log(Object.getPrototypeOf(n));

console.log(n.__proto__.__proto__);
console.log(n.__proto__.__proto__.__proto__);
*/


/*
function Mobile(){
    this.brand = "samsung";
    this.color = "blue";
    this.ram = "40GB";
}

let x = new Mobile(); // constructor with object 

console.log(Mobile);
    // or
console.log(Mobile.prototype.constructor);

console.log(Mobile.prototype);
    // or
console.log(x.__proto__);
console.log(x.__proto__.__proto__);
console.log(x.__proto__.__proto__.__proto__);
*/


/*
function Mobile(){
    this.brand = "samsung";
    this.color = "blue";
    this.ram = "40GB";
}

Mobile.prototype.camera = "108PX";

let m = new Mobile();
console.log(m);
console.log(m.brand);

console.log(Mobile.prototype.camera);
    // or
console.log(m.camera);
    // or
console.log(m.constructor.prototype.camera);
*/

/*
// Simple Inheritance
function Parents(){
    // Student.call(this);
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

function Student(){
    Parents.call(this);
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}

let stu = new Student();
console.log(Student);
console.log(stu);
console.log(stu.name);
console.log(stu.pname);

let p = new Parents();
console.log(Parents);
console.log(p);
*/





/*
// Simple Inheritance
function Parents(){
    // Student.call(this);
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

function Student(){
    // Parents.call(this);
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}

function Faculty(){
    Student.call(this);
    Parents.call(this);
    this.qualification = "MCA";
    this.tname = "Mr. Raman";
}


let fac = new Faculty();
console.log(Faculty);
console.log(fac);
*/






/*
// Simple Inheritance
function Parents(){
    // Student.call(this);
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

function Student(){
    Parents.call(this);
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}

function Faculty(){
    Student.call(this);
    this.qualification = "MCA";
    this.tname = "Mr. Raman";
}


let fac = new Faculty();
console.log(Faculty);
console.log(fac);
*/



/*

function Parents(){
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

Parents.prototype.city = "New Delhi";


function Student(){
    Parents.call(this); // it will not iherit prototype
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}

let stu = new Student();
console.log(Student);
console.log(stu);

// let p = new Parents();
// console.log(p)
*/




/*
function Parents(){
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

Parents.prototype.city = "New Delhi";


function Student(){
    Parents.call(this); 
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}


console.log(Parents);
// console.log(Parents.prototype)


console.log(Student);
// assigning Parent prototype to Student Protototype
Student.prototype = Object.create(Parents.prototype)
console.log(Parents);

let stu = new Student();
console.log(stu.city);
*/



function Parents(){
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

Parents.prototype.city = "New Delhi";

function Student(){
    Parents.call(this); 
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}


console.log(Parents);
console.log(Student);



