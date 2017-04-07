$(document).on("ready", function(){

	

		//create function to move red circle

	
  //   var possible = "abcdefghijklmnopqrstuvwxyz";
		// var text = "";
		// 	for( var i=0; i < 5; i++ ) {
  //       		text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   		}
  //   		console.log(text);
  // keycode. 65 - 90
		var possible = "abcdefghijklmnopqrstuvwxyz";



		var text2 = "";
		text2 = possible.charAt(Math.floor(Math.random() * possible.length));

		$(document).on('keydown', function(e){
			var alphaKeyCode2 = text2.charCodeAt(0)-32;
			if(e.keyCode == alphaKeyCode2) {
				$('#bluecirc').animate({
                    right: '-=10'
				}, 0);
			}
			text2 = possible.charAt(Math.floor(Math.random() * possible.length));
			$('.abcBoard2').text(text2);
			console.log(text2)
			
		});



		
	
});










