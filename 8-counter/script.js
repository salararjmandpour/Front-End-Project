
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let timerNum = document.querySelector(".c100 > span");
let timerCircle = document.querySelector(".c100");
let lastPercent = 'p100';
let originalSecond, seconds, timerId;
//----------------------------------------------------------------//
startCounter.addEventListener("click", (e) => {
    seconds = parseInt(inputCounter.value);
    if (isNaN(seconds)) return toggleErrorMessage({ show: true, message: "زمان را به درستی وارد کنید" });
    //----------------------------------------------------------------//
    toggleErrorMessage({ show: false });
    toggleStartBox({ show: false });
    toggleTimerCircle({ show: true });
    toggleMessage({ show: true });
    timerNum.textContent = seconds;
    //----------------------------------------------------------------//
    originalSecond = seconds;
    timerId = setInterval(startTimer, 1000);
});

const toggleErrorMessage = ({ show, message }) => {
    let errorElement = document.querySelector('#error-message');
    if (show === true) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
    } else {
        errorElement.classList.remove("active");
    }
}

const toggleStartBox = ({ show }) => {
    let startBox = document.querySelector('.start-box');
    if (show === true) {
        startBox.style.display = "block";
        inputCounter.value = "";
    } else {
        startBox.style.display = "none";
    }
}

const toggleMessage = ({ show }) => {
    let messageLoading = document.querySelector(".message .loading");
    let messageSuccess = document.querySelector('.message .success');
    if (show === true) {
        messageLoading.style.display = "block";
        messageSuccess.style.display = "none";
    } else {
        messageLoading.style.display = "none";
        messageSuccess.style.display = "block";
    }
}

const toggleTimerCircle = ({ show }) => {
    if (show === true) {
        timerCircle.style.display = "block";
    } else {
        timerCircle.style.display = "none";
    }
}

let startTimer = () => {
    lastPercent ? timerCircle.classList.remove(lastPercent) : consol.log("not found lastPercent"); // if (lastPercent) timerCircle.classList.remove(lastPercent);
    if (seconds <= 0) {
        clearInterval(timerId);
        toggleMessage({ show: false });
        toggleTimerCircle({ show: false });
        toggleStartBox({ show: true });
        return;
    }
    //----------------------------------------------------------------//
    seconds -= 1;
    let percent = lastPercent = `p${Math.floor(((seconds) / originalSecond) * 100)}`;
    timerCircle.classList.add(percent);
    // console.log(percent);
    timerNum.textContent = seconds;
}