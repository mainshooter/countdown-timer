Listners.add('.timer__button', 'click', twentySecondsCountdown);

var Timer;
var timeInSeconds;
var timerTimeout;

var Countdown;
var remainingTime;

var NumberConverter;

function twentySecondsCountdown() {
  timeInSeconds = 20;
  remainingTime = timeInSeconds;

  var sec = Countdown.Seconds();
  var min = Countdown.Minuuts();

  Countdown.placeTime(min, sec);
  Timer.start();
}

(function() {
  Timer = {
    start: function() {
      timerTimeout = setInterval(function() {Timer.countDown();}, 1000);
    },
    stop: function() {
      clearTimeout(timerTimeout);
    },
    countDown: function() {
      remainingTime--;
      if (Timer.getTimer() == 0) {
        // Stop the timeout on 0
        Timer.stop();
      }
      var sec = Countdown.Seconds();
      var min = Countdown.Minuuts();

      Countdown.placeTime(min, sec);
    },
    getTimer: function() {
      return(remainingTime);
    },
    setTime: function(minuuts) {
      timeInSeconds = minuuts * 60;
    }
  }
})();

(function() {
  Countdown = {
    Minuuts: function() {
      var minuuts = remainingTime / 60;
      minuuts = parseInt(minuuts);
      return(minuuts);
    },

    Seconds: function() {
      var minuuts = remainingTime / 60;
      minuuts = parseInt(minuuts);

      if (minuuts == 0) {
        return(remainingTime);
      }

      else {
        var seconds = remainingTime - seconds;
        return(seconds);
      }
    },
    placeTime: function(minuuts, seconds) {
      minuuts = NumberConverter.didgets('' + minuuts + '');
      seconds = NumberConverter.didgets('' + seconds + '');

      select(".display__time-left").innerHTML = minuuts + ":" + seconds;
    }
  }
})();


(function() {
  NumberConverter = {
    didgets: function(number) {

      var numberArray = number.split('');
      if (numberArray.length != 2) {
        numberArray.unshift('0');
        var string = numberArray.join();

        var newString = string.replace(',', '');
        return(newString);
      }
      else {
        return(number);
      }
    }
  }
})();
