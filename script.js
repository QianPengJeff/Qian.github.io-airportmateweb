$(document).ready(function(){
  
  var currentSlide = $('.active-slide');

	setInterval(function () {
		playslide();
		}, 5000); 

	function playslide() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
	
	
	 if(nextSlide.length === 0) {
	  nextSlide = $('.slide').first();
	 }
	
	currentSlide.fadeOut(50).removeClass('active-slide')
	nextSlide.fadeIn(1500).addClass('active-slide');

	
	};
});




	