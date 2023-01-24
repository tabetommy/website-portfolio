/********handle project card***********/
 const prData=[{
     title:"myFlix-Angular JS",
     description:"A single-page,MEAN, responsive application with routing, rich interactions, several interface views, and a polished user experience. It consumes a movie api and displays movies, users are allowed to view movies, movie attributes and create a list of favourite movies.",
     technology: "MEAN, Angular Material, myFlix api",
     liveSite:"https://tabetommy.github.io/myFlix_Angular_client/welcome",
     sourceCode:"https://github.com/tabetommy/myFlix_Angular_client"
  },
  {
    title:"myFlix",
    description:"A single-page,MERN, responsive application with routing, rich interactions, several interface views, and a polished user experience. It consumes a movie api and displays movies, users are allowed to view movies, movie attributes and create a list of favourite movies.",
    technology: "MERN, React-Boostrap, React-redux, SCSS, myFlix api",
    liveSite:"https://tabetommy.github.io/myFlix_client/",
    sourceCode:"https://github.com/tabetommy/myFlix_client"
  },
  {
    title:"interactive-comment-section",
    description:"A fullstack, CRUD app and clone of the comment section of networking webapps like facebook. The user can creat, read, update and delete comments.",
    technology: "MERN, tailwind CSS, interactive-comments-section api",
    liveSite:"https://tabetommy.github.io/interactive-comments-section/",
    sourceCode:"https://github.com/tabetommy/interactive-comments-section"
  },
  {
   title:"IP Address Tracker",
   description:"IP adress tracker, tracks ip adresses and displays the IPadress, Location, time zones and Internet service provider, the location on a map.",
   technology: "React, Tailwind css,LeafletJS,IP Geolocation API",
   liveSite:"https://tabetommy.github.io/ip-address-tracker/",
   sourceCode:"https://github.com/tabetommy/ip-address-tracker" 
  },
  {
   title:"face detection app",
   description:"Face detection is an app that uses an api called clarifai to detect faces in a picture and sets a boundary the faces. This app that can adapted to facial recognition systems.",
   technology: "React,clarifai Api, tachyons css",
   liveSite:"https://tabetommy.github.io/facerecognition/",
   sourceCode:"https://github.com/tabetommy/facerecognition" 
  },
  {
   title:"Pokemon",
   description:"Pokemon-app loads and displays pokemons fetched from the pokeApi.Each pokemon element displays futher details about the particular pokemon by use of a modal on user click",
   technology: "Vanilla JS, CSS, HTML, pokeApi",
   liveSite:"https://tabetommy.github.io/pokemon-app/",
   sourceCode:"https://github.com/tabetommy/pokemon-app" 
  },
  {
   title:"University Website",
   description:"A single page simplified University website. Where students can register, sigin and navigate useful information.",
   technology: "React, React-Boostrap",
   liveSite:"https://tabetommy.github.io/cosmopolitan-university/",
   sourceCode:"https://github.com/tabetommy/cosmopolitan-university" 
  }
  ]

$(function () {
        let showMessage = (title, description,tech,sourceCode,liveSite)=> {

            $(".modal-title").html(title);
            $(".modal-body-description").html("DESCRIPTION: " + description);
            $(".modal-body-stack").html("STACK: " + tech);
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


const reveal=()=> {
	let windowHeight = window.innerHeight;
  let elementVisible = 150;
	let reveals = document.querySelectorAll(".reveal");
	reveals.forEach(reveal=>{
		let elementTop = reveal.getBoundingClientRect().top;
		if (elementTop < windowHeight - elementVisible) {
		reveal.classList.add("active");
		} else {
		reveal.classList.remove("active");
		}
	})
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



/****** handle highlight menu on scroll*****/
const sections=document.querySelectorAll(".section");
const navItems=document.querySelectorAll(".nav-bar a");

window.addEventListener("scroll",()=>{
	let currentSection="";
	sections.forEach(section=>{
		const sectionTop=section.offsetTop;
		const sectionHeight=section.clientHeight;
		if(pageYOffset >= sectionTop){
				currentSection=section.getAttribute("id");
		}
	});

	navItems.forEach(navItem=>{
				navItem.classList.remove("active");
			  if(navItem.classList.contains(currentSection)){
			  	navItem.classList.add("active");
			 }
		   });

})

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
