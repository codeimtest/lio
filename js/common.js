	// FAQ
	$('.faq_widget > div').each(function() {
		$(this).find('.regular_text').hide();
	});
	
	$(document).ready(function() {
		$(".faq_widget > div").each(function(index) {
			var $this = $(this);
			var $activeBlock = $this.find(".regular_text");
	
		
		});
	});
	// Get all elements with the class 'h-100'
const elements = document.querySelectorAll('.h-a');

// Find the maximum height
let maxHeight = 0;
elements.forEach(element => {
    const elementHeight = element.clientHeight;
    if (elementHeight > maxHeight) {
        maxHeight = elementHeight;
    }
});

// Set all elements to the maximum height
elements.forEach(element => {
    element.style.height = `${maxHeight}px`;
});

$(".faq_widget > div").click(function() {
	var $this = $(this);
	var $activeBlock = $this.find(".regular_text");
	
	if ($this.hasClass("active")) {
			$activeBlock.slideUp();
			$this.removeClass("active");
	} else {
			$this.siblings(".faq_widget > div").find(".regular_text").slideUp(function() {
					$(this).prev().removeClass("active");
			});
			$activeBlock.slideDown();
			$('.faq_widget > div').removeClass('active');
			$this.addClass('active');
	}
});

// Header toggle
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var header = $('header');

	if (scroll >= 50) {
		header.addClass('active');
	} else {
		header.removeClass('active');
	}
});
// header menu toggle
$('.menu_button').click(function(){
	$(this).find('.menu_button_toggle').toggleClass('active')
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
})
//reviews
var swiper2 = new Swiper(".reviews_carousel", {
	slidesPerView: 1,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 12,
	navigation: {
		nextEl: ".sl_nav.next_btn",
		prevEl: ".sl_nav.prev_btn",
	},
});
	Fancybox.bind('[data-fancybox="gallery"]', {
		// Your custom options
	});