const backgroundColorElement = document.getElementById('bg-color');

const fontTypeElement = document.getElementById('font-type');
const fontColorElement = document.getElementById('font-color');
const fontSizeElement = document.getElementById('font-size');

const messageElement = document.getElementById('message');
const buttonElement = document.getElementById('button');

const greetingCard = document.getElementById('greeting-card');
const greetingMessage = document.getElementById('greeting-message');

buttonElement.addEventListener('click',greetings);

function getInputDetails(){
    greetingCard.style.backgroundColor = backgroundColorElement.value;
    greetingMessage.style.fontFamily = fontTypeElement.value;
    greetingMessage.style.color = fontColorElement.value;
    greetingMessage.style.fontSize = fontSizeElement.value;
}

function greetings(){
    getInputDetails();
    greetingMessage.innerHTML = messageElement.value;
}