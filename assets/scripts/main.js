jQuery(document).foundation(); 
jQuery(document).ready(function($) {

	var u,r,l;
	u = window.location.protocol + '//';
	r = window.location.host;
	l = window.location.pathname;

	// var waypoint = new Waypoint({
	// 	element: document.getElementById('diferenciais'),
	// 	handler: function() {
	// 		alert('Basic waypoint triggered');
	// 		console.log('Basic waypoint triggered');
	// 	}
	// });
	
	
	$('.abrir-menu').click(function(event) {
		event.preventDefault();
		$('body').css('overflow','hidden');
		$('#nav').css('display', 'flex');
		$('#nav').animate({opacity: 1}, 400);

		$(this).animate({
			opacity: 0,
		},
		400, function() {
			$(this).hide();
			$('.fechar-menu').show();
			$('.fechar-menu').animate({opacity: 1}, 400);
		});
	});

	$('.fechar-menu').click(function(event) {
		event.preventDefault();
		$('body').css('overflow','auto');
		$('#nav').animate({opacity: 0}, 400, function(){
			$('#nav').hide();
		});

		$(this).animate({
			opacity: 0,
		},
		400, function() {
			$(this).hide();
			$('.abrir-menu').show();
			$('.abrir-menu').animate({opacity: 1}, 400);
		});
	});


	// $(".telefone").mask("(99) 9999-9999?9");


	// $(".form").submit(function(event) {
	// 	event.preventDefault();
	// 	var fields = $(this).serializeArray();
	// 	RdIntegration.post(fields);
	// 	swal({
	// 		title: "Ops!",
	// 		text: "Ocorreu um erro ao fazer o seu cadastro. Por favor tente novamente ou entre em contato pelo e-mail contato@clint.digital",
	// 		type: "error"
	// 	});	
	// 	$(this)[0].reset();

	// });
	swal({
		title: "Ops!",
		text: "Ocorreu um erro ao fazer o seu cadastro. Por favor tente novamente ou entre em contato pelo e-mail contato@clint.digital",
		type: "error"
	});	
	



});

function goTo(selector){
	jQuery('html, body').animate({
		scrollTop: jQuery(selector).offset().top
	}, 1000);
}
