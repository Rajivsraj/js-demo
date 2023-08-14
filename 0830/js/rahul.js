/*
let x = {
    name: "Rahul",
    age: 30,
    city: "Delhi"
}

function Human(){
    this.name = "Rahul";
    this.age = 20;
    this.city = "New delhi";
}
*/

/*
class className{
    constructor(){
        // properties
    }
    //methods
}
*/

/*
class Student{
    constructor(){
        this.name = "rahul";
        this.age = 20;
    }
    show(){
        console.log(this.name);
    }
}

let stu = new Student();
stu.show();
*/


// let Student = class{
//     constructor(){
//         // properties
//     }
//     methods
// };


// let stu = class Student{
//     constructor(){
//         // properties
//     }
//     methods
// };


// class Student{

// }

// class Faculty extends Student{

// }





// class Student{
//     constructor(){
//         this.name = "Rahul";
//     }

//     showName(){
//         console.log(this.name);
//     }
// }

// class Faculty extends Student{
//     constructor(){
//         super(Student);
//         this.age = 20;
//     }
// }

// let f = new Faculty();
// console.log(f.name);







class Student{
    constructor(){
        this.name = "Rahul";
    }

    static showName(){
        console.log(this.name);
    }
}

// accessing static method
Student.showName();



// let add = {
//     plus: function(){
//         return "This is will add";
//     }
// }

// let multiply = {
//     mul: function(){
//         return "This is will multiply";
//     }
// }

// let calc = Object.assign({}, add, multiply);
// let calc2 = Object.assign({}, multiply);

// console.log(calc.plus());
// console.log(calc.mul());

// console.log(calc2.mul());


