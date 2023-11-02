// logic / code

// var x = 10;
// // only one default export allow
// export default x;


// function export defualt
// function add(x, y){
//     return x+y;
// }

// export default add;



// class Student{
//     constructor(){
//         this.name = "Vivek";
//         this.age = "20";
//     }
// }

// export default Student;


// ==============================
// NAMED EXPORT
function mul(x, y){
    return x*y;
}


class Student{
    constructor(){
        this.name = "Vivek";
        this.age = "20";
    }
}



// export {mul};
// export {Student}
export {mul, Student}