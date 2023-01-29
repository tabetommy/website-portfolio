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
	const validateName=()=>{
		if($('#name').val()===""){
			$("#namecheck").show();
			nameError=false;
		}else{
			$("#namecheck").hide();
			return true
		}
	}

	//check if email is present
	const validateEmail=()=>{
		if($('#email').val()===""){
			$("#emailcheck").show();
			emailError=false;
		}else{
			$("#emailcheck").hide();
			return true
		}
			 
  	  }
 
 	//check if email has @
  	const isEmailHavingAtSign=()=>{
  		if($('#email').val().indexOf('@')===-1 && $('#email').val().length>0){
			$('#emailcheckchar').show();
			emailCharError=false;
		}else{
			$('#emailcheckchar').hide();
			return true
		}
  	}

  	//checks if email has dot sign
  	const isEmailHavingDotSign=()=>{
		if($('#email').val().indexOf('.')===-1 && $('#email').val().length>0){
			$('#emailcheckchar').show();
			emailCharError=false;
		}else{
			$('#emailcheckchar').hide();
			return true
		}

  	}


	//validate messaage
	const validateMessage=()=>{
		if($('#message').val()===""){
			$("#messagecheck").show();
			messageError=false;
		}else{
			$("#messagecheck").hide();
			return true
		}
	}


  //2. Check input values on key up

  $('#name').keyup(()=>validateName());
  $('#email').keyup(()=>validateEmail());
  $('#email').keyup(()=>isEmailHavingAtSign());
  $('#email').keyup(()=>isEmailHavingDotSign());
  $('#message').keyup(()=>validateMessage());


  	// 3.handle form submission	
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
	    	emailjs.send('service_0wfjh57', 'template_1bsizph', {
	    		from_name:$('#name').val() ,
		        email: $('#email').val(),
		        message: $('#message').val()
	    	})
			.then((response)=> {
			    console.log("SUCCESS!", response.status, response.text);
			    alert("Message has been succesfully sent");
			    window.location.reload();
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
