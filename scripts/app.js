$(document).on("ready", function(){

	

		//create function to move red circle

	
  //   var possible = "abcdefghijklmnopqrstuvwxyz";
		// var text = "";
		// 	for( var i=0; i < 5; i++ ) {
  //       		text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   		}
  //   		console.log(text);
  // keycode. 65 - 90
 var key = 'x'.charCodeAt(0)-32;
 console.log(key);

		$(document).on('keydown', function(e){
    		var possible = "abcdefghijklmnopqrstuvwxyz";
			var text = "";
			for(var i = 0; i < 1; i++ ) {
        		text += possible.charAt(Math.floor(Math.random() * possible.length));
    		}
    		console.log(text);
    		var splitText = [];
    		splitText = text.split("");


    		for(var i = 0; i < splitText.length; i++) {
    		
    			$('.abcBoard1').text(splitText[i]);
    			var alphaKeyCode = splitText[i].charCodeAt(0)-32;
    			console.log(alphaKeyCode);
				if(e.keyCode == alphaKeyCode) {
					$('#redcirc').animate({
                   		right: '-=10'
					}, 0);
				}
			}

		});

		$(document).on('keydown', function(e){
			if(e.keyCode == 88) {
				$('#bluecirc').animate({
                    right: '-=10'
				}, 0);
			}
			
		});



		
	
});










