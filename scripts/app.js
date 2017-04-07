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
    
    		
    		var alphaKeyCode = text.charCodeAt(0)-32;
    		console.log(alphaKeyCode);
			if(e.keyCode == alphaKeyCode) {
				$('#redcirc').animate({
                   	right: '-=10'
				}, 0);
				
			}
			text = possible1.charAt(Math.floor(Math.random() * possible1.length));
			$('.abcBoard1').text(text);
				console.log(text)
			

		});

		var possible2 = "poilkj"
		var text2 = "";
		text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));

		$(document).on('keydown', function(e){
			var alphaKeyCode2 = text2.charCodeAt(0)-32;
			if(e.keyCode == alphaKeyCode2) {
				$('#bluecirc').animate({
                    right: '-=10'
				}, 0);
			}
			text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));
			$('.abcBoard2').text(text2);
			console.log(text2)
			
		});



		
	
});










