// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// variables to hold time values

let seconds = 0
let minutes = 0
let hours = 0

// variables for leading zero

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// variables for set interval and timer status

let timerIntervalId = null
let timerStatus = 'stopped'

// stopwatch function

function stopWatch() {
  seconds++

  if (seconds > 59) {
    seconds = 0
    minutes++

    if (minutes > 59) {
      minutes = 0
      hours++
    }
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
  if (hours < 10) {
    leadingHours = '0' + hours.toString()
  } else {
    leadingHours = hours
  }

  let displayTimer = document.querySelector('.timer')
  displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}

startStopBtn.addEventListener('click', () => {
  if (timerStatus === 'stopped') {
    timerIntervalId = window.setInterval(stopWatch, 1000)
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
  // window.clearInterval(timerIntervalId)
  seconds = 0
  minutes = 0
  hours = 0
  document.querySelector('.timer').innerText = '00:00:00'
})
