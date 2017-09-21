Listners.add('.timer__button', 'click', test);

var Timer;
var timeInSeconds;
var timerTimeout;

(function() {
  Timer = {
    start: function() {
      timerTimeout = setInterval(function() {Timer.countDown();}, 1000);
    },
    stop: function() {
      clearTimeout(timerTimeout);
    },
    countDown: function() {
      Timer--;
      if (Timer.getTimer() == 0) {
        // Stop the timeout on 0
        Timer.stop();
      }
    },
    getTimer: function() {
      return(timeInSeconds);
    }
  }
})();
