function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize immediately

let timerInterval;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalSeconds = minutes * 60 + seconds;

    clearInterval(timerInterval);
    document.getElementById('alert').textContent = '';

    function updateTimer() {
        const displayMinutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const displaySeconds = String(totalSeconds % 60).padStart(2, '0');
        document.getElementById('timer').textContent = `Timer: ${displayMinutes}:${displaySeconds}`;

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(timerInterval);
            document.getElementById('alert').textContent = 'Time is up!';
            new Audio('https://www.soundjay.com/button/beep-07.wav').play();
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}
