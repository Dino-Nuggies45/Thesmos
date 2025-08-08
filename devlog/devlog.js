let timer = 0, interval;

function formatTime(t) {
    const hrs = String(Math.floor(t / 3600)).padStart(2, '0');
    const mins = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
    const secs = String(t % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
    timer++;
    document.getElementById('timer').textContent = formatTime(timer);
}

function startTimer() {
    if (!interval) interval = setInterval(updateTimer, 1000);

}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    timer = 0;
    document.getElementById('timer').textContent = formatTime(timer);
}

function saveLog() {
    const logText = document.getElementById('logInput').value.trim();
    if (!logText) return alert('Please enter a log entry.');

    const now = new Date();
    const timestamp = now.toLocaleString();
    const duration = formatTime(timer);

    const log = {
        timestamp,
        duration,
        text: logText
    };

    const logs = JSON.parse(localStorage.getItem('devLogs')) || [];
    logs.unshift(log);
    localStorage.setItem('devLogs', JSON.stringify(logs));

    displayLogs();
    resetTimer();
    document.getElementById('logInput').value = '';
}

function displayLogs() {
    const logs = JSON.parse(localStorage.getItem('devLogs')) || [];
    const logContainer = document.getElementById('logList');
    logContainer.innerHTML = '';

    logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.innerHTML = `<strong>${log.timestamp}</strong> (${log.duration}): ${log.text}`;
        logContainer.appendChild(logEntry);
    });
}

window.onload = displayLogs;