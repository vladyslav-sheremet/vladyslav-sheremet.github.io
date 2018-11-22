$(function(){
	$('.slick_slider').slick({
		speed: 500,
		dots: true,
		prevArrow: false,
		nextArrow: false
	});

	$("#menu, #btn_top").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});
	$("#btn_top").hide();
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('#btn_top').fadeIn();
		} else {
			$('#btn_top').fadeOut();
		}
	});
});