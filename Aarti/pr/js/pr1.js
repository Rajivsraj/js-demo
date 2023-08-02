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



function car(){
    this.name = "BMW";
    this.brand = "BMW";
    var color = "black";    // private  property
    this.maxSpeed = 300;
    this.height = "5 feet";
    this.colorShow = function(){
        return this.color;
    }
}

bmw = new car()
console.log(bmw.color);

car.prototype.weight = "1 Ton";

Object.keys(bmw);