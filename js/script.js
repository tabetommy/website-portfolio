let formValidation=(
	function(){
		//assign inputs to variables
		let form=document.querySelector('#form-message');
		let nameInput=document.querySelector('#name');
		let emailInput=document.querySelector('#email');
		function getAll(){
			console.log(nameInput);
			console.log(emailInput);
			console.log(form);
		};

		function showErrorMessage(input,message){
			let container=input.parentElement;


			//remove error message
			let error=container.querySelector('.error-message');
			if(error){
				container.removeChild(error)
			}

			//add error message, if there is a message
			if(message){
				let error = document.createElement('div');
     			error.classList.add('error-message');
      			error.innerText = message;
      			container.appendChild(error);
			}

			

		};

		function validateName(){
			let value=nameInput.value;
			if(!value){
				showErrorMessage(nameInput, 'Name is a required field');
				return false;
			}
			showErrorMessage(nameInput,null);
			return true

		};

		function validateEmail(){
			let value=emailInput.value;
			if(!value){
				showErrorMessage(emailInput,'E-mail is a required field');
				return false
			}
			if(value.indexOf('@')===-1){
				showErrorMessage(emailInput,'You must enter a valid e-mail address');
				return false
			}

			showErrorMessage(emailInput,null);
			return true;

		};

        function validateForm() {
        	let isValidName = validateName();
		    let isValidEmail = validateEmail();
		    return isValidEmail && isValidPassword;
		};

		form.addEventListener('submit', (e) => {
		    e.preventDefault(); // Do not submit to the server
		    if (validateForm()) {
		      alert('Success!');
		    }
		});

		nameInput.addEventListener('input', validateName);
		emailInput.addEventListener('input', validateEmail);
  		

		return{
			getAll:getAll,
		}
	}

	)();


	function reveal() {
		var reveals = document.querySelectorAll(".projects-card");
	  
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

// (function($){
// 	$(".projects-card").each(function(index){
		
// 	})
// })(jQuery)

// handle hamburger menu toggle
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



