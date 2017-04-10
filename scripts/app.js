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


		$(document).on('keydown', function(e){
    	
    		
			var spaceStart = $('.tostart');

			var interval = setInterval(function(){ 
				$("#killer").animate({
					right: '-=40'
				}, 200);
			}, 3000);
    


  			if(e.keyCode == 32) {
  				spaceStart.remove();
  			}
    		
    		var alphaKeyCode = text.charCodeAt(0)-32;
    		console.log(alphaKeyCode);
			if(e.keyCode == alphaKeyCode) {
				$('#mario').animate({
                   	right: '-=100'
				}, 200);
			} 

			text = possible1.charAt(Math.floor(Math.random() * possible1.length));
			$('.abcBoard1').text(text);
				console.log(text)

			var killerPos = $('#killer').position();
			var marioPos = $('#mario').position();	
			console.log(killerPos);
			console.log(marioPos);
			if(marioPos.left > 900) {
				$('.title').text(function () {
					$('.title').text("Mario won!");
					$('.title').css("font-size", "75px");
				})
				$('#bb8').remove()
				$('#killer').remove()
				$('.abcBoard1').remove()
				$('.abcBoard2').remove()
			} else if(marioPos.left < killerPos.left) {
				$('#mario').remove()
				$('.abcBoard1').remove()
				$('.abcBoard2').remove()
				$('.title').text(function () {
					$('.title').text("Mario lose!");
					$('.title').css("font-size", "75px");
				})
			}


		});


		var possible2 = "poilkj"
		var text2 = "";
		text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));

		$(document).on('keydown', function(e){
			var alphaKeyCode2 = text2.charCodeAt(0)-32;
			if(e.keyCode == alphaKeyCode2) {
				$('#bb8').animate({
                    right: '-=100'
				}, 200);
			} else if(e.keyCode == 77) {
				$('#bb8').animate({
                    right: '-=300'
				}, 200);
			}
			text2 = possible2.charAt(Math.floor(Math.random() * possible2.length));
			$('.abcBoard2').text(text2);
				console.log(text2)
			
			var killerPos = $('#killer').position();
			var bb8Pos = $('#bb8').position();	
			console.log(bb8Pos);
			if(bb8Pos.left > 900) {
				$('.title').text(function () {
					$('.title').text("BB8 won!");
					$('.title').css("font-size", "75px");
				})
				$('.abcBoard1').remove()
				$('.abcBoard2').remove()
				$('#mario').remove()
				$('#killer').remove()
			} else if(bb8Pos.left < killerPos.left) {
				$('#bb8').remove()
				$('.abcBoard1').remove()
				$('.abcBoard2').remove()
				$('.title').text(function () {
					$('.title').text("BB8 lose!");
					$('.title').css("font-size", "75px");
				})
			}
		});	
	
});










