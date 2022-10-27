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


/*******************************handle hamburger menu toggle*******************/
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


/*********************handle email submission**********************************************/

const form = document.getElementById("form-message"); 

const sendMail = (mail) => {
	fetch("/send", {
	  method: "post", 
	  body: mail, 
	}).then((response) => {
	  return response.json();
	});
  };

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
})


