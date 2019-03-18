function countdown(endDate) {
  let timer, days, hours, minutes, seconds

  endDate = new Date(endDate).getTime()

  var timerDay = document.querySelector('.timer-day')
  var timerHour = document.querySelector('.timer-hour')
  var timerMinute = document.querySelector('.timer-minute')
  var timerSecond = document.querySelector('.timer-second')

  if (isNaN(endDate)) return

  function calculate() {
    let startDate = new Date()

    startDate = new Date(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate(),
      startDate.getUTCHours(),
      startDate.getUTCMinutes(),
      startDate.getUTCSeconds()
    )

    let timeRemaining = parseInt((endDate - startDate.getTime()) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400)
      timeRemaining = timeRemaining % 86400

      hours = parseInt(timeRemaining / 3600)
      timeRemaining = timeRemaining % 3600

      minutes = parseInt(timeRemaining / 60)
      timeRemaining = timeRemaining % 60

      seconds = parseInt(timeRemaining)

      timerDay.innerHTML = parseInt(days, 10)
      timerHour.innerHTML = ('0' + hours).slice(-2)
      timerMinute.innerHTML = ('0' + minutes).slice(-2)
      timerSecond.innerHTML = ('0' + seconds).slice(-2)
    } else {
      return
    }
  }

  timer = setInterval(calculate, 1000)
}

// document.addEventListener('DOMContentLoaded', function() {
//   countdown(1552669140000)
// })
