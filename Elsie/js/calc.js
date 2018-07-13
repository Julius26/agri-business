function validate(){
      var PatientID = getElementById("PId").value;
      if (PatientID == "") {
        document.getElementById("p").innerHtml = "Please field must be provided";

      }
    

 function calculation(){
	   	    var weight=document.getElementById("weight").value;
	   
	   	    var height=document.getElementById("height").value;

	   	    // if (height=="") {
         //         document.getElementById("h").innerHTML ="Empty height!";
         //    }

         //      if (Weight=="") {
         //         document.getElementById("p").innerHTML ="Empty Weight!";
         //    }
                       
          //  var BMI = (weight/height)/height;
            document.getElementById("answer").innerHTML = BMI;
       

		//	if (BMI > 18.5 && BMI < 25) 
		//	 {
		//	        document.getElementById("p").innerHTML ="Normal weight";
		//	 }

		//	else if (BMI > 25 && BMI < 30) {
		//		document.getElementById("p").innerHTML ="over weight";

		//	}

		//	else if (BMI > 30 && BMI < 40) {
		//		document.getElementById("p").innerHTML ="obesity";
		//	}

		//	else
		//	{
		//		document.getElementById("p").innerHTML ="morbid obesity";
		//	}
  
         }// end calc 1





          function calculation2(){
	   	    var weight=document.getElementById("weight").value;
	   	  

	   	    var height=document.getElementById("height").value;

	   	    // if (height=="") {
         //         document.getElementById("h").innerHTML ="Empty height!";
         //    }

         //      if (Weight=="") {
         //         document.getElementById("p").innerHTML ="Empty Weight!";
         //    }
                       
            var BMI = (weight/height)/height;
            document.getElementById("answer").innerHTML = BMI;
       
             switch(BMI){
                   case (BMI > 18.5 && BMI < 25):
                        document.getElementById("p").innerHTML ="Normal weight";
                   break;

                     case (BMI > 25 && BMI < 30):
                    document.getElementById("p").innerHTML ="over weight";
                    break;

                    case (BMI > 30 && BMI < 40):
                    document.getElementById("p").innerHTML ="obesity";
                    break;

                    default:
                    document.getElementById("p").innerHTML ="morbid obesity";

			}

           }

         


         function arrays(){

         	var UNI = ["UON", "KU", "JKUAT"]
         	document.getElementById("array").innerHTML =UNI[0];

         }

         
         function x(){
               var person = {
               	firstName: "John",
               	lastName: "Doe",
               	Age: 27,
               	School: "JKUAT",
                display: function(){//anonymous
                     return this.firstName;
                },

                display2: function(){
                	return this.Age;
                }

                
               }//end object
   

                // Accessing Objects
                 document.getElementById("object").innerHTML = person.firstName;
                 document.getElementById("display").innerHTML = person.display2();
                
                }// end function




       function Task1(){
       	var Account = {
       		accountNo: 23,
       		Amount: 200,
       		Fname: "KCB",
       		Lname: "Group",

       		deposit: function(){
       			var deposited = 800;
       			this.Amount = this.Amount + deposited;
       			return this.Amount;
       		},

       		withdraw: function(){
       			var withdraw = 500;
       			this.Amount = this.Amount - withdraw;
       			return this.Amount;
       		},

       		balance: function(){
       			return this.Amount;
       		},

       		buyairtime: function(){

       		}

       	}// end object

         // document.getElementById("depo").innerHTML = Account.deposit();
         //  document.getElementById("with").innerHTML = Account.withdraw();
          document.getElementById("balance").innerHTML = Account.balance();

       

       }  // end function       
                

    //Loops - repeating a program over and over again.    
    // For loops
    //1) initialize the loop to some number, 2) set condition, 3) increment/decrement-makes the loop to stop

      function loops(){
        for (var i = -9; i < 10; i++) {
        	console.log("hello"+i);

        }//end

      }//end


// For in Loops through items in a JS object
function forinloops(){

 var person = {
               	firstName: "John",
               	lastName: "Doe",
               	Age: 27,
               	School: "JKUAT",
               }



  for (var x in person){
              
       console.log(person[x])

  }//end
             	

}//end



function whileloop(){
      var z = 1;
      while(z<20){
      	console.log("hello while"+z);
      	z++;
      }
}// end

// looping through an array of cars
function whileloop2(){
      var cars = ['toyota','subaru', 'nissan'];
      var i=0;
      while(i<cars.length){
      	console.log("hello while"+cars[i]);

      	i++;
      }
}// end


// do while- has a weakness, it prints once even if the condition is fals

function dowhile(){
    var i=0;
    do{
    	console.log('hello world');
    	i++;

    }
    while(i<10);//the condition is false
}//end






















	    
