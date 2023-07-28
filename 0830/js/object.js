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

function sum(){
    return 3094540;
}


let student = {
    name: "rahul",
    lname: "Kumar",
    fees: function(){ 
        return 3000; 
    },
    total: sum
}

console.log(student);
console.log(student.total());