<?php /*<!-- localhost/Stamboom_2019/D3_Stamboom/index_2.php -->  */
require ("conn.php"); 
$output ='';

if (isset($_POST["id"])) {
$id =  $_POST["id"];     
$query = "SELECT personen.*, content.* FROM personen INNER JOIN content ON personen.id = content.id WHERE personen.id='$id'";
$result = mysqli_query($conn, $query);
while($row = mysqli_fetch_array($result)){
    
if (empty($row['schild'])) {
 $schild = "";    
} else {
 $schild = '<div class="img_box"><a data-fancybox="gallery" href="../../../../'.$row['schild'].'" data-caption="Image Discription 1"><img src="../../../../'.$row['schild'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
   
if (empty($row['schild_2'])) {
 $schild_2 = "";    
} else {
 $schild_2 = '<div class="img_box"><a data-fancybox="gallery" href="../../../../'.$row['schild_2'].'" data-caption="Image Discription 2"><img src="../../../../'.$row['schild_2'].'" alt=""></a>
 <p class="img_disc">Image Discription</p></div>';    
}
   
if (empty($row['schild_org'])) {
 $schild_org = "";    
} else {
 $schild_org = '<div class="img_box"><a data-fancybox="gallery" href="../../../../'.$row['schild_org'].'" data-caption="Image Discription 2"><img src="../../../../'.$row['schild_org'].'" alt=""></a>
 <p class="img_disc">Image Discription</p></div>';    
}
    
if (empty($row['img1'])) {
 $img_1 = "";    
} else {
 $img_1 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img1'].'" data-caption="Image Discription 1"><img src="../../../'.$row['img1'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
   
if (empty($row['img2'])) {
 $img_2 = "";    
} else {
 $img_2 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img2'].'" data-caption="Image Discription 2"><img src="../../../'.$row['img2'].'" alt=""></a>
 <p class="img_disc">Image Discription</p></div>';    
}
    
if (empty($row['img3'])) {
 $img_3 = "";    
} else {
 $img_3 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img3'].'" data-caption="Image Discription 3"><img src="../../../'.$row['img3'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
    
if (empty($row['img4'])) {
 $img_4 = "";    
} else {
 $img_4 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img4'].'" data-caption="Image Discription 4"><img src="../../../'.$row['img4'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
    
if (empty($row['img5'])) {
 $img_5 = "";    
} else {
 $img_5 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img5'].'" data-caption="Image Discription 5"><img src="../../../'.$row['img5'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
    
if (empty($row['img6'])) {
 $img_6 = "";    
} else {
 $img_6 = '<div class="img_box"><a data-fancybox="gallery" href="../../../'.$row['img6'].'" data-caption="Image Discription"><img src="../../../'.$row['img6'].'"></a>
 <p class="img_disc">Image Discription</p></div>';    
}
      
// Explode de Kinderen   
$kids = explode(';',$row['k1']);
    
 if (empty($kids[0])) {$kid_1 = "";} 
else {$kid_1 = $kids[0];} 
    
 if (empty($kids[1])) {$kid_2 = "";} 
else {$kid_2 = $kids[1];}    
    
 if (empty($kids[2])) {$kid_3 = "";} 
else {$kid_3 = $kids[2];}
    
 if (empty($kids[3])) {$kid_4 = "";} 
else {$kid_4 = $kids[3];}    
    
 if (empty($kids[4])) {$kid_5 = "";} 
else {$kid_5 = $kids[4];}    
    
 if (empty($kids[5])) {$kid_6 = "";} 
else {$kid_6 = $kids[5];}
    
 if (empty($kids[6])) {$kid_7 = "";} 
else {$kid_7 = $kids[6];}    
    
 if (empty($kids[7])) {$kid_8 = "";} 
else {$kid_8 = $kids[7];} 
    
 if (empty($kids[8])) {$kid_9 = "";} 
else {$kid_9 = $kids[8];}    
    
 if (empty($kids[9])) {$kid_10 = "";} 
else {$kid_10 = $kids[9];}
    
 if (empty($kids[10])) {$kid_11 = "";} 
else {$kid_11 = $kids[10];}    
    
 if (empty($kids[11])) {$kid_12 = "";} 
else {$kid_12 = $kids[11];}    
    
 if (empty($kids[12])) {$kid_13 = "";} 
else {$kid_13 = $kids[12];}
    
 if (empty($kids[13])) {$kid_14 = "";} 
else {$kid_14 = $kids[13];}  
     
 if (empty($kids[14])) {$kid_15 = "";} 
else {$kid_15 = $kids[14];}     
// var_dump($kids);   
unset($kids); 

 $output .= '<nav class="left sm-nav">
            <h2 class="zoom_in" id="naam">'.$row['voornaam'].' '.$row['fam_naam'].'</h2>
            <p class="Pers_Dat flyInLeft">Geboren op '.$row['geb_dat'].'</p>
            <p class="Pers_Dat flyInLeft">Gestorven op '.$row['sterf_dat'].'</p>
            <p class="Pers_Dat flyInLeft">Beroep: '.$row['beroep'].'</p>
            <hr class="hr_anim">
            <img class="zoom_in" src="../../../../images/Ring.png">
            <p class="Pers_Dat flyInLeft">'.$row['trouw_dat'].'</p>
            <h3 class="zoom_in">'.$row['partner'].'</h3>
            <hr class="hr_anim">
            <h4 class="zoom_in">Hun Kinderen:</h4>
            <h5 class="flyInLeft">'.$kid_1.'</h5><h5 class="flyInLeft">'.$kid_2.'</h5><h5 class="flyInLeft">'.$kid_3.'</h5><h5 class="flyInLeft">'.$kid_4.'</h5><h5 class="flyInLeft">'.$kid_5.'</h5><h5 class="flyInLeft">'.$kid_6.'</h5><h5 class="flyInLeft">'.$kid_7.'</h5><h5 class="flyInLeft">'.$kid_8.'</h5><h5 class="flyInLeft">'.$kid_9.'</h5><h5 class="flyInLeft">'.$kid_10.'</h5><h5 class="flyInLeft">'.$kid_11.'</h5><h5 class="flyInLeft">'.$kid_12.'</h5><h5 class="flyInLeft">'.$kid_13.'</h5><h5 class="flyInLeft">'.$kid_14.'</h5><h5 class="flyInLeft">'.$kid_15.'</h5>
          </nav>
          <nav class="right sm-nav">
            <div id="info_text_box"><div class="img zoom_in">'.$schild_2.''.$schild_org.''.$img_1.''.$img_2.''.$img_3.''.$img_4.''.$img_5.''.$img_6.'</div>
            <hr class="zoom_in" id="hr_right">
            <div class="info_text"><p class="info flyInRight">'.$row['text'].'</p></div></div> 
          </nav>';       
}

 echo $output;   
};    
?>