$(document).on("ready", function(){

	

		//create function to move red circle

	
  //   var possible = "abcdefghijklmnopqrstuvwxyz";
		// var text = "";
		// 	for( var i=0; i < 5; i++ ) {
  //       		text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   		}
  //   		console.log(text);
  // keycode. 65 - 90



		var possible1 = "asdzxc";
		var text = "";
		text = possible1.charAt(Math.floor(Math.random() * possible1.length));

		$(document).on('keydown', function(e){
    	
    		var spaceStart = $('.tostart');

  			if(e.keyCode == 32) {
  				spaceStart.remove();
  			}
    		
    		var alphaKeyCode = text.charCodeAt(0)-32;
    		console.log(alphaKeyCode);
			if(e.keyCode == alphaKeyCode) {
				$('#redcirc').animate({
                   	right: '-=100'
				}, 0);
			} 
			text = possible1.charAt(Math.floor(Math.random() * possible1.length));
			$('.abcBoard1').text(text);
				console.log(text)

			var redCircPos = $('#redcirc').position();	
			console.log(redCircPos);
			if(redCircPos.left === 400) {
				alert("player1 won");
				//reset now
			}

		});

		var possible2 = "poilkj"
		var text2 = "";
		text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));

		$(document).on('keydown', function(e){
			var alphaKeyCode2 = text2.charCodeAt(0)-32;
			if(e.keyCode == alphaKeyCode2) {
				$('#bluecirc').animate({
                    right: '-=100'
				}, 0);
			} 
			text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));
			$('.abcBoard2').text(text2);
				console.log(text2)
			
			var blueCircPos = $('#bluecirc').position();	
			console.log(blueCircPos);
			if(blueCircPos.left === 400) {
				alert("player2 won");

			}
		});

		// var backGround = $('.background');
		// if($('#redcirc').position() === backGround.offset().right) {
		// 	console.log("player 1 won");
		// }



		
	
});










