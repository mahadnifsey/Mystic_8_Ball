function generate_random(max_number) {
    // Generates a random number from 0 to max-number.
    return Math.round(Math.random()*max_number);
}



// Animation for 8 Ball shake.
function shake() {
    var box = document.getElementById("magic8ball", "answer");
    box.style.animationName = null;
    box.offsetHeight; /* trigger reflow */
    box.style.animationName = "shake";
  };


// Select the elements on the page to interact with!
let button =document.querySelector("button");
let asnwer = document.querySelector("#answer");

// Add a click event to the button.
button.addEventListener("click", function() {
    // Your prcedure goes here.

    // Generate a random number.
    let randomNumber = generate_random(3);

    let answerText = "";

    let eightBall = "";
    switch (randomNumber) {
        case 1:
            answerText='It is certain';
        break;
        case 2:
            answerText='It is decidedly so';
        break;
        case 3:
            answerText='Reply hazy try again';
        break;
        case 4:
            answerText='Cannot predict now';
        break;
        case 5:
            answerText='Do not count on it';
        break;
        case 6:
            answerText='My sources say no';
        break;
        case 7:
            answerText='Outlook not so good';
        break;
        case 8:
            answerText='Signs point to yes';
        break;
        case 0:
            answerText='I do not know.';
        break;
    }

    // Display the answer in the answer paragraph. 
    answer.innerHTML = answerText;

});
