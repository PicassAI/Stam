<?php   /*   <!-- localhost/Stam/Vanherle.php -->  */
require ("conn.php"); 
?>
<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="CSS/Tree.css"> 
    <link rel="stylesheet" href="CSS/styles.css"> 
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
	<link href='CSS/square_menu.css' rel='stylesheet' type='text/css'>
    
    <title></title>
</head>
<style>
    body{background-image: url("../../../../images/vanherle.png");
    background-size: cover; 
    background-color:#f2f2f2;}
  .menu-btn .btn-line {background: #373737;}
  .menu-btn.close .btn-line {background: #fff;}
 </style>
<body>
<script src="https://d3js.org/d3.v5.min.js"></script> 

 <svg></svg>
 <script src="Vanherle_4.js"></script>   
  <script> // Header "Control Panel Flyout" //
function toggleCP(){
      console.log(this.id);
    var id = (this.id); 
 
    // Send data to PHP function (Ajax)
       if (id != ""){
           $.ajax({
                url:"index_2.php",
                method:"POST",
                data:{id:id},
                success:function(data)
                {
                 $('.info_box').html(data);
                }  
          });
        }else{
          alert("Er is niemand in de database met de nummer \"" + id + "\".");  
        }    
   // End (Ajax)

       var defaults = {
    flyDirection: "bottom",
    animationStyle: "vertical"
	};
    
 // Open Menu //     
      $(".sm-close").addClass("de-lay").removeClass("re-move")
      $(".sm-menu").addClass("animated").addClass("ff-hack")
      
      if (!$("body").hasClass("sm-activate")) {
        if ($(".sm-overlay").length < 1) $("<div class='sm-overlay'></div>").hide().prependTo("body")
        $(".sm-overlay").fadeIn("fast", function() {
          $("body").addClass("sm-activate")
          var fired = false;
          $("body").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
            if ( ! fired ) {
                fired = true;
                $(".sm-menu .sm-nav").addClass("animated");
                $(".sm-menu .sm-nav").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
                  if (e.originalEvent.propertyName == '-webkit-transform' || e.originalEvent.propertyName == 'transform' || e.originalEvent.propertyName == '-o-transform' || e.originalEvent.propertyName == '-moz-transform') {
                    $(".sm-menu").addClass("re-rotate")

                    $(".sm-menu .sm-nav:first-child .nav-inner").addClass("animated flyInLeft")
                    $(".sm-menu .sm-nav:nth-child(2) .nav-inner").addClass("animated flyInRight")
                    $(".sm-overlay:not(.clicked)").addClass("clicked").click(function() {
                      el.closeMenu();
                    });
                  }
                });
            }
          });
        });
      } else {
        el.closeMenu();
      }
}  // End Open Menu

      // Close Menu
 $(document).on("click", ".sm-close", function(){

    console.log("It works!");
        $(".sm-menu").addClass("animated").removeClass("re-rotate")
      $(".sm-menu .sm-nav:first-child .nav-inner").removeClass("animated flyInLeft")
      $(".sm-menu .sm-nav:nth-child(2) .nav-inner").removeClass("animated flyInRight")
      $(".sm-close").addClass("re-move").removeClass("de-lay")
      
      if ($("body").hasClass("sm-activate")) {
        $(".sm-menu").find(".sm-nav").removeClass("animated")
        $(".sm-menu").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $("body").removeClass("sm-activate").find(".sm-menu").removeClass("ff-hack")
        });
      } 
});   // End close Menu
</script>    
<!-- Popup window begin --> 
    <div class="page-container">
        <div class="sidemenu sm-menu sm-bottom sm-vertical">
        <div class="info_box"></div>
         <a href="#" class="sm-close">X</a>
        </div>
      </div>
<!-- Popup window Einde -->     
  
</body>
</html>