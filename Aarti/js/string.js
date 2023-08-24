/*
str = "Unvierse"
console.log(str);
console.log(typeof(str));

str = 'Unvierse'
console.log(typeof(str))

str = `Universe`
console.log(typeof(str));
*/

// fail for multiple line
// str = "hello first line
// hello 2nd line"

// fail for multiple line
// str = 'hello line 1
// hello line 2'

/*
// can use multiple line usgin backticks
str = `hello line 1
hello line 2`

console.log(str);
document.write(str);
*/


/*
str = "hello mr \0ram babu";

str = "my name is \"ram\" singh";
str = "my name is 'ram' singh";
str = 'my name is "ram" singh';
str = 'my name is \'ram\' singh';
str = "my image is in asset\\image\\logo";
str = "Line 1 \nline 2 \nline 3";
console.log(str);
document.write(str);
*/

/*
let names = "Rahul";
let age = 23;

console.log(`My name is ${names} and my age is ${age} ${5+4}`);
*/

// let nm = "Rahul";
// console.log(nm.length);
// console.log(nm.charAt(2));  // value behalf of index no

// will tell you ascii code on indexed value
// console.log(nm.charCodeAt(1))
// let lnm = "Kumar"

// let fullname = nm.concat(" ",lnm);
// console.log(fullname);


// let str = "hello";
// console.log(str.endsWith("s"));
// console.log(str.lastIndexOf('o'))

// let str = "Hello hoW - Are how - you     ";
// n = str.replace("how","is");
// n = str.replaceAll("how","is");
// n = str.search("how");  // will return the index no of string

// n = str.slice(1, 4);
// n = str.split("-");
// n = str.substring(1,4)
// n = str.toLowerCase()
// n = str.toUpperCase()

// no = 5;
// no = no.toString()
// console.log(typeof no);


// let str = "Hello hoW - Are how - you     ";
// str = str.trimEnd();
// console.log(str);

str = "hello";

x = str.at(2);
console.log(x);