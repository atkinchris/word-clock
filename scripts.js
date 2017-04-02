var HOURS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one']
var MINUTES = ['', 'five_mins', 'ten_mins', 'fifteen_mins', 'twenty_mins', 'twenty-five_mins', 'thirty_mins']

function getMinutes(date) {
  var minutes = Math.round(date.getMinutes() / 5)
  if (minutes > 6) {
    minutes = 12 - minutes
  }

  return MINUTES[minutes]
}

function getHours(date) {
  var minutes = date.getMinutes() / 15
  var hours = (date.getHours() % 12) || 12

  if (minutes === 0) {
    return HOURS[hours] + ' oclock'
  }
  if (minutes < 30) {
    return 'past ' + HOURS[hours]
  }
  return 'to ' + HOURS[hours + 1]
}

function setTime() {
  var now = new Date()
  var minutes = getMinutes(now)
  var hours = getHours(now)
  var classes = minutes + ' ' + hours

  document.body.className = classes
}

window.onload = function onload() {
  setTime()

  setTimeout(setTime, 1000)
}
