

		$(document).on('click', '#start', function(){
		console.log("Start");
		game.startGame();

});


		$(document).on('click', '#start-over', function(){
		game.reset();
});



var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
	question: "when wont player of the year in 2017?",
	answers:["ronaldo", "messi", "neymar", "suarez"],
	correctAnswer: "messi",
}, {

	question: "who is mancester uniteds striker for the 2017-2018 season?",
	answers: ["Aguero", "Kane", "Morata", "Lukaku"],
	correctAnswer: "Lukaku",
}, {

	question: "were is the world cup hosted in 2018?",
	answers: ["Brazil", "Russia", "Dubai", "Austria"],
	correctAnswer: "Russia",
}, {

	question: "What is pogbas jersey number?",
	answers: ["1", "4", "6", "7"],
	correctAnswer: "6",
}, {

	question: "Who is the highest rated fifa 18 card?",
	answers: ["Messi", "Suarez", "Dembele","Ronaldo"],
	correctAnswer: "Ronaldo",
}];


var game = {
	correct:0,
	incorrect:0,
	counter:10,

	countdown: function(){
		game.counter--;
		$('#counter-number').html(game.counter);
		if (game.counter === 0){
		console.log('Times Up');
		game.timeUP();
	}
},
	startGame:function(){
		timer=setInterval(game.countdown, 1000);
		$('#start').remove();
		for (var i = 0; i < questions.length; i++) {
		$("#panel").append('<h2>' + questions[i].question + '</h2>');
			for (var j = 0; j < questions[i].answers.length; j++) {
		$("#panel").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

		 }
		}
},
	timeUP:function() {
		clearInterval (timer);
		alert('Times Up!');

},
	reset:function() {
	location.reload();

},

	done: function(){
		$.each($("imput[name='answer0']:checked"), function (){
			
			if($(this).val() == questions[0].correctAnswer){
				game.correct++;
			}else {
				game.incorrect++;
			}
    });
        $.each($("input[name='answer1']:checked"), function () {
   
        if($(this).val() == questions[1].correctAnswer){
            game.correct++;
            } else {
        	game.incorrect++;
        }
    });
        $.each($("input[name='answer2']:checked"), function () {
    
        if($(this).val() == questions[2].correctAnswer) {
            game.correct++;
        } else {
        	game.incorrect++;
        }
    });
        $.each($("input[name='answer3']:checked"), function () {
        console.log("inside")
        if($(this).val() == questions[3].correctAnswer) {
            game.correct++;
        } else {
        	game.incorrect++;
        }
    });
        $.each($("input[name='answer4']:checked"), function () {
      
        if($(this).val() == questions[4].correctAnswer) {
            game.correct++;
        } else {
        	game.incorrect++;
        }
    });
        $.each($("input[name='answer5']:checked"), function () {
        if($(this).val() == questions[5].correctAnswer) {
            game.correct++;
        } else {
        	game.incorrect++;
        }
    });
    game.result();
 },
 		result:function(){
         clearInterval(timer);
 		$("#correct").append("Correct answers: " + game.correct + "<br/>");
 		$("#incorrect").append("Incorrect answers: " +game.incorrect);

 		}
 	}