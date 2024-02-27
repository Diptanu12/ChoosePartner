const alphabets = document.getElementById('alphabets');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let i = 0;
let inter;

function updateletters() {
    alphabets.textContent = letters[i];
    i++;
    if (i == 25) {
        i = 0;
    }
}

function startInterval() {
    inter = setInterval(updateletters, 150);
}

startInterval();
stopBtn.addEventListener('click', () => {
    clearInterval(inter);
});

resetBtn.addEventListener('click', () => {
    clearInterval(inter); 
    i = 0; 
    alphabets.textContent = 'A'; 
    startInterval(); 
});
