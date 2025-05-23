<?php
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "stamboom";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(mysqli_connect_errno()){
    echo 'Database Connection Error'.mysqli_connect_errno();
}
?>