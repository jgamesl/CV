$(document).ready(function(){


		$('#egreso').hover(function(){
			$('#logo').slideDown('slow');
		});

		$('.pull-right').click(function(){
			$(this).html('JGAMEZJ@GMAIL.COM').css( "color", "blue" )
			.css("font-size","30px");;
		});

		$('#mifoto').hover(function(){
			$(this).css("height","+=50px");
			$(this).css("width","+=50px");
		},
		function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
		});
});