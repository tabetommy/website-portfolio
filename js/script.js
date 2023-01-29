
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


