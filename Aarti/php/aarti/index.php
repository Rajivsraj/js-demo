<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Global Variable</title>
</head>
<body>

<?php

$names = [];

$names[0] = "Aarti";
$names[1] = "Neetu";
$names[2] = "Suraj";
$names[3] = "Mukesh";

// echo $names;  //we can not print all array in a echo
// echo "<pre>";
// print_r($names);
// echo "</pre>";

// $names = ["aarit", "neetu", "suraj", "mueskhs"];

// $data = [
//     ["suraj", "mohan", "manoj", "madan"],
//     [10, 20, 30, 40]
// ];


// $data = [
//     "name"=>["suraj", "mohan", "manoj", "madan"],
//     "age"=>[10, 20, 30, 40]
// ];
// echo "<pre>";
// print_r($data);
// echo "</pre>";

print_r($_SESSION);
?>

</body>
</html>