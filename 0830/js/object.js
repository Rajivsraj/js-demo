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

// function mobile(){
//     this.brand = "samsung";
//     this.ram = "4GB";
//     this.storage = "16GB";
//     this.color = "green";
//     this.price = function(){
//         return this.brand;
//     }
// }

// let sam = new mobile()
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
// let arr = "Hello";
// let arr = 545;
// let arr = 545.45;
// console.log(arr);
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(arr));
// console.log(Object.getPrototypeOf(arr).__proto__);


// console.log(x.__proto__);
// console.log(sam.getProtoTypeOf());


// Prototype Inheritance
// function Mobile(){
//     this.brand = "samsung";
//     this.ram = "4GB";
//     this.storage = "16GB";
//     this.color = "green";
//     this.price = function(){
//         return this.brand;
//     }
// }

// function Student(){
//     Mobile.call(this);  // this is inheriting the Mobile Object
//     this.name = "Rahul";
//     this.city = "New Delhi";
//     this.class = "12th";
// }

// Mobile.prototype.camera = "108px";

// // Student.prototype = Object.create(Mobile.prototype)
// // Student.prototype.constructor = Mobile;
// let stu = new Student();
// console.log(stu);
// console.log(stu.ram);   // accessing mobile property using sutudent object
// console.log(stu.camera);



/*
function Mobile(){
    this.extra = "Mobile main";
    // this.ram = "6gb";
}

Mobile.prototype.ram = "16GB";

function Mobile1(){
    Mobile.call(this)
    this.price = "20000";
}

let a = new Mobile1
console.log(a.price);
console.log(a.extra);

function Mobile2(){
    Mobile.call(this)
    this.storage = "250GB";
}

Mobile1.prototype = Object.create(Mobile.prototype)
Mobile1.prototype.constructor = Mobile1;

Mobile2.prototype = Object.create(Mobile.prototype)
Mobile2.prototype.constructor = Mobile2

let m1 = new Mobile1
let m2 = new Mobile2
// console.log(con)
console.log(m1.ram);
console.log(m2.ram);
*/



/*
# Mixins
let Mobile = {
    name: "Samsung",
    price: 33000
}

let Student = {
    class: "12th"
}

let Parents = {
    fname: "Mr. Ram",
    address: "My address"

}

let Car = {
    name: "audio",
    wheel: 4
}

function P(){

}

let stuDetails = Object.assign({}, Student, Parents, Mobile)
console.log(stuDetails.class);
console.log(stuDetails.fname);

let stud = Object.assign({}, Student)
console.log(stud.class)


let stud2 = Object.assign({}, Student, Parents);
console.log(stud.class)

Object.assign(P.prototype, Student, Parents, Mobile)

let pa = new P();
console.log(pa.fname);
*/




function Mobile(){
    this.extra = "Mobile main";
    // this.ram = "6gb";
}

Mobile.prototype.ram = "16GB";

function Mobile1(){
    Mobile.call(this)
    this.price = "20000";
}

function Mobile2(){
    Mobile.call(this)
    this.storage = "250GB";
}

function Mobile3(){
    Mobile.call(this)
    this.storage = "250GB";
}

// Mobile1.prototype = Object.create(Mobile.prototype)
// Mobile1.prototype.constructor = Mobile1;

// Mobile2.prototype = Object.create(Mobile.prototype)
// Mobile2.prototype.constructor = Mobile2

// Mobile3.prototype = Object.create(Mobile.prototype)
// Mobile3.prototype.constructor = Mobile3

function inherit(child, parent){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child;
}

m3 = inherit(Mobile3, Mobile)
m2 = inherit(Mobile2, Mobile)
