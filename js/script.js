function scrollToElement(el, offset)
{
	if (offset === undefined)
		offset = 0;

	var duration = 600;
	var element = $(el).offset();
	var pos = element.top + offset;
	$('html, body').animate({scrollTop: pos-50}, duration);
}

(function($) {

	$(window).scroll(function() {
		if($(this).scrollTop() > $('.main, .top').height() + 60)
			$('.header:not(.header--blank)').addClass('header--fixed');
		else
			$('.header:not(.header--blank)').removeClass('header--fixed');
	});

	$('.js-link').click(function(event){
		event.preventDefault();
		scrollToElement($(this).attr('href'),50);
	});

	$('.js-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		// centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	$('.js-slider2').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		// centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.stories-slider').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
        adaptiveHeight: false,
        cssEase: 'linear',
		slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('.language__handler').on('mouseover', function() {
		$('.language__list').addClass('langFadeUp').removeClass('langFadeDown');
	});

	$('.language').on('mouseleave', function() {
		$('.language__list').addClass('langFadeDown').removeClass('langFadeUp');
	});


	$(window).on("load", function() {
		$('.loader').fadeOut();
		$('.loader__inner').delay(350).fadeOut('slow');
		$('body').delay(350).css({'overflow':'visible'});
        wow = new WOW(
            {
                boxClass:     'wow',
                animateClass: 'animated',
                offset:       0,
                mobile:       false,
                live:         true
            }
        );
		new WOW().init();
	});

	$('.form__input:not([type=tel])').focus(function(){
		$(this).parents('.form__row').addClass('form__row--focused');
	});

	$('.form__input:not([type=tel])').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).removeClass('form__input--filled');
			$(this).parents('.form__row').removeClass('form__row--focused');
		} else {
			$(this).addClass('form__input--filled');
		}
	});

	$('textarea.form__input').keyup(function(){
		$(this).height(30);
		$(this).height(this.scrollHeight);
	});

	$('.switch__item').on('click', function(event){
		event.preventDefault();
		var $this = $(this);

		$this.siblings('.switch__item').removeClass('switch__item--active');
		$this.addClass('switch__item--active');

		$this.parents('.tabs').find('.tabs__section')
			.removeClass('tabs__section--visible')
			.eq($this.index()).addClass('tabs__section--visible');
	});

	$('.vacancy__handler').on('click',function(event){
		event.preventDefault();
		$(this).parent().toggleClass('vacancy--active');
		var target=$(this).data('target');
		$('#'+ target).slideToggle();
	});

	$('.steps__item').on('click',function(event){
		event.preventDefault();
		$(this).toggleClass('steps__item--open');
		var target=$(this).data('target');
		$('#'+ target).slideToggle();
	});


	var parallaxElements = $('.parallax'),
		parallaxQuantity = parallaxElements.length;

	$(window).on('scroll', function () {

		window.requestAnimationFrame(function () {

			for (var i = 0; i < parallaxQuantity; i++) {
				var currentElement =  parallaxElements.eq(i);
				var scrolled = $(window).scrollTop();

				currentElement.css({
					'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
				});

			}
		});

	});

    $('.header__burger').on('click',function(event){
        event.preventDefault();
        $('.header').toggleClass('header--nav-open');
    });

    if ($(window).width() <= 959) {
        $('.wow').removeClass('wow');
        $('.offices__dot').on('click',function(event){
            event.preventDefault();
            $('.offices__bubble').removeClass('offices__bubble--vis');
            $(this).children().addClass('offices__bubble--vis');
        });
        $('.offices__close').on('click',function(event){
            event.preventDefault();
            event.stopPropagation();
            $('.offices__bubble').removeClass('offices__bubble--vis');
        });
    }

    $('.formats__switch-item--mobile').on('click',function(event){
        event.preventDefault();
        $(this).closest('.formats').addClass('formats--mb').removeClass('formats--pc');
        $(this).addClass('formats__switch-item--active');
        $(this).parent().find('.formats__switch-item--desktop').removeClass('formats__switch-item--active');
    });

    $('.formats__switch-item--desktop').on('click',function(event){
        event.preventDefault();
        $(this).closest('.formats').addClass('formats--pc').removeClass('formats--mb');
        $(this).addClass('formats__switch-item--active');
        $(this).parent().find('.formats__switch-item--mobile').removeClass('formats__switch-item--active');
    });

    $('.career__more').on('click',function(event){
        event.preventDefault();
        $(this).parent().toggleClass('career__block--active');
    });

})(jQuery);

var touch = 'ontouchstart' in document.documentElement
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0);

if (touch) {
    try { 
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

