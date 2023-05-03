const p1= {
    score:0,
    btn:document.querySelector('#p1Btn'),
    display : document.querySelector('#p1Display'),
}


const p2= {
    score:0,
    btn:document.querySelector('#p2Btn'),
    display :document.querySelector('#p2Display'),
}

let winningScore = 3;
let isGameOver = false;
const winningScoreSelect = document.querySelector('#playTo')

function updateScore(player,opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }

        player.display.innerText = player.score;
    }
}


p1.btn.addEventListener('click', function(){
    updateScore(p1, p2)
})
p2.btn.addEventListener('click', function(){
    updateScore(p2, p1)
})







winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();


})

resetBtn.addEventListener('click', reset)


function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-danger', 'has-text-success')
    p1.btn.disabled = false;
    p2.btn.disabled = false;
}