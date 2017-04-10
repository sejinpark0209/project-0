$(document).on("ready", function(){



		var possible1 = "asdzxc";
		var text = "";
		text = possible1.charAt(Math.floor(Math.random() * possible1.length));

	

		var userAnswer = "";
		var ranQnum = Math.floor(Math.random() * 6) + 0;
		console.log(ranQnum);  


  		function blink(event){
			$(event).fadeOut('slow', function(){
    		$(this).fadeIn('slow', function(){
       		 blink(this);
    			});
			});
		}

		blink('.tostart');

		// add auto killer movement
			



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
			if(redCircPos.left === 1000) {
				//red wins!
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
			} else if(e.keyCode == 77) {
				$('#bluecirc').animate({
                    right: '-=300'
				}, 0);
			}
			text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));
			$('.abcBoard2').text(text2);
				console.log(text2)
			
			var blueCircPos = $('#bluecirc').position();	
			console.log(blueCircPos);
			if(blueCircPos.left === 1000) {
				// blue wins!

			}
		});	
	
});










