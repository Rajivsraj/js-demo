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
console.log(Student);
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

// it will assign parents ptototype in student prototype
Student.prototype = Object.assign(Parents.prototype);

// it will create a new prototype in Student prototype
// Student.prototype = Object.create(Parents.prototype);
console.log(Parents);
console.log(Student);
console.log(Student.prototype.city) // if want to access prototype than use function name

let stu = new Student();
console.log(stu.phone);
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
console.log(Student);

Student.prototype = Object.assign(Parents.prototype);
Student.prototype.constructor = Student;

let x = new Student();
// console.log(Student.prototype.city);
console.log(x.city);
*/


/*
function Parents(){
    Staff.call(this);
    this.pname = "Mr. Ram Avataar";
    this.phone = "9632587410";
    this.property = "1000000acr";
}

Parents.prototype.city = "New Delhi";


function Staff(){
    this.sname = "Mr. Ram Avataar";
    this.sphone = "9632587410";
    this.sproperty = "1000000acr";
}

Staff.prototype.salary = 343359045;


function Student(){
    Staff.call(this); 
    this.name = "Rahul Verma";
    this.class = "12th";
    this.address = "Sarita Vihar";
    this.earning = 500000;
}

function Admin(){
    this.adm = "admin"
}
console.log(Parents);
console.log(Staff);
console.log(Student);

Student.prototype = Object.assign(Staff.prototype);
Student.prototype.constructor = Student;

Parents.prototype = Object.assign(Staff.prototype);
Parents.prototype.constructor = Parents;

Admin.prototype = Object.assign(Staff.prototype);
Admin.prototype.constructor = Admin;

let stu = new Student();
console.log(stu.sphone);

let p = new Parents()
console.log(p.sphone);
*/


function Inheritance(child, parent){
    child.prototype = Object.assign(parent.prototype);
    child.prototype.constructor = child;
}


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

function Admin(){
    Parents.call(this);
    this.abc = "new";
}

// Student.prototype = Object.assign(Parents.prototype);
// Student.prototype.constructor = Student;

Inheritance(Student, Parents);
Inheritance(Admin, Parents);

let stu = new Student()
console.log(stu.pname);

let adm = new Admin();
console.log(adm.phone);