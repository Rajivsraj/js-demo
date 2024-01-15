<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST</title>
</head>
<body>
    


<form action="" method="post">
    username: <input type="text" name="username"><br><br>
    password: <input type="password" name="password"><br><br>

    <input type="submit" value="Login" name="login">
</form>

<?php
// username: "rahul01"
// username: "rahul@123";

if(isset($_POST["login"])){
    $username = $_POST["username"];
    $password = $_POST["password"];

    if($username == "rahul01" && $password=="rahul@123"){
        echo "Login Success";
        $_SESSION["username"] = $username;
        header("location: dashboard.php");

    }else{
        echo "Incorrect username or password";
    }
}

echo "<pre>";
print_r($_SESSION);

// if(isset($_POST["login"])){
//     $username = $_POST["username"];
//     $password = $_POST["password"];

//     if($username == "rahul01"){
//         if($password == "rahul@123"){
//             echo "Login Success";
//         }else{
//             echo "Password incorrect";
//         }
//     }else{
//         if($password == "rahul@123"){
//             echo "username incorrect";
//         }else{
//             echo "Incorrect username and password";
//         }
//     }
// }


// print_r($_ENV);
?>


</body>
</html>