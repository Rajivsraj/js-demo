<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Global Variable</title>
</head>
<body>

<?php

// $b = 20; // global variable
// function show(){
//     $a = 10; // local variable
//     echo $a;
//     echo $b;
// }

// show();
// echo $a;

// echo "<pre>";
// print_r($GLOBALS);
// echo "</pre>";

$GLOBALS["names"] = ["Rahul", "sumit", "amit", "aarti", "aman"];

// echo "<pre>";
// print_r($GLOBALS["_SERVER"]["HTTP_HOST"]);
// echo "</pre>";



// function show(){
//     $a = 10; // local variable
//     echo $a;
//     echo $GLOBALS["_SERVER"]["HTTP_HOST"];
// }

// show();


// echo "<pre>";
// print_r($GLOBALS);
// echo "</pre>";





// echo "<pre>";
// print_r($names);
// echo "</pre>";

// echo "<pre>";
// print_r($GLOBALS["names"]);
// echo "</pre>";



// $_POST["name"] = "hello";
// $_POST["age"] = 20;

// print_r($_POST["name"]);
?>
</body>
</html>