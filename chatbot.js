var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Hello! I am Support Bot, KAYA. I have a number of functions. What do you need from me today?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>how old are you?</h1>';			    	// load next question
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
    document.getElementById("input").value = "";
    question = '<h1>where are you from?</h1>';
    setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

var optionOne;
var optionTwo;
var optionThree;
function optionOne() {
  var optionOne = document.getElementById("optionOne");
  optionOne.remove();
  var optionTwo = document.getElementById("optionTwo");
  optionTwo.remove();
  var optionThree = document.getElementById("optionThree");
  optionThree.remove();
  var options = document.getElementById("options");
  options.remove();
  output.innerHTML = '<h1>hello ' + input + '</h1>';
}

function optionTwo() {
  output.innerHTML = "<h1>Sorry to hear that you're stressed. If you want help destressing, then feel free to look at the self-care section of our website.</h1>";
}

function optionThree() {
  var optionOne = document.getElementById("optionOne");
  optionOne.remove();
  var optionTwo = document.getElementById("optionTwo");
  optionTwo.remove();
  var optionThree = document.getElementById("optionThree");
  optionThree.remove();
  var options = document.getElementById("options");
  options.remove();
  document.getElementById("input").type = "text";
  output.innerHTML = "<h1>Okay! I'm open to talk. What is your name?<h1>";
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
