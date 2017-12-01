$(document).ready(function() 
{
	var randomNum = 0;
	var totalScore = 0;
	var wins = 0;
	var loses = 0;

	function renderCrystals(){
	// Load Images template and assign a random value
  		$("#crystals").empty();
		for (var r=0; r<4; r++){

			var randomNumber=Math.floor(Math.random()*12)+1;
			var id = `cimg${r}`
			var imageCrystal =`<img id="${id}" class="crystalimg" src="assets/images/img${r}.png" datavalue="${randomNumber}"></img>`
			$("#crystals").append(imageCrystal);
			var crystalNumber = {id:id,randomNumber: randomNumber};
        	}	
	}

//Initialization of the game
	function initgame(){
		totalScore = 0;
		$("#message").removeClass();
        $("#message").empty();
        $('#message[class=""]').removeAttr('class');
		$("#points").text(totalScore);

//Random Generated Number for the start of the game
		randomNum = Math.floor(Math.random()*102)+19;
		$("#target").text(randomNum);
		renderCrystals();
  		}

 //Win-Lose Message on Screen
  	function message(txt){
  		 var message = $("#message").addClass("outcome");
        	message.append(txt);
  	}

  	initgame();
  
  	$("#crystals").on("click", ".crystalimg", function()
	{
		var crystalNum = ($(this).attr("datavalue"));
		crystalNum = parseInt(crystalNum);
		totalScore += crystalNum;
		$("#points").text(totalScore);


	//Check for win-lose
		if (totalScore === randomNum)
		{
			++wins;
            message("🤗 YOU WON .... ");
            $("#wins").text("Wins:  "+ wins);
            window.setTimeout(initgame, 2000);
		}
		else if (totalScore > randomNum)
			{
				++loses;      		
        		message("😱 YOU LOST .......");
        		$("#loses").text("LOSES:  " + loses);
				window.setTimeout(initgame, 2000);
			}

	});

	//Instructions Toggle Button

	$('#instructions').click( function(){
		
		$('.instr').toggle('slow');
		
		
		});

});

