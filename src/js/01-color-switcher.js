function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
stopEl.setAttribute('disabled', 'disabled');

let cycle = null;

startEl.addEventListener('click', () => {
  cycle = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    startEl.disabled = true;
  }, 1000);
  setRemoveAttribute(startEl, stopEl);
});

stopEl.addEventListener('click', () => {
  clearInterval(cycle);
  setRemoveAttribute(stopEl, startEl);
});

function setRemoveAttribute(add, remove) {
  add.setAttribute('disabled', 'disabled');
  remove.removeAttribute('disabled');
}
