let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("start").onclick = () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
};

document.getElementById("pause").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
};
