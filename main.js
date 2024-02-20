// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnAgain.addEventListener("click", handleAgainClick)
document.addEventListener("keypress", keyPressEnter)

// Funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value == randomNumber)) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} vezes.`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleAgainClick (event) {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keyPressEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}