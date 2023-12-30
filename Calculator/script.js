let display = document.getElementById('display');
let operators = ['+', '-', '*', '/'];

function handleButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;
        
        if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === '\u232b') {
            backspace();
        } else {
            appendToDisplay(buttonText);
        }
    }
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.' || !isNaN(key)) {
        appendToDisplay(key);
    } else if (operators.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    }
}
