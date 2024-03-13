inputGen = document.querySelector(".input");
validInput = document.querySelector(".validInput");
forwardBtn = document.getElementById("forward");
validForwardBtn = document.getElementById("validForward");

forwardedFunc = (url) => {
    window.location.href = url;
}

forwardBtn.addEventListener('click', function() {
    forwardedFunc(inputGen.value)
})

validForwardBtn.addEventListener('click', function() {
    let validUrl = validInput.value;
    if(!/^https?:\/\//i.test(validUrl)) {
        validUrl = 'https://' + validUrl;
    }
    forwardedFunc(validUrl)
})