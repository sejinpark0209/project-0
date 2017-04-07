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

		var robotQsn = [
			{
				question: "3 + 98",
				expectedAnswer: "101"
			},
			{
				question: "12 * 12 ?",
				expectedAnswer: "144"
			},
			{
				question: "6 * 9 ?",
				expectedAnswer: "54"
			},
			{
				question: "83214 * 39102 ?",
				expectedAnswer: "3253833828"
			},
			{
				question: "4563452 % 12 ?",
				expectedAnswer: "8"
			},
			{
				question: "2395123 * 12?",
				expectedAnswer: "28741476"
			}
		]

		


		var userAnswer = "";
		var ranQnum = Math.floor(Math.random() * 6) + 0;
		console.log(ranQnum);  



		

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
				if(ranQnum > 2) {
					userAnswer = prompt(robotQsn[ranQnum].question);
					if(userAnswer !== robotQsn[ranQnum].question) {
						alert("Are you robot? you lose!")
					} else {
						alert("You are Human! you win!")
					}
				} else if (ranQnum < 3) {
					userAnswer = prompt(robotQsn[ranQnum].question);
					if(userAnswer !== robotQsn[ranQnum].question) {
						alert("You are Human! player 1 win!")
					} else {
						alert("Are you robot? player 2 win!")
					}
				}
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
			if(blueCircPos.left === 1000) {
				if(ranQnum > 2) {
					userAnswer = prompt(robotQsn[ranQnum].question);
					if(userAnswer !== robotQsn[ranQnum].question) {
						alert("Are you robot? you lose!")
					} else {
						alert("You are Human! you win!")
					}
				} else if (ranQnum < 3) {
					userAnswer = prompt(robotQsn[ranQnum].question);
					if(userAnswer !== robotQsn[ranQnum].question) {
						alert("You are Human! you win!")
					} else {
						alert("Are you robot? you lose!")
					}
				}

			}
		});	
	
});










