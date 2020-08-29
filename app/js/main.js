//const { has } = require("browser-sync");

$(() => {
	$('.mavic-info__slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		nextArrow: '<button type="button" class="slider-arrows arrows-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
		prevArrow: '<button type="button" class="slider-arrows arrows-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
	});

	$('.quastion__item-title').on('click', function () {

		if ($(this).hasClass('quastion-active')) {
			$(this).parent().children('.quastion__item-text').slideUp();
			$('.quastion__item-title').removeClass('quastion-active');
		} else {
			if ($('.quastion__item-title').hasClass('quastion-active')) {
				$('.quastion__item-title.quastion-active').parent().children('.quastion__item-text').slideUp({
					duration: 400,
					queue: false,
				});
				$(this).parent().children('.quastion__item-text').slideDown({
					duration: 392,
					queue: true,
				});
				$('.quastion__item-title').removeClass('quastion-active');
			} else {
				$(this).parent().children('.quastion__item-text').slideDown();
			}

			$(this).addClass('quastion-active');
		}
	});
	$('.full-pages').fullpage({
		continuousVertical: true,
		autoScrolling: true,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'lastPage'],
		menu: '#myMenu',
		navigation: true,
		navigationTooltips: ['Главная', 'О Дроне', 'Преимущества', 'Характеристики', 'Вопросы', 'Контакты'],
		parallax: true
	});
	//$.fn.fullpage.setAllowScrolling(false);
});