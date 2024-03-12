
var dp = document.getElementById('displayArea');

function reset() {
    dp.value = '';
}

function bck() {
    dp.value = dp.value.substring(0, dp.value.length - 1);
}

function add(value) {
    if(dp.value == 'ERR')reset()
    dp.value += value;
}

function calculate() {
    try {
        var evalRes = eval(dp.value);
        dp.value = evalRes;
    } catch (e) {
        dp.value = 'ERR';
    }
}