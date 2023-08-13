// function Student(){
//     this.fname = "Rahul",
//     this.lname = "Kumar",
//     this.age = 20,
//     this.marks = function(){
//         return this.fname+" "+this.lname;
//     }
// }

// let stu1 = new Student();
// console.log(stu1.age);
// console.log(stu1.marks());


// if("fname" in stu1){
//     console.log("exists");
// }

// obj.hasOwnProperty("propertyName")


// function Student(){
//     this.fname = "Rahul",
//     this.lname = "Kumar",
//     this.age = 20,
//     this.marks = function(){
//         return this.fname+" "+this.lname;
//     }
// }
// let obj = new Student();

// for(let stu in obj){
//     if(typeof(obj[stu]) != "function"){
//         console.log(obj[stu]);
//     }
// }


// for(let stu in obj){
//     console.log(obj[stu]);
// }




// function car(){
//     this.name = "BMW";
//     this.brand = "BMW";
//     var color = "black";    // private  property
//     this.maxSpeed = 300;
//     this.height = "5 feet";
//     this.colorShow = function(){
//         return this.color;
//     }
// }

// bmw = new car()

// console.log(bmw.color);
// console.log(bmw.colorShow());



// function car(){
//     this.name = "BMW";
//     this.brand = "BMW";
//     var color = "black";    // private  property
//     this.maxSpeed = 300;
//     this.height = "5 feet";
//     this.colorShow = function(){
//         return this.color;
//     }
// }

// bmw = new car()
// console.log(bmw.color);

// car.prototype.weight = "1 Ton";

// Object.keys(bmw);


// prototype
// var a = {}

// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(Object.prototype));


// function car(){
//     this.name = "BMW";
//     this.brand = "BMW";
//     var color = "black";    // private  property
//     this.maxSpeed = 300;
//     this.height = "5 feet";
//     this.colorShow = function(){
//         return this.color;
//     }
// }

// let bmw = new car();
// console.log(car.prototype);
// // both same
// console.log(car.prototype);
// console.log(car.prototype.constructor);
// console.log(bmw.__proto__);



// function car(){
//     this.name = "BMW";
//     this.brand = "BMW";
//     var color = "black";    // private  property
//     this.maxSpeed = 300;
//     this.height = "5 feet";
//     this.colorShow = function(){
//         return this.color;
//     }
// }
// let samsung = new car();
// console.log(car);
// console.log(samsung.__proto__);

/*
function Car(){
    this.name = "BMW";
    this.brand = "BMW";
}

Car.prototype.speed = 200;
let x = new Car();


function Car2(){
    Car.call(this);
    this.name2 = "BMW";
    this.brand2 = "BMW";
}

// inheriting SuperObject
Car2.prototype = Object.create(Car.prototype);  

// re-assigning constructor
Car2.prototype.construtor = Car2

let y = new Audio();
console.log(y.name);
console.log(y.name2);

*/


let Mobile = function(){

}

Mobile.prototype.getModel = function(){
    return this.model
}