/**************handle element reveal******************/

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;
	
		if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
		} else {
		reveals[i].classList.remove("active");
		}
	}
	}
	
	window.addEventListener("scroll", reveal);


/*******handle hamburger menu toggle******/

(function($){
	$('.menu-close').hide();
	$('.nav-bar-toggle').hide();
	$('.ham-menu-icon').click(function(){
		$('.nav-bar-toggle').slideToggle('slow',function(){
			$('.ham-menu-icon').hide();
			$('.menu-close').show()
		});
	});

	$('.menu-close').click(function() {
	$( ".nav-bar-toggle" ).slideToggle( 'slow', function() {
	$( ".menu-close" ).hide();
	$( ".ham-menu-icon" ).show();
	});
	});

})(jQuery)


/*****handle email submission***/

// function sendEmail(){

// 	//email params and body
// 	var contactParams = {
//         from_name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     	};

//   emailjs.send('service_0wfjh57', 'template_1bsizph', contactParams)
//     .then((response)=> {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Message has been succesfully sent");
//     }, 
//     (error)=>{
//         console.log('FAILED...', error);
//         alert('FAILED...', error);
//     });
// }


$(document).ready(function() {

	// 1.handle form validation
	$("#namecheck").hide();
	$("#emailcheck").hide();
	$("#emailcheckchar").hide();
	$("#messagecheck").hide();
  	let nameError = true;
  	let emailError= true;
  	let emailCharError=true;
  	let messageError= true;
  

    //validate name
	function validateName(){
		if($('#name').val()===""){
			$("#namecheck").show();
			nameError=false;
			return false
		}else{
			// $("#namecheck").hide();
			return true
		}
	}

	//validate email
	function validateEmail(){
		if($('#email').val()===""){
			$("#emailcheck").show();
			emailError=false;
			return false
		}else{
			// $("#emailcheck").hide();
			return true
		}
			 
  	  }
 
 	//check if email has @
  	function isEmailHavingAtSign(){
  		if($('#email').val().indexOf('@')===-1 && $('#email').val().length>0){
			$('#emailcheckchar').show()
			emailCharError=false;
		}else{
			return true
		}
  	}

  	//checks if email has dot sign
  	function isEmailHavingDotSign(){
		if($('#email').val().indexOf('.')===-1 && $('#email').val().length>0){
			$('#emailcheckchar').show()
			emailCharError=false;
		}else{
			return true
		}

  	}


	//validate messaage
	function validateMessage(){
		if($('#message').val()===""){
			$("#messagecheck").show();
			messageError=false;
			return false
		}else{
			$("#messagecheck").hide();
			return true
		}
	}


  	// 2.handle form submission	
    $('.contact-button').click(function(event){
    	event.preventDefault();
    	validateName();
    	validateEmail();
    	isEmailHavingAtSign();
    	isEmailHavingDotSign();
    	validateMessage();

    	if(nameError==true && 
    		emailError==true && 
    		emailCharError==true &&
    		messageError==true){
    		console.log($('#name').val(), $('#email').val(), $('#message').val());
    		// window.location.reload();
	    	emailjs.send('service_0wfjh57', 'template_1bsizph', {
	    		from_name:$('#name').val() ,
		        email: $('#email').val(),
		        message: $('#message').val()
	    	})
			.then((response)=> {
			    console.log("SUCCESS!", response.status, response.text);
			    alert("Message has been succesfully sent");
			}, 
		    (error)=>{
		        console.log('FAILED...', error);
		        alert('FAILED...', error);
		    });
    	}else{
    		return false
    	}	
    });
});
//issue 1 when i enter wrong para, to correct it immediately does not work i haave to reload page