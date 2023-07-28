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