
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();
    
    var newGameBtn = $('.new');
    
    newGameBtn.on('click', function() {
        location.reload();
        newGame(); 
    });

    function newGame() {
        
        var correctGuess = Math.floor(Math.random() * 100) + 1;
        console.log('Secret number: ' + correctGuess);
        var noOfClicks = 0;
        
        function generateFeedback() {
            var userGuess = +$('#userGuess').val();
            var subtractions = userGuess - correctGuess;
            var difference = Math.abs(subtractions);
            
            if (difference >= 1 && difference <= 9) {
                $('#feedback').html('Very Hot');
            } else if (difference >= 10 && difference <= 19) {
                $('#feedback').html('Hot');
            } else if (difference >= 20 && difference <= 29) {
                $('#feedback').html('Warm');
            } else if (difference >= 30 && difference <= 49) {
                $('#feedback').html('Cold');
            } else if (difference >= 50 && difference <= 99) {
                $('#feedback').html('Ice Cold');
            } else if (difference == 0) {
                $('#feedback').html('Perfect');
            }
        }
            
        
        $('.button').on('click', function(e) {
            
            e.preventDefault();
            
            var userGuess = +$('#userGuess').val();
            
            generateFeedback();
            
            $('#guessList').append('<li>' + userGuess + '</li>');
            
            noOfClicks++;
            $('#count').html(noOfClicks);
           	
            $(this).closest('form').find("input[type=text]").val("");
            
        });
    }
     
});