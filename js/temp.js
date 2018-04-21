$(function(){

	'use strict';

// Trigger Nice Scroll
	$('html').niceScroll();

// Header height
	$('.header').css('height' , $(window).height()*90/100);

// Header's Arrow 
	$('.header .fa-chevron-circle-down').click(function(){

		$('body ,html').animate({
			'scrollTop':$('.features').offset().top 
			
		},1000);
		
	})
// Header Buutons

	$('.header .header-content button:first-of-type').click(function(){
		$('body ,html').animate({
			scrollTop : $('.hire').offset().top
		},2000)
	});

	$('.header .header-content button:last-of-type').click(function(){
	$('body ,html').animate({
		scrollTop : $('.our-work').offset().top
	},1000)
	});

/*
	Our Work 
*/ 

	$('.our-work .show-button').click(function(){

		var flag = false;
		$('.our-work .boxes .work').each(function(){
			if($(this).hasClass('hidden')){
				flag = true;
			}
		});
		if(flag == true){
			$('.our-work .show-button').removeClass('show-less').addClass('show-more').text('show less');
			$('.our-work .boxes .work').each(function(){
			if($(this).hasClass('hidden')){
				$(this).fadeIn().removeClass('hidden');
			}
			});
		}
		else{
			$('.our-work .show-button').removeClass('show-more').addClass('show-less').text('show more');
			$('.our-work .boxes .work:nth-last-child(1)').fadeOut().addClass('hidden');
			$('.our-work .boxes .work:nth-last-child(2)').fadeOut().addClass('hidden');
			$('.our-work .boxes .work:nth-last-child(3)').fadeOut().addClass('hidden');
		}
	})

// Testimonials slider

	$('.testimonials .testi-arrow.fa-chevron-right').on('click dblclick',function(){
		$('.testimonials .testi.active').each(function(){

			$('.testimonials .testi-arrow.fa-chevron-left').show()
			if($(this).next().is(':last-of-type')){
				$('.testimonials .testi-arrow.fa-chevron-right').hide();
			}

			if(!$(this).is(':last-of-type')){
				$(this).fadeOut(500,function(){
					$(this).removeClass('active').next().fadeIn(500).addClass('active');
				})	
			}
		});
	});
$('.testimonials .testi-arrow.fa-chevron-left').on('click dblclick',function(){
	$('.testimonials .testi.active').each(function(){

		$('.testimonials .testi-arrow.fa-chevron-right').show();
		if($(this).prev().is(':first-of-type')){
			$('.testimonials .testi-arrow.fa-chevron-left').hide();
		}

		if(!$(this).is(':first-of-type')){
			$(this).fadeOut(500,function(){
				$(this).removeClass('active').prev().fadeIn(500).addClass('active')
			})	
		}
	});	
});


// Trigger Slider

	$('.slider').bxSlider();

// Up Button

$(window).scroll(function(){
	if($(window).scrollTop()  > $(window).height()){
		$('.up').fadeIn()
	}
	else{
		$('.up').fadeOut()
	}

});

$('.up').click(function(){
	$('html ,body').animate({
		scrollTop : 0
	},1000)
});
	






});









