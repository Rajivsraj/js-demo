// let obj = {};
// check datatype
// console.log(typeof(obj));
// console.log(typeof("ldsjfl"));
// console.log(typeof(function(){return 100;}));

// let x;
// document.write(x);

// let y = null;
// document.write(y);

// let y = 30;
// document.write(y);

// let x = true;
// document.write(typeof(x));
// let arr = [];
// arr[0] = "rahul";
// arr[1] =  "sumit";

// console.log(arr);
// let arr = new Array();


/*
let student = {};   // creating empty array
// initialization
student["names"] = "Rahul";
student["age"] = 30;
student["city"] = "delhi";
student.course = "Wd";
    // or

student["name"]= "Rahul";
student["city"] = "Mumbai";
student["age"] = 34;
console.log(student);
*/


// 
/*
let student = new Object();    // creating object by using boject constructor
student.name= "Rahul";
student.age = 33;
student.city = "Delhi";
console.log(student);
    // or

student["name"]= "Rahul";
student["city"] = "Mumbai";
student["age"] = 34;
console.log(student);
*/


// let stu = {
//     name: "Rahul",
//     age: 20,
//     city: "Delhi",
//     course: "WD"
// }

// console.log(stu);


/*
let stu = {
    name: "Rahul",
    age: 20,
    city: "Delhi",
    course: "WD",
}

console.log(stu);
console.log(stu.age);
// console.log(stu.name);
// console.log(stu.marks());
// console.log(stu.salary());
// console.log(stu["father name"]);

delete stu.age;
// delete stu.city;
console.log(stu);
console.log(stu.age);
// console.log(stu.course);
*/


// factory Function
/*
function sutdent(){
    return {
        name: "Aarti",
        coruse: "wd",
        age: 19,
        city: "New Delhi"
    };
}
console.log(sutdent());
*/


/*
function sutdent(name, course, age, city){
    return {
        name: name,
        coruse: course,
        age: age,
        city: city
    };
}
let stu1 = sutdent("Rahul", "WD", 20, "Goa");
console.log(stu1);

let stu2 = sutdent("Mohan", "IT", 34, "dELHI");
console.log(stu2);
*/

/*
obj1 = {}
obj1.name = "Rahul";
obj1.age  = 30;


obj = new Object()
obj.name = "Rahul";
obj.age  = 30;
obj.total = function(){
    return 1000;
}
*/


// constructor1
// function Student(){
//     this.name = "Rahul";
//     this.age = 30;
//     this.city = "Delhi";
//     this.total = function(){
//         return 1000;
//     }
// }

// obj = new Student();
// console.log(obj);

// constructor1
// function Student(nm, age, city){
//     this.name = nm;
//     this.age = age;
//     this.city = city;
//     this.total = function(){
//         return 1000;
//     }
// }

// obj = new Student("Rahul", 34, "Delhi");
// obj2 = new Student("mohan", 32, "Mumai");
// console.log(obj);
// console.log(obj2);


// check property in object
// function car(){
//     this.name = "BMW";
//     this.brand = "BMW";
//     this.color = "black";
//     this.maxSpeed = 300;
//     this.height = "5 feet";
// }

/*
obj = new car();
console.log(obj);
let k;

for(k in obj){
    console.log(obj[k]);
}

for(k in obj){
    if(obj[k] == undefined){
        document.write("not exists");
    }else{
        console.log(obj[k]);
    }
}*/

/*
obj = new car();
console.log(obj);

// x = obj.hasOwnProperty("age");
// console.log(x);

if(obj.hasOwnProperty("brand")){
    console.log(obj.brand);
}else{
    console.log("Not exists");
}*/


// obj = new car();

// if("color" in obj){
//     document.write("exists");
// }else{
//     document.write("not exists");
// }



// private property and access them
/*
function Car(){
    var c = "hello";
    this.name = "audi";
    this.speed = 200;
    var price = "50L";  // private property
    this.pricefun = function(v){
        return this.speed+v;
        
    }
}

let car1 = new Car();
console.log(car1);

console.log(car1.pricefun(10));
*/



/*
function Car(){
    this.name = "bmw";
    this.price = "50l";
    this.speed = 300;
}

Car.prototype.color = "blue";
let rahul = new Car();
// rahul.color = "green";
console.log(rahul);

let sumit = new Car();
console.log(sumit);

let amit = new Car()
console.log(amit)

console.log(sumit.color);
*/


class Parent{
    constructor(name) {
        this.name = name;
    }

    showName(){
        console.log("My Name is "+this.name);
    }

}

class Student extends Parent{
    constructor(name, index) {
        super(name);
        this.index = index;
    }    
}

const stu = new Student('Rahul', 1);

console.log(stu.name);
console.log(stu.index);
stu.showName();
// Expected output: "foo"

// console.log(firstFooBar.getFullName());
  // Expected output: "foo-1"