const decBtn = document.querySelector('.decrease');
const incBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const counterSpan = document.querySelector('.counter');

decBtn.addEventListener('click', e => {
    let counterText = parseInt(counterSpan.textContent);
    counterText--;
    counterSpan.textContent = counterText;
});

incBtn.addEventListener('click', e => {
    let counterText = parseInt(counterSpan.textContent);
    counterText++;
    counterSpan.textContent = counterText;
});

resetBtn.addEventListener('click', e => {
    counterSpan.textContent = 0;
});