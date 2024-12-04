const startSound = new Audio('data:audio/wav;base64,UklGRtQCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAAABkYXRhsAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==');
const endSound = new Audio('data:audio/wav;base64,UklGRtQCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAAABkYXRhsAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==');

let notificationsEnabled = false;
const notificationModal = document.getElementById('notification-first-time-modal');
const notificationCheckbox = document.getElementById('notification-permission');

function checkFirstVisit() {
    const firstVisit = localStorage.getItem('firstVisit') === null;

    if (firstVisit) {
        notificationModal.style.display = 'flex';
    }
}

async function handleNotificationChoice(allow) {
    localStorage.setItem('firstVisit', 'false');
    notificationModal.style.display = 'none';

    if (allow) {
        if (Notification.permission !== 'granted') {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                notificationsEnabled = true;
                notificationCheckbox.checked = true;
            }
        } else {
            notificationsEnabled = true;
            notificationCheckbox.checked = true;
        }
    }
}

function sendNotification(title, body) {
    if (notificationsEnabled && Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8AAABU0lEQVQ4jc2TsU7DMBCG/bQRhQFVqkLV3UqRqvMIzNPwDjwAY0qkroU5QwahMleogQGpICGN4zh2nMRVFHeWf/rd3Z3unQD8Z+TzeXq9HkIIBEGAYRgA9Pt9isUihUKBfD5PvV6nVqvR7/dRSjEajRCdB/3wLDabDdlsFq01g8GALMtoranX6ziOg1KK6XRKEASMx2Occ0wmE7IsQymF1hpjDPV6nfl8znoiTdPMZ7Wa4zhMJhPm8zllWWYmU0qhlAJg7PdHqRSGYZDNZjHGAHA+LqNpGrPZjOFwyGg0YjweA6QH1ulPmEwmZLNZKpUKjuMwGo1wziGlxDlHkiQopVBK4fs+WmuUUjiOw2QyIQxDhBA4jkPTNPR6PZRSuK6L67oopfD9F6WUjQlCCCaTCa7rUq1WOZ/2F+Xk4/H4C/gbgzG+AaSNrjvpM8vYAAAAAElFTkSuQmCC'
        });
    }
}

window.onload = checkFirstVisit;

let timer;
let timeRemaining;
let isTimerRunning = false;
let currentExercise = null;
let repsRemaining = 0;

function generateExercise(type) {
    const exerciseList = exerciseData[type];
    const randomIndex = Math.floor(Math.random() * exerciseList.length);
    currentExercise = exerciseList[randomIndex];

    const resultDiv = document.getElementById('exercise-result');
    resultDiv.innerHTML = `
                <div class="exercise-details">
                    <h2>${currentExercise.name}</h2>
                    <iframe 
                        class="exercise-video" 
                        width="100%" 
                        height="400" 
                        src="${currentExercise.video}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    
                    <div class="exercise-instructions">
                        <h3>Instruções:</h3>
                        <ol>
                            ${currentExercise.instructions.map(instruction =>
        `<li>• ${instruction}</li>`
    ).join('')}
                        </ol>
                    </div>

                    <div class="timer-container">
                        <div class="timer">
                            Tempo: <span id="timer-display">00:00</span>
                        </div>
                        <div class="rep-counter">
                            Séries: <span id="rep-count">0</span>
                        </div>
                    </div>

                    <div class="control-buttons">
    <button class="control-btn start-btn" onclick="startTimer()" aria-label="Iniciar">
        <i class="fas fa-play"></i> <!-- Ícone de Play -->
        <span class="sr-only">Iniciar</span>
    </button>
    <button class="control-btn pause-btn" onclick="pauseTimer()" aria-label="Pausar">
        <i class="fas fa-pause"></i> <!-- Ícone de Pausa -->
        <span class="sr-only">Pausar</span>
    </button>
    <button class="control-btn reset-btn" onclick="resetTimer()" aria-label="Resetar">
        <i class="fas fa-redo"></i> <!-- Ícone de Reset -->
        <span class="sr-only">Resetar</span>
    </button>
</div>

                </div>
            `;
    timeRemaining = currentExercise.defaultTime;
    repsRemaining = 0;
    updateTimerDisplay();
    updateRepCount();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer-display').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateRepCount() {
    document.getElementById('rep-count').textContent = repsRemaining;
}

function startTimer() {
    if (!currentExercise || isTimerRunning) return;
    startSound.play();

    sendNotification(
        'Iniciando Exercício',
        `${currentExercise.name}: Começando nova série`
    );

    isTimerRunning = true;
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            pauseTimer();
            repsRemaining++;
            updateRepCount();

            endSound.play();
            sendNotification(
                'Série Concluída',
                `${currentExercise.name}: Série ${repsRemaining} concluída`
            );
            if (repsRemaining < currentExercise.defaultReps) {
                timeRemaining = currentExercise.defaultTime;
                updateTimerDisplay();
                startTimer();
            } else {
                sendNotification(
                    'Exercício Completo',
                    `Parabéns! Você completou ${currentExercise.name}`
                );
            }
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    pauseTimer();
    if (currentExercise) {
        timeRemaining = currentExercise.defaultTime;
        repsRemaining = 0;
        updateTimerDisplay();
        updateRepCount();
    }
}