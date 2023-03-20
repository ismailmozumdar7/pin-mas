function getPin() {
    const pin = getGenaetRandon();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pinString;
    }
    else {
        return getPin();
    }
}
function getGenaetRandon() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-btn').addEventListener('click', function () {
    const pinNum = parseFloat(getPin())
    const pinControl = document.getElementById('pin-control');
    pinControl.value = pinNum;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const inputFuildPin = event.target.innerText;
    const inputFuild = document.getElementById('user-value');
    const pin = inputFuild.value;
    if (isNaN(inputFuildPin)) {
        if (inputFuildPin === 'C') {
            inputFuild.value = '';
        }
        else if (inputFuildPin === '<') {
            const disit = pin.split('');
            disit.pop();
            const replesPin = disit.join('');
            inputFuild.value = replesPin;
        }
    }
    else {
        const currentPin = pin + inputFuildPin;
        inputFuild.value = currentPin;
    }

})
document.getElementById('submit-btn').addEventListener('click', function () {
const pinControl = document.getElementById('pin-control');
const currentPin = pinControl.value;
const inputFuild = document.getElementById('user-value');
const currentinputFuild = inputFuild.value;
const fuildNotify = document.getElementById('fuild-notify')
const succNotify = document.getElementById('succ-notify')
if(currentPin === currentinputFuild){
    succNotify.style.display = 'block';
    fuildNotify.style.display = 'none'
    pinControl.value = '';
    inputFuild.value = '';
}
else{
    succNotify.style.display = 'none';
    fuildNotify.style.display = 'block'
}
})
