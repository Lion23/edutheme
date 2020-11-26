//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function () {
	var navbar = $('.navbar');

	var logo_img = $('.navbar-brand img');


	$(window).scroll(function () {
		if ($(window).scrollTop() <= 40) {
			navbar.removeClass('navbar-scroll');
			logo_img.removeClass('scroll-down-img');

		} else {
			navbar.addClass('navbar-scroll');
			logo_img.addClass('scroll-down-img');
		}
	});
});
