$(document).on("ready", function(){

	//create function to move red circle


		$(document).on('keydown', function(e){
			if(e.keyCode == 90) {
				$('#redcirc').animate({
                    right: '-=10'
				}, 0);
			}


		})

		$(document).on('keydown', function(e){
			if(e.keyCode == 88) {
				$('#bluecirc').animate({
                    right: '-=10'
				}, 0);
			}
			
		})



		
	
});










