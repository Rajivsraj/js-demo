<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST</title>
</head>
<body>
    


<form action="" method="post">
    First Name: <input type="text" name="fname"><br><br>
    Last Name: <input type="text" name="lname"><br><br>
    Email: <input type="text" name="email"><br><br>
    Password: <input type="password" name="password"><br><br>

    <input type="submit" value="Register" name="form1">
</form>
<br>
<form action="" method="post">
    First Name: <input type="text" name="fname2"><br><br>
    Last Name: <input type="text" name="lname2"><br><br>
    Email: <input type="text" name="email2"><br><br>
    Password: <input type="password" name="password2"><br><br>

    <input type="submit" value="Register" name="form2">
</form>
<?php
echo "<pre>";
print_r($_POST);
echo "</pre>";


// if(isset($_POST["form1"])){
//     echo "this is form 1";
// }else if(isset($_POST["form2"])){
//     echo "form 2";
// }else{
//     echo "not form clicked";
// }
// if(count($_POST)>=1){
//     ECHO count($_POST);
//     echo "<br>";
//     echo "Your names is ".$_POST['fname'];
//     echo "<br>";
//     echo "Your last name is ".$_POST['lname'];
//     echo "<br>";
//     echo "Your Email is ".$_POST['email'];
//     echo "<br>";
//     echo "Your Password is ".$_POST['password'];
// }

// echo $a;
// echo "<br>";
// echo isset($_GET);
?>
</body>
</html>