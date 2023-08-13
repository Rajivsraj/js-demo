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