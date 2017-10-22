$(document).ready(function(){	
var options = {};	
    $('#slide1').parallax("center", 0, 0.1, true);
    $('#slide2').parallax("center", 900, 0.1, true);
    $('#slide3').parallax("center", 2900, 0.1, true);

    $('.drop-down').on('click', function(){
		window.scroll({
		  top: $('main').offset().top, 
		  left: 0, 
		  behavior: 'smooth' 
		});
    });
    $('.mywork-projects-item').on('mouseenter', function(){
    	$(this).find('a').addClass('overlay-img green').show( "blind", options, 500, function(){
    	});
    });
    $('.mywork-projects-item').on('mouseleave', function(){
    	$(this).find('a').removeClass('overlay-img green').hide( "blind", options, 1000, function(){
    	});
    });
});

$(document).on('scroll', function(){
	if($(this).scrollTop() > 500){
		$("header").addClass('sticky');
	}else{
		$("header").removeClass('sticky');
	}
});
