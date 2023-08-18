/*
class Mobile{
    constructor(){
        console.log("Hi");
    }

    show(){
        console.log("show function");
    }
}


let m1 = new Mobile();
m1.show();
*/


// ES (Ecma Script 6)
/*
class Mobile{
    constructor(){
        this.name = "Rahul";
        this.age = "20";
        this.salary = 3490545;
    }

    detail(){
        console.log("my name is "+this.name+" age "+this.age+" salary "+this.salary);
    }
}

let m1 = new Mobile();
m1.detail();
*/


// Inheritance 1
/*
class Parent{
    constructor(){
        this.pname = "Mr. Rajiv Sharma";
        this.page = 30;
    }
    pdetails(){
        console.log("Hello Parent method");
    }
}


class Child extends Parent{

}

let ch = new Child();
console.log(ch.pname);
*/


// Inheritance with constructor
/*
class Parent{
    // default constructor | non-parameterized constructor
    constructor(){
        this.pname = "Mr. Rajiv Sharma";
        this.page = 30;
    }
    pdetails(){
        console.log("Hello Parent method");
    }
}


class Child extends Parent{
    constructor(){
        super();
        this.salary = 304545;
    }
}

let ch = new Child();
console.log(ch.salary);
console.log(ch.pname);
ch.pdetails();
*/



/*
class Parent{
    // parameterized constructor
    constructor(){
        this.pname = "Mr. Rajiv Sharma";
        this.page = 30;
    }
    pdetails(){
        console.log("Hello Parent method");
    }
}

class Student extends Parent{
    constructor(snm, sage) {
        super();
        this.sname = snm;
        this.age = sage;
    }
}

let stu = new Student("Aarti", 20);
console.log(stu.sname);
console.log(stu.age);
console.log(stu.page);
console.log(stu.pname);
*/




/*
class Parent{
    // parameterized constructor
    constructor(pnm, pag){
        this.pname = pnm;
        this.page = pag;
    }
    pdetails(){
        console.log("Hello Parent method");
    }
}

class Student extends Parent{
    constructor(snm, sage, ag, p) {
        super(p, ag);
        this.sname = snm;
        this.age = sage;
    }
}

let stu = new Student("Aarti", 20, 40, "Mr. Rajiv Sharma");
console.log(stu.sname);
console.log(stu.age);
console.log(stu.page);
console.log(stu.pname);
*/



// STATIC method
// in static class we can access static method wihtout creating any object
/*
class Parent{
    constructor(){
        this.pname = "Mr. Rajiv Sharma";
        this.page = 20;
    }
    // no need to crate object for accessing
    static pdetails(){
        console.log("Hello Parent method");
    }

    // need to create a object for accessing
    pdetails2(){
        console.log("Hello Parent method");
    }
}

let stu = new Parent()

Parent.pdetails();
stu.pdetails2();
*/



class Parent{
    constructor(){
        this.pname = "Mr. Rajiv Sharma";
        this.page = 20;
    }
    
  //  need to create a object for accessing
    pdetails2(){
        console.log("Hello Parent method");
    }
}

let p = new Parent();

for(let x in p){
    console.log(p[x]);
}
