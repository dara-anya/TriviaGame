// STEP ONE: INITIALIZE TIMER.

// Timer will count down from NUMBER.
var number = 3; 
$("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");

// Initialize a variable that will hold value of NUMBER when the count down begins.
var intervalId;

// Create a RUN function to begin the count down.
function run(){

    // The countdown will start at NUMBER and decend by one every 1000ms.
    intervalId = setInterval(decrement, 1000);
    $("#time-remaining").html("<h2> Time Remaining: " + number + "</h2>");
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

// Initialize a varialbe w/ a boolean value to track when NUMBER equals 0 (when the user is out of time).
// ISOUTOFTIME will be true when NUMBER equals 0.
// var isOutOfTime = false;

// Create a function to stop countdown when NUMBER equals 0.
function checkOutOfTime(){

    // Contidional: When NUMBER equals 0...
    if (number === 0){

        // ...STOP the countdown.
        stop()

        $("#time-remaining").html("<h2> Out of Time! </h2>");
        // isOutOfTime = true;

        // changeQuestion();

        // // Reset NUMBER
        // number = 3;

        // // Restart countdown.
        // setTimeout(run, 1000 * 3);

        resetTimer();
    }
}

// Execute the RUN function.
run();

// var temp = checkOutOfTime();
// if (isOutOfTime = true){
//     alert("Out of Time!");
// }

// Create Question
var questions =[
    "What is the name of the starship Captain Kirk commands?", 
    "What color is Commander Spock's blood?", 
    "What is Lieutenant Uhura's primary occupation on the USS Enterprise?",
    "In 1987, the phrase '...to boldly go where no man has gone before' was changed to what?",
    "In the 1965 pilot, who was the Captain of the USS Enterprise?"]

$("#question").html("<h3>" + questions[0] + "</h3>");

function resetTimer(){
    number = 3;
    setTimeout(run, 1000 * 3);
    changeQuestion();
}
function changeQuestion(){
    for (i=0; i< questions.length; i++){
        $("#question").html("<h3>" + questions[i] + "</h3>");
    }
}

// Create Answer choices
var answers = [
    "USS Constantinople",
    "USS Nostromo",
    "USS Enterprise",
    "USS Discovery",

    "Blue",
    "Purple",
    "Red",
    "Green",

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



