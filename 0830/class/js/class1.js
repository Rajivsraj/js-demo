/*

class Mobile{
    // it will execute automatically when object created
    constructor(){
        this.price = 60000;
        this.brand = "Samsung";
        this.color = "Purple";
        console.log("hsdlifjslkdk");
    }

    tax(){
        console.log(this.price+1000);
    }
}


// console.log(Mobile);
let m1 = new Mobile();
console.log(m1.price);
m1.tax();

let m2 = new Mobile();
*/

/*
let Mobile = class{
    constructor(){
        this.price = 60000;
        this.brand = "Samsung";
        this.color = "Purple";
        console.log("This will run automatic no need to call it");
    }

    tax(){
        console.log(this.price+1000);
    }
}

console.log(Mobile)
let m1 = new Mobile();
*/



/*
let m = class Mobile{
    constructor(){
        this.price = 60000;
        this.brand = "Samsung";
        this.color = "Purple";
        console.log("This will run automatic no need to call it");
    }

    tax(){
        console.log(this.price+1000);
    }
}

console.log(m);
let obj = new m();
*/




// Hoisting: not supported by js class
/*
class Mobile{
    // default constructor
    constructor(){
        this.price = 60000;
        this.brand = "Samsung";
        this.color = "Purple";
        console.log("hsdlifjslkdk");
    }

    tax(){
        console.log(this.price+1000);
    }
}

let m1 = new Mobile();
console.log(m1.price);
*/


/*
class Mobile{
    // parameterized constructor
    constructor(p, b, c){
        this.price = p;
        this.brand = b;
        this.color = c;
        console.log("hsdlifjslkdk");
    }

    getValue(a){
        console.log(a);
    }
}

let m1 = new Mobile(40454, "Samsung", "Blue");
// m1.getValue(100);
console.log(m1.price);


let m2 = new Mobile(100000, "IPhone", "Black");
console.log(m2.price);
*/




/*
// Inheritance
class Parents{
    constructor(){
       console.log("Parent");
    }
}

class Student extends Parents{
    constructor(){
        super(Parents);
        console.log("Student");
    }
}


let stu1 = new Student();
*/


/*
class Parents{
    setValue(){
        this.name = "rahul";
    }
}

class Student extends Parents{
   constructor(){
    super(Parents);
    console.log("Thsi is student");
   }
}

let stu1 = new Student();
stu1.setValue();
console.log(stu1.name);
*/


/*
class Parents{
    constructor(nm, ag){
        console.log("My name is "+nm);
        this.name = nm;
        this.age = ag
    }
}


class Student extends Parents{
    constructor(fname, age){
     super(new Parents(fname, age));
    //  this.stu = new Student(fname);
     console.log("Thsi is student");
    }
 }

let stu1 = new Student("Rahul", 30);
console.log(stu1.name.name);
console.log(stu1.name.age);
*/

/*
class Student{
    constructor(){
        this.nm = "Rahul";
        this.age = 20;
    }

    static showDetail(nm, age){
        this.nm = nm
        this.age = age
        console.log("my name is "+this.nm+" and my age is: "+this.age);
    }
}


// let stu = new Student("Rahul", 20);
// console.log(stu.name);

Student.showDetail("Rahul", 20);
console.log(Student.nm);

let stu = new Student();
stu.showDetail("Mohan", 40);
*/


/*
// constructor inheritance
class Student{
    constructor(nm, ag){
        this.nm = nm;
        this.age = ag;
    }

    showDetail(){
        console.log("my name is "+this.nm+" and my age is: "+this.age);
    }
}

class Parent extends Student{
    constructor(pnm, page){
        super(pnm, page);
        this.page = page;
        this.pname = "Mr. Rajiv Verma";
    }
}


let p = new Parent("Mohan", 39);
console.log(p.pname);
console.log(p.nm);
console.log(p.age);
console.log(p.page);
p.showDetail();
*/