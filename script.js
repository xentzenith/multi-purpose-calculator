var dp = document.getElementById('displayArea');
var lastCharIsOperator = false;

function reset() {
    dp.value = '';
}

function bck() {
    dp.value = dp.value.substring(0, dp.value.length - 1);
}

function add(value) {
    if(dp.value === 'ERR') {
        dp.value = '';
    };

    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (lastCharIsOperator) {
            dp.value = dp.value.substring(0, dp.value.length - 1) + value;
        } else {
            dp.value += value;
            lastCharIsOperator = true;
        }
    } else {
        dp.value += value;
        lastCharIsOperator = false;
    }
}

function calculate() {
    try {
        var evalRes = eval(dp.value);
        dp.value = evalRes;
    } catch (e) {
        dp.value = 'ERR';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    console.log(event);
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', '%', 'r', 'R', 'c', 'C'];

    if (allowedKeys.includes(key)) {
        event.preventDefault();
        if (key === 'Backspace') {
            simulateButtonClick('BCKSPACE');
        } else if (key === 'Enter') {
            simulateButtonClick('=');
        } else if (key === '%') {
            simulateButtonClick('%');
        } else if (key == `*`) {
            simulateButtonClick('X');
        } else if (key === '/') {
            simulateButtonClick('/');
        } else if (key === '.') {
            simulateButtonClick('.');
        } else if (key === '+') {
            simulateButtonClick('+');
        } else if (key === '-') {
            simulateButtonClick('-');
        } else if (key.toLowerCase() === 'r' || key.toLowerCase() === 'c') {
            simulateButtonClick('RESET');
        } else {
            simulateButtonClick(key);
        }
    }
});

function simulateButtonClick(value) {
    var buttons = document.querySelectorAll('#buttonArea button');
    buttons.forEach(function(button) {
        if (button.textContent === value) {
            button.click();
        }
    });
}

document.getElementById('buttonArea').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.focus();
        setTimeout(function() {
            event.target.blur();
        }, 500);
    }
});