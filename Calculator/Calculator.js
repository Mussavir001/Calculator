let operatorEntered = false;
let zeroEntered = false;
const display = document.getElementById('output-screen');

function Solve(value) {
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = display.textContent.slice(-1);

    if (operatorEntered && operators.includes(value)) {
        return;
    }

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    if (zeroEntered) {
        display.textContent = '';
        zeroEntered = false;
    }

    display.textContent += value;

    operatorEntered = operators.includes(value);
}

function Calculate() {
    const result = eval(display.textContent);
    display.textContent = result;
    operatorEntered = false;
}

function Clear() {
    display.textContent = '0';
    operatorEntered = false;
    zeroEntered = true;
}

function Back() {
    display.textContent = display.textContent.slice(0, -1);
}

function validate(event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/', '%'];

    if (key === 'Backspace') {
        Back();
        event.preventDefault();
    } else if (key === 'Enter') {
        Calculate();
        event.preventDefault();
    } else if (operators.includes(key) || /\d/.test(key)) {
        const lastChar = display.textContent.slice(-1);

        if (operators.includes(lastChar) && operators.includes(key)) {
            event.preventDefault();
        } else {
            display.textContent += key;
            operatorEntered = operators.includes(key);
            zeroEntered = false;
            event.preventDefault();
        }
    } else {
        // Ignore non-numeric, non-operator keys
        event.preventDefault();
    }
}

// Focus on the output screen for keyboard input
display.focus();