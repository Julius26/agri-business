$(document).ready(function(){

   // jQuery methods go here...
   // $("h1").hide();
    $("#heading").mouseenter(function(){
         //alert("You entered p1!");
         $("#heading").fadeOut();
    });

     $("#heading").mouseleave(function(){
         //alert("You entered p1!");
         $("#heading").fadeIn();
    });

    $("#cart").click(function(){
         //alert("You entered p1!");
          $("#aboutcart").slideUp("slow").slideDown("slow");
    });
    


	 $("#global").click(function(){
	         //alert("You entered p1!");
	          $("#globalmission").fadeOut(3000);
	 
	    });

	 $("#global").click(function(){
	         //alert("You entered p1!");
	          $("#globalmission").fadeIn(1000);
	 
	    });

	

});//end Jquery

