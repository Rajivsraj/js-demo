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
