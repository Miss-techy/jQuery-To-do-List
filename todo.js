$(document).ready(function() {  //enter a new todo
	$('input').keypress(function(event){
		if(event.which == 13){
			var todoText = $(this).val()
		$(this).val('');
		$('ul').append('<li>' + todoText + '<span><ion-icon name="close-circle-outline"></ion-icon></span>')
	}

	});
			//remove todo
	$('ul').on('click', "span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		event.stopPropagation()
	});

	$('ul').on('click', 'li', function(){
		$(this).toggleClass('done')
	})
})