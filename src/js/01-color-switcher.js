const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.textContent = startBtn.textContent.toUpperCase();
stopBtn.textContent = stopBtn.textContent.toUpperCase();

// stopBtn.setAttribute('disabled', 'disabled');
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartButtonClick);
stopBtn.addEventListener('click', onStopButtonClick);

let timerId;

function onStartButtonClick() {
  //   startBtn.setAttribute('disabled', 'disabled');
  //   stopBtn.removeAttribute('disabled');
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(chengeBodyColor, 1000);

  //   console.log('cklik start');
}

function onStopButtonClick() {
  //   stopBtn.setAttribute('disabled', 'disabled');
  //   startBtn.removeAttribute('disabled');
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timerId);

  //   console.log('cklik stop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function chengeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
