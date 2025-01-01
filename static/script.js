let timer;
let isWorkTime = true;
let timeLeft = 25 * 60; // 25 minutes in seconds

document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer-display');
    const startWorkButton = document.getElementById('start-work');
    const startBreakButton = document.getElementById('start-break');
    const resetButton = document.getElementById('reset-timer');

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer(duration) {
        clearInterval(timer);
        timeLeft = duration;
        updateTimerDisplay();
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(isWorkTime ? '作業時間終了！休憩を始めてください。' : '休憩時間終了！作業を始めてください。');
                isWorkTime = !isWorkTime;
            } else {
                timeLeft--;
                updateTimerDisplay();
            }
        }, 1000);
    }

    startWorkButton.addEventListener('click', () => startTimer(25 * 60));
    startBreakButton.addEventListener('click', () => startTimer(5 * 60));
    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        timeLeft = isWorkTime ? 25 * 60 : 5 * 60;
        updateTimerDisplay();
    });
});
