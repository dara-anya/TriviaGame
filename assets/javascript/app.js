// Create Array of QUESTIONS.
var questions =[
    "What is the name of the starship Captain Kirk commands?", 
    "What color is Commander Spock's blood?", 
    "What is Lieutenant Uhura's primary occupation on the USS Enterprise?",
    "In 1987, the phrase '...to boldly go where no man has gone before' was changed to what?",
    "In the 1965 pilot, who was the Captain of the USS Enterprise?"];

// $("#question").html("<h3>" + questions[questionIndex] + "</h3>");

// Create Answer choices
var answers = [
    "USS Constantinople",
    "USS Nostromo",
    "USS Enterprise",
    "USS Discovery",

    "Blue",
    "Red",
    "Green",
    "Purple",

    "Communications officer",
    "Helmsman",
    "Cheif Medical Officer",
    "Science Officer",

    "...to boldly go where no human has gone before",
    "...to boldly go where no platypus has gone before",
    "...to boldly go where no show has gone before",
    "...to boldly go where no one has gone before",

    "Captain Kirk",
    "Captain Pike",
    "Captain Picard",
    "Captain Spock"];

$("#answer-choice-1").html(answers[0]);
$("#answer-choice-2").html(answers[1]);
$("#answer-choice-3").html(answers[2]);
$("#answer-choice-4").html(answers[3]);

// STEP ONE: INITIALIZE TIMER.

// Timer will count down from NUMBER.
var number = 30; 
$("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");

// Initialize a variable that will hold value of NUMBER when the count down begins.
var intervalId;

// Create a variable to keep track of which question is displayed.
var questionIndex = 0;
$("#question").html("<h3>" + questions[questionIndex] + "</h3>");

// Create a RUN function to begin the count down.
function run(){
    
    // The countdown will start at NUMBER and decend by one every 1000ms.
    intervalId = setInterval(decrement, 1000);
    $("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");

    // Check if the correct answer is selected.
    checkCorrectAnswer();
}

// Create a STOP function to stop the count down. The countdown will stop when NUMBER equals 0.
function stop(){

    // Clear the interval so the count down stops.
    clearInterval(intervalId);
}

// Create a function to decrease the value of NUMBER by one.
function decrement(){

    // Decrease NUMBER by one.
    number--;
    $("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");

    // Check to see if NUMBER equals 0. If so, STOP countdown.
    checkOutOfTime();
}

// Create a function to stop countdown when NUMBER equals 0.
function checkOutOfTime(){

    // Contidional: When NUMBER equals 0...
    if (number === 0){

        // ...STOP the countdown.
        stop()

        $("#time-remaining").html("<h2> Out of Time! </h2>");
        
        // Empty the question and ansers
        $("#question").html("");
        $("#answer-choice-1").html("");
        $("#answer-choice-2").html("");
        $("#answer-choice-3").html("");
        $("#answer-choice-4").html("");

        // Call the function to reset the timer
        resetTimer();
    }
}

// Execute the RUN function.
run();


// Create a function to reset the timer
function resetTimer(){
    number = 30;
    $("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");

    // Call the RUN, CHANGEQUESTION and CHANGEANSWER functions on delay
    setTimeout(run, 1000 * 3);
    setTimeout(changeQuestion, 1000 * 3);
    setTimeout(changeAnswers, 1000 * 3);
}



// Create a function to change the question after time runs out.
function changeQuestion(){

    // Incrument QUESTIONINDEX to display the next question.
    questionIndex ++;
    $("#question").html("<h3>" + questions[questionIndex] + "</h3>");
    
}

// Create varialbes to keep track of the indecies of the ANSWERS.
var answerIndex_1 = 0;
var answerIndex_2 = 1;
var answerIndex_3 = 2;
var answerIndex_4 = 3;

// Create a function to change the answer choices when the timer resets.
function changeAnswers(){

    // Increment ANSWERINDEX by 4 to display next set of answer choices.
    answerIndex_1 += 4;
    answerIndex_2 += 4;
    answerIndex_3 += 4;
    answerIndex_4 += 4;

    $("#answer-choice-1").html(answers[answerIndex_1]);
    $("#answer-choice-2").html(answers[answerIndex_2]);
    $("#answer-choice-3").html(answers[answerIndex_3]);
    $("#answer-choice-4").html(answers[answerIndex_4]);

}

// Initialize a variable to track number of correct answers selected.
correct = 0;

// Initializa a variable to track number of incorrect answers selected.
incorrect = 0;

// Create a function to check if the correct or incorrect answer is selected based on which question is displayed.
function checkCorrectAnswer(){
    // Conditional for when on first question.
    if (questionIndex === 0){
        console.log("We're on question 1");

        // When the correct answer is selected
        $("#answer-choice-3").click(function(){
            alert("Correct!");

            // Increment CORRECT.
            correct++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-1").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-2").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-4").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
    }
    // Conditional for second question.
    if (questionIndex === 1){
        console.log("We're on question 2");

        // When the correct answer is selected
        $("#answer-choice-3").click(function(){
            alert("Correct!");

            // Increment CORRECT.
            correct++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-1").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-2").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-4").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
    }

    // Conditional for third question.
    if (questionIndex === 2){
        console.log("We're on question 3");

        // When the correct answer is selected
        $("#answer-choice-1").click(function(){
            alert("Correct!");

            // Increment CORRECT.
            correct++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-2").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-3").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-4").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
    }

    // Conditional for fourth question.
    if (questionIndex === 3){
        console.log("We're on question 4");

        // When the correct answer is selected
        $("#answer-choice-4").click(function(){
            alert("Correct!");

            // Increment CORRECT.
            correct++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-1").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-2").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-3").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
    }

    // Conditional for fifth question.
    if (questionIndex === 4){
        console.log("We're on question 5");

        // When the correct answer is selected
        $("#answer-choice-2").click(function(){
            alert("Correct!");

            // Increment CORRECT.
            correct++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-1").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-3").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
        $("#answer-choice-4").click(function(){
            alert("Incorrect!");

            // Increment CORRECT.
            incorrect++;

            // Call the CHANGEQUESTION, CHANGEANSWER and RESETTIMER functions
            changeQuestion();
            changeAnswers();
            resetTimer();
        })
    }
}
    



