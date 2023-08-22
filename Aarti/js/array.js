// let names = ["Rahul", "sumit", "amit", "ajay"]

// Print array using loops: for, while, for in, for of
/*
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

i = 0;
while(i<names.length){
    console.log(names[i]);
    i++;
}

for(let x in names){
    console.log(names[x]);
}


for(let x of names){
    console.log(x);
}

names.forEach(function(v, i, arr){
    console.log(v, i, arr);
});
*/

// arr.pop()
/*
let names = ["aarti","neha","kajal","soniya","nisha"];
console.log(names);

x = names.pop()
console.log(x);
console.log(names);
*/

// arr.push() - add element
/*
let names = ["aarti","neha","kajal","soniya","nisha"];
console.log(names);

x = names.push("Mohan");
console.log(x);

x = names.push("Raman", "Sohan");

let name2 = ["Rahul", "sumti", "amit", "ajay"];
x = names.push(name2);
console.log(x);
console.log(names);
*/


// arr.shift() - delete 1st element
/*
let names = [ "aarti", "neha", "kajal", "soniya", "nisha" ];

names.shift()
console.log(names);
*/


// arr.unshift(el1, el2, .....) - add element form 0th index
/*
let names = [ "aarti", "neha", "kajal", "soniya", "nisha" ];
let name2 = ["one", "two", "three"];
// names.unshift("A", "B");
// names.unshift(name2);

console.log(names);
*/


// arr.indexOf(el)
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
i = names.indexOf("neha");
console.log(i);
*/

// arr.join("separater")
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
s = names.join(" ");
console.log(s);
console.log(typeof(names));
console.log(typeof(s));
*/


// arr.concat(arr1, arr2, ...)
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
let age = [20, 50, 34, 36, 34, 43];
let city = ["Delhi", "Mumbai", "Punjab", "Haryana", "Gujrat", "Goa"];

let newarray = names.concat(age, city);
console.log(newarray);
*/



/*
let names = [ "aarti", "neha", , , ,"soniya", "nisha" ];


// names.fill("apple", 2, 5);
names.fill(undefined, 2, 5);    //end value will start from 0 index
console.log(names);
*/


// arr.reverse() 
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];

console.log(names);

names.reverse()
console.log(names);
*/


// arr.slice(startPos, endPos)
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
let n = names.slice(2,5);
console.log(n);
*/


// arr.splice(startPos, delcount, "new elelents")
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
// names.splice(2, 2);
// names.splice(2, 2, "Mohan", "Sohan");
names.splice(2, 0, "Mohan", "Sohan");
console.log(names);
*/

// arr.toString()
/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];
console.log(names);
let x = names.toString()
console.log(typeof x);
console.log(x);
*/


/*
let names = [ "aarti", "neha", "neha", "kajal", "soniya", "nisha" ];

console.log(Array.isArray(names));
console.log(Array.isArray("hello"));
console.log(Array.isArray(555));
*/


// IMPORTANT FUNCITONS
function even(no){
    if(no%2==0){
        return no;
    }else{
        return false;
    }
}


/*
let data = [43, 45, 234, 56, 45];

x = data.map(even);
console.log(x);

for(let i of x){
    if(i==false){
        
    }else{
        console.log(i);
    }

}
*/


