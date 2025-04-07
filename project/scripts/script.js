document.addEventListener('DOMContentLoaded', function(){
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if(linkPage === currentPage) {
            link.classList.add('highlighted');
        }
    });
});

function getCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop();
    return pageName;
}

/* call-to-action */
document.addEventListener('DOMContentLoaded', function(){
    const timerDisplay = document.querySelector('.timer');
    const callToActionBtn = document.querySelector('#call-to-action');
    const initialMinutes = 1;
    const initialSeconds = 59;
    let timeLeft;

    function getTimeLeftFromStorage() {
        const storedTime = localStorage.getItem('timerTimeLeft');
        if(storedTime) {
            return parseInt(storedTime, 10);
        }
        return initialMinutes * 60 + initialSeconds;
    }

    function saveTimeToStorage(seconds) {
        localStorage.setItem('timerTimeLeft', seconds);
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `<p>remaining time ${formattedMinutes}:${formattedSeconds}</p>`;
    }

    function updateTimerDisplay() {
        timerDisplay.innerHTML = formatTime(timeLeft);
    }

    function shakeButton() {
        callToActionBtn.classList.add('shake');
        setTimeout(() => {
            callToActionBtn.classList.remove('shake');
        }, 1000);
    }

    function startTimer() {
        timeLeft = getTimeLeftFromStorage();
        updateTimerDisplay();

        const timerInterval = setInterval(() => {
            timeLeft--;
            saveTimeToStorage(timeLeft);
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerHTML = "Offer expires soon";
                shakeButton();
                localStorage.removeItem('timerTimeLeft');
            }
        }, 1000);
    }

    startTimer();
});