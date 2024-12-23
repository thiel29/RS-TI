document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");

  let timer;
  let isRunning = false;
  let timeLeft = 25 * 60; // 25 minutos em segundos
  let count = 0;

  const timerDisplay = document.getElementById("timer");

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        count++;

        let title;
        let message;

        if (count == 4) {
          title = "Faça uma pausa longa!";
          message = "Tempo de trabalho concluído, descanse por 15 min.";
          count = 0;
        } else {
          title = "Faça uma pausa!";
          message = "Tempo de trabalho concluído, descanse por 5 min.";
        }

        alertbox.render({
          title: title,
          message: message,
          btnTitle: "Ok",
          themeColor: "#f4eddb",
          btnColor: "#27ae60",
          border: false,
        });

        timeLeft = 5 * 60; // 5 minutos de descanso
        updateTimerDisplay();
        isRunning = false;
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    isRunning = false;
  }

  function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // Reinicia para 25 minutos
    isRunning = false;
    updateTimerDisplay();
  }

  // Inicializa o display do timer
  updateTimerDisplay();

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
});
