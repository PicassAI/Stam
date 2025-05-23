<?php /*<!-- localhost/Stamboom_2019/D3_Stamboom/Get_Q_json_test.php -->  */
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "stamboom"; // test

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(mysqli_connect_errno()){
    echo 'Database Connection Error'.mysqli_connect_errno();
}

$query = "SELECT id, voornaam, fam_naam, schild, parent_id, gender, fam_tak, geb_plaats, geb_jaar FROM personen WHERE fam_tak = 'Vanherle' AND parent_id != '11111' AND parent_id != '44444'"; 
 //"SELECT * FROM position";
$result = mysqli_query($conn, $query);
while($row = mysqli_fetch_assoc($result))
{
 $sub_data = $row; 
 $data[] = $sub_data; 
}
foreach($data as $key => &$value)
{
 $output[$value["id"]] = &$value;
}
foreach($data as $key => &$value)
{
 if($value["parent_id"] && isset($output[$value["parent_id"]]))
 {
  $output[$value["parent_id"]]["children"][] = &$value;
 }
}
foreach($data as $key => &$value)
{
 if($value["parent_id"] && isset($output[$value["parent_id"]]))
 {
  unset($data[$key]);
 }
}

$tak = $value["fam_tak"];
?>