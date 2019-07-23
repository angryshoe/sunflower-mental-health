var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Hello! I am Support Bot, KAYA. I have a number of functions. What do you need from me today?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

var optionOne;
var optionTwo;
var optionThree;

function optionOne() {
  output.innerHTML = "<h1>Please get immediate help if you are in danger. Our resources tab has plenty of hotlines and pages for help if you need it. The national suicide crisis hotline for the U.S. is 1-800-273-8255.</h1>";v
}

function optionTwo() {
  output.innerHTML = "<h1>Sorry to hear that you're stressed. If you want help destressing, then feel free to look at the self-care section of our website.</h1>";
}

function optionThree() {
  document.getElementById("branchOne").style.visibility = "visible";
  document.getElementById("branchTwo").style.visibility = "visible";
  var options = document.getElementById("options");
  options.remove();
  output.innerHTML = "<h1>Would you like to speak to a real person? Or would I be okay?<h1>";
}

function branchOne() {
  output.innerHTML = "<h1>Understood! A website that you can access that will connect you with someone online for help is <a href = 'https://www.7cups.com/'>7cups</a>.<h1>";
}

function branchTwo() {
  var branch = document.getElementById("branch");
  branch.remove();
  document.getElementById("input").type = "text";
  output.innerHTML = "<h1>Okay! I'm open to talk. To reintroduce myself, my name is KAYA and I am a support chatbot. What is your name?<h1>";
};

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Nice to meet you, ' + input + '!</h1>';// output response
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

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
