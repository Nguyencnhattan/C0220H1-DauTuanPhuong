let result = document.getElementById('result');


function clickN(cal) {
    result.innerText = result.value + cal;
}

function getResult() {
    result.innerText = eval(result.value);
}

function getC() {
    result.innerText="";
}