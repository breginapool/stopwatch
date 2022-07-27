// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// variables to hold time values

let centiSeconds = 0
let seconds = 0
let minutes = 0

// variables for leading zero

let leadingCentiSeconds = 0
let leadingSeconds = 0
let leadingMinutes = 0

// variables for set interval and timer status

let timerIntervalId = null
let timerStatus = 'stopped'

// stopwatch function

function stopWatch() {
  centiSeconds++
  if (centiSeconds > 99) {
    centiSeconds = 0
    seconds++

    if (seconds > 59) {
      seconds = 0
      minutes++
    }
  }

  if (centiSeconds < 10) {
    leadingCentiSeconds = '0' + centiSeconds.toString()
  } else {
    leadingCentiSeconds = centiSeconds
  }
  if (seconds < 10) {
    leadingSeconds = '0' + seconds.toString()
  } else {
    leadingSeconds = seconds
  }
  if (minutes < 10) {
    leadingMinutes = '0' + minutes.toString()
  } else {
    leadingMinutes = minutes
  }

  let displayTimer = document.querySelector('.timer')
  displayTimer.innerText = `${leadingMinutes}:${leadingSeconds}:${leadingCentiSeconds}`
}

startStopBtn.addEventListener('click', () => {
  if (timerStatus === 'stopped') {
    timerIntervalId = window.setInterval(stopWatch, 10)
    startStopBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    startStopBtn.classList.add('pause-btn')
    timerStatus = 'started'
  } else {
    window.clearInterval(timerIntervalId)
    startStopBtn.innerHTML = `<i class="fa-solid fa-play"</i>`
    startStopBtn.classList.remove('pause-btn')
    startStopBtn.classList.add('play.btn')
    timerStatus = 'stopped'
  }
})

resetBtn.addEventListener('click', () => {
  window.clearInterval(timerIntervalId)
  centiSeconds = 0
  seconds = 0
  minutes = 0
  document.querySelector('.timer').innerText = '00:00:00'
})
