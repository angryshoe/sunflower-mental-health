var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Hello! I am Support Bot, KAYA. I have a number of functions. What do you need from me today?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

var optionOne;
var optionTwo;
var optionThree;
var itBeLikeThat;
var response;
var responsesOne = ["<h1>It's never a bad idea to focus on the positive<h1>", "<h1>I'm so glad you're here to talk to m<h1>", "<h1>yeet<h1>", "<h1>Aw, really?<h1>", "<h1>Thanks for opening up!<h1>", "<h1>I can see where you're coming from<h1>"];
var responsesTwo = ["<h1>Your feelings are valid!<h1>", "<h1>That's pretty interesting!<h1>", "<h1>I'll always be here.<h1>","<h1>Thanks for saying that!<h1>", "<h1>I hear you<h1>", "<h1>I'll have to think about that<h1>"];
var responsesThree = ["<h1>Take care of yourself<h1>", "<h1>Wow.<h1>", "<h1>How are you feeling?<h1>", "<h1>You aren't alone.<h1>", "<h1>I hear you<h1>", "<h1>Maybe so<h1>", "<h1>I appreciate you talking to me<h1>"];
var lifeCheck;
var lifeCheckTwo;
var inputTwo;

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
    console.log(questionNum);
    var inputTwo = input.toLowerCase();
    var lifeCheck = inputTwo.search("kill");
    var lifeCheckTwo = inputTwo.search("suicide");

    if (questionNum == 0) {
    output.innerHTML = '<h1>Nice to meet you, ' + input + '!</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>How was your day?</h1>';			    	// load next question
    thinking();
    setTimeout(timedQuestion, 2250);									// output next question after 2sec delay
    }

    if (lifeCheck != -1 || lifeCheckTwo != -1){
      output.innerHTML = "<h1>Please think before doing anything rash. If you or someone else is in danger, I highly recommend seeking help.<h1>";
      question = '<h1>Is everything okay?<h1>';
      questionNum = 1;
      thinking();
      setTimeout(timedQuestion, 2250);
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Well, everyday is a new day! Always try to remember the good.</h1>';
    document.getElementById("input").value = "";
    question = '<h1>Are you doing okay?</h1>';
    thinking();
    setTimeout(timedQuestion, 2250);
    }

    else if (questionNum == 2) {
      var check = inputTwo.search("no");
      var checkTwo = inputTwo.search("yes");
        if (check != -1){
          output.innerHTML = "<h1>Oh no.<h1>";
          question = '<h1>Do you want to talk about it?<h1>';
          thinking();
          setTimeout(timedQuestion,2250);
        }
        if (checkTwo != -1){
            output.innerHTML = "<h1>Glad to hear that!<h1>";
            var randomAns = responsesOne[Math.floor(Math.random()*responsesOne.length)];
            question = randomAns;
            thinking();
            setTimeout(timedQuestion, 2250);
          }
        else if (check != -1 && checkTwo != -1){
          output.innerHTML = "<h1>Hm?<h1>";
          var randomAns = responsesTwo[Math.floor(Math.random()*responsesOne.length)];
          question = randomAns;
          thinking();
          setTimeout(timedQuestion, 2250);
          }
      }
      else if (questionNum == 3) {
        console.log("Q3");
        var okCheck = inputTwo.search("yes");
        if (okCheck != -1) {
          question = "<h1>I'm all ears!<h1>";
          thinking();
          setTimeout(timedQuestion, 2250)
        }
        else {
          var randomAns = responsesTwo[Math.floor(Math.random()*responsesOne.length)];
          question = randomAns;
          thinking();
          setTimeout(timedQuestion,2250);
        }
      }
      else if ((questionNum >= 4) && (questionNum % 3 == 0)) {
        var randomAns = responsesOne[Math.floor(Math.random()*responsesOne.length)];
        question = randomAns;
        thinking();
        setTimeout(timedQuestion,2250);
      }
      else if ((questionNum >= 4) && (questionNum % 3 == 1)) {
        var randomAns = responsesTwo[Math.floor(Math.random()*responsesTwo.length)];
        question = randomAns;
        thinking();
        setTimeout(timedQuestion,2250);
      }
      else if ((questionNum >= 4) && (questionNum % 3 == 2)) {
        var randomAns = responsesThree[Math.floor(Math.random()*responsesThree.length)];
        question = randomAns;
        thinking();
        setTimeout(timedQuestion, 2250);
      }
     }

function timedQuestion() {
    output.innerHTML = question;
    document.getElementById("input").type = "text";
    document.getElementById("thoughts").style.display = "none";
}

function thinking(){
  document.getElementById("input").type = "hidden";
  document.getElementById("thoughts").style.display = "block";
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum+=1;																		// increase questionNum count by 1
  }
});
