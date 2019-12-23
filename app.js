//timer api
//setTimeout()
//setInterval()
//clearInterval()

var timerDiv = document.querySelector(".timer");
var startBtn = document.querySelector(".start-btn");
var pauseBtn = document.querySelector(".pause-btn");
var resetBtn = document.querySelector(".reset-btn");
var second = 0;
var timerId = null;

var tick = function() {
  second++;
  timerDiv.textContent = second;
};
var handleClick = function() {
  //if press to startBtn, can not press again the start button
  if (timerId !== null) {
    return;
  }
  timerId = setInterval(tick, 1000);
};
// startBtn.addEventListener("click", function() {
//   setInterval(tick, 1000);
// });

var handleClickPause = function() {
  clearInterval(timerId);
  //to make start button to work again after you pause and start again.
  timerId = null;
};

var handleClickReset = function() {
  clearInterval(null);
  timerId = null;
};

startBtn.addEventListener("click", handleClick);
pauseBtn.addEventListener("click", handleClickPause);
resetBtn.addEventListener("click", handleClickReset);
