import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

let targetTime;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkInputDate(selectedDates[0]);

    // targetTime = selectedDates[0];
    // console.log(targetTime);
  },
};

const fp = flatpickr(input, options);

function checkInputDate(date) {
  if (date <= Date.now()) {
    startBtn.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  } else {
    startBtn.disabled = false;
  }
}

// console.log(options.defaultDate);
// console.log(fp.selectedDates[0]);
// console.log(Date.now());

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(event) {
  event.preventDefault();
  startBtn.disabled = true;

  const timerId = setInterval(() => {
    let dif = fp.selectedDates[0] - Date.now();
    if (dif < 0) {
      clearInterval(timerId);
      return;
    }

    getDateToTimer(convertMs(dif));
  }, 1000);
}

function getDateToTimer({ days, hours, minutes, seconds }) {
  day.textContent = pad(days);
  hour.textContent = pad(hours);
  minute.textContent = pad(minutes);
  second.textContent = pad(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
