import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let deadlineTime = 0;

const inputEl = document.querySelector('input');
const startEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startEl.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      deadlineTime = selectedDates[0].getTime();
      startEl.removeAttribute('disabled');
      startEl.addEventListener('click', timer);
      return;
    }
    startEl.setAttribute('disabled', 'disabled');
    Notiflix.Notify.failure('Please choose a date in the future');
  },
};

flatpickr(inputEl, options);

function timer() {
  startEl.setAttribute('disabled', 'disabled');
  let interval = setInterval(() => {
    const timeDifference = deadlineTime - new Date().getTime();
    if (timeDifference < 0) {
      clearInterval(interval);
      Notiflix.Notify.success('success');
      return;
    }
    convertTime(timeDifference);
  }, 1000);
}

function convertTime(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysEl.textContent = days < 10 ? addZero(String(days)) : days;
  hoursEl.textContent = days < 10 ? addZero(String(hours)) : hours;
  minutesEl.textContent = days < 10 ? addZero(String(minutes)) : minutes;
  secondsEl.textContent = days < 10 ? addZero(String(seconds)) : seconds;
}

function addZero(value) {
  return value.padStart(2, '0');
}
