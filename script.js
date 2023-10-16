const startButton = document.getElementById("startButton");
const timerElement = document.getElementById("timer");
let time = 0;
let timer;

  startButton.addEventListener("click", function() {
    timer = setInterval(function () {
      time++;
      const hours = Math.floor(time / 3600).toString().padStart(2, "0");
      const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
      const seconds = (time % 60).toString().padStart(2, "0");
      timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
     alert("The game starts now");
    startButton.disabled = true
    submit.disabled = false
    guessBox.disabled = false
  });



const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById("submit");
const guessBox = document.getElementById("guessBox");
const text = document.getElementById("text");
const box = document.getElementsByClassName("box")

let attempt = 0;
let timeRecord;

submit.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = Number(guessBox.value);
  attempt++;

  
  if (userGuess === randomNumber) {
    text.textContent = "thats right mf "
    
    text.style.color = "blue";
    //box.style.= "blue";
    
    guessBox.disabled = true;
    submit.disabled = true;
    clearInterval(timer);

    timeRecord = `${hours}:${minutes}:${seconds}`;
    text.textContent = "Time Record:", timeRecord;
  }

    else if (userGuess > randomNumber) {
      text.textContent = "too high "
    }
  
    else if (userGuess < randomNumber) {
      text.textContent = "too low "
    }

  guessBox.value = "";
  
}
