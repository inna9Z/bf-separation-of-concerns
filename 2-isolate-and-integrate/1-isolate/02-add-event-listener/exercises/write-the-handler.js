'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
    // ask a user to confirm if they are honest
    const userQuestion = prompt('are you honest?');
    if (userQuestion === null) {
        // If the user clicks "Cancel" or closes the prompt
        console.log('No answer received.');
    } else if (userQuestion.toLowerCase() === 'yes') {
        // If the user answers "yes" (case-insensitive)
        console.log('You are honest!');
    } else if (userQuestion.toLowerCase() === 'no') {
        // If the user answers "no" (case-insensitive)
        console.log('You are not honest :(');
    } else {
        // If the user provides an answer that is not "yes" or "no"
        console.log('Invalid answer.');
    }
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
