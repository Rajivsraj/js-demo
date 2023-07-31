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




class Student {
    constructor() {
        this.fname = "Rahul",
            this.lname = "Kumar",
            this.age = 20,
            this.marks = function () {
                return this.fname + " " + this.lname;
            };
    }
}
let obj = new Student();
