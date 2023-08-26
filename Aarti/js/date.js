// return current date
// dt = new Date();

// dt = new Date(2023, 9, 1, 12, 30, 30);


// Date String


// ISO date
// dt = new Date("2023, 9, 1");
// dt = new Date("2023, 9, 1 10:20:10");
    // or
// dt = new Date("2023-9-1 10:20:10");


dt = new Date();
console.log(dt);

year = dt.getFullYear();
day = dt.getDay();
console.log(year);
console.log(day);


x = dt.setFullYear(2024)
console.log(x);
x = dt.getUTCFullYear();
console.log(x);