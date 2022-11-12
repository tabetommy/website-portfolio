/********hadle project card***********/
 const prData=[{
     title:"Meet app",
     description:" A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.The application uses the Google Calendar API to fetch upcoming events.",
     technology: "React, aws lambda, service worker, Google calendar",
     liveSite:"https://tabetommy.github.io/meetup/",
     sourceCode:"https://github.com/tabetommy/meetup/tree/main"
  },
  {
    title:"myFlix",
    description:"A single-page,MERN, responsive application with routing, rich interactions, several interface views, and a polished user experience. It consumes a movie api and displays movies, users are allowed to view movies, movie attributes and create a list of favourite movies.",
    technology: "MERN, myFlix api",
    liveSite:"https://tabetommy.github.io/myFlix_client/",
    sourceCode:"https://github.com/tabetommy/myFlix_client"
  },
  {
   title:"IP Address Tracker",
   description:"IP adress tracker, tracks ip adresses and displays the IPadress, Location, time zones and Internet service provider, the location on a map.",
   technology: "React, Tailwind css,LeafletJS,IP Geolocation API",
   liveSite:"https://tabetommy.github.io/ip-address-tracker/",
   sourceCode:"https://github.com/tabetommy/ip-address-tracker" 
  },
  {
   title:"Pokemon",
   description:"Pokemon-app loads and displays pokemons fetched from the pokeApi.Each pokemon element displays futher details about the particular pokemon by use of a modal on user click",
   technology: "Vanilla JS, CSS, HTML, pokeApi",
   liveSite:"https://tabetommy.github.io/pokemon-app/",
   sourceCode:"https://github.com/tabetommy/pokemon-app" 
  },
  {
   title:"face detection app",
   description:"Face detection is an app that uses an api called clarifai to detect faces in a picture and sets a boundary the faces. This app that can adapted to facial recognition systems.",
   technology: "React,clarifai Api, tachyons css",
   liveSite:"https://tabetommy.github.io/facerecognition/",
   sourceCode:"https://github.com/tabetommy/facerecognition" 
  },
  {
   title:"myFlix-Angular",
   description:"A single-page, MEAN, responsive application with routing, rich interactions, several interface views, and a polished user experience. It consumes a movie api and displays movies, users are allowed to view movies, movie attributes and create a list of favourite movies.",
   technology: "MEAN, myFlix api",
   liveSite:"https://tabetommy.github.io/myFlix_Angular_client/welcome",
   sourceCode:"https://github.com/tabetommy/myFlix_Angular_client" 
  }
  ]

$(function () {
        var showMessage = function (title, description,tech,sourceCode,liveSite) {

            $(".modal-title").html(title);
            $(".modal-body-description").html(description);
            $(".modal-body-stack").html("Resources: " + tech);
            $(".source-code").attr("href", sourceCode)
            $(".live-site").attr("href", liveSite)

            $('#exampleModalCenter').modal('show');
        };

        
        document.querySelectorAll(".modal-btn").forEach((input,i)=>{
          input.addEventListener("click",()=>{
            prData.forEach((data,j)=>{
              if(j===i){
                showMessage(data.title,data.description,data.technology,data.sourceCode,data.liveSite)
              }
            })
          })
        })


    });



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
		$('.nav-bar-toggle').slideDown('fast',function(){
			$('.ham-menu-icon').hide();
			$('.menu-close').show()
		});
	});

	$('.menu-close').click(function() {
	$( ".nav-bar-toggle" ).slideToggle( 'fast', function() {
	$( ".menu-close" ).hide();
	$( ".ham-menu-icon" ).show();
	});
	});

})(jQuery)



/*****handle form validation and submission***/
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