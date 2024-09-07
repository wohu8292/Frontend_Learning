const CurrentDate = new Date()
var year = CurrentDate.getFullYear()
// result: 2024
var timezone = CurrentDate.getTimezoneOffset()
console.log(timezone)
// result: 360 (minute gap between UK)