jQuery(document).ready(function($){

	var granimInstance = new Granim({
		element: '#canvas-basic',
		direction: 'left-right',
		isPausedWhenNotInView: true,
		states : {
			"default-state": {
				gradients: [
					['#ff9966', '#ff5e62'],
					['#00F260', '#0575E6'],
					['#e1eec3', '#f05053']
				]
			}
		}
	});

	$('#subscribe-form').submit(function(e){
		e.preventDefault();
		var data = {
			'action': 'mail_before_submit',
			'security': rsm_ajax.security,
			'name': $(this).find('input[name="name"]').val(),
			'email': $(this).find('input[name="email"]').val(),
			'message': $(this).find('textarea[name="message"]').val()
		};
		$.ajax({
			type: "POST",
			url: rsm_ajax.ajaxurl,
			data: data,
			success: function(){}
		});

		$(this).find('.input-submit').text('THANK YOU').attr('disabled', 'disabled');;

		return false;
	});

	$('#contact_form').submit(function(e){
		e.preventDefault();
		var data = {
			'action': 'mail_before_submit',
			'security': rsm_ajax.security,
			'name': $(this).find('input[name="name"]').val(),
			'email': $(this).find('input[name="email"]').val(),
			'message': $(this).find('textarea[name="message"]').val()
		};
		$.ajax({
			type: "POST",
			url: rsm_ajax.ajaxurl,
			data: data,
			success: function(){}
		});

		$(this).find('.input-submit').text('Thank You').attr('disabled', 'disabled');

		return false;
	});
});


