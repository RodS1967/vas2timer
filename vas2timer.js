$(document).ready(function () {
  // hide Downbuttons
  $("#resetLlothis").hide();
  $("#resetFelms").hide();

  function Bosstimer(
    boss,
    resetCount,
    untilBack,
    counter,
    percentageCount,
    barWidth,
    audio50,
    audio85,
    audio95,
	backAudio,
	downAudio
  ) {
    this.boss = boss;
    this.resetCount = resetCount;
    this.count = resetCount;
    this.untilBack = untilBack;
    this.downTime = untilBack;
    this.counter = counter;
    this.percentageCount = percentageCount;
    this.barWidth = barWidth;
    this.audio50 = audio50;
    this.audio85 = audio85;
    this.audio95 = audio95;
	this.backAudio = backAudio;
	this.downAudio = downAudio;

	var thisBosstimer = this;

    this.startTimer = function () {
      this.count = resetCount - untilBack;
      percentageCount = 1;
      clearInterval(thisBosstimer.counter);
      counter = setInterval(this.timer, 1000); //1000 will  run it every 1 second
      $("#start" + boss).hide();
      $("#reset" + boss).show();
      backAudio.play();
      thisBosstimer.count = this.count;
      thisBosstimer.percentageCount = this.percentageCount;
      thisBosstimer.counter = this.counter;
    };

    this.bossDown = function () {
      thisBosstimer.count = resetCount;
      percentageCount = 0;
      barWidth = 0;
      thisBosstimer.downTime = untilBack;
      $("#bar" + boss).css("width", 0 + "%");
      clearInterval(counter);
      counter = setInterval(this.timer, 1000); //1000 will  run it every 1 second
      $("#reset" + boss).hide();
      if ($("#boss" + boss).hasClass("warning")) {
        $("#boss" + boss).removeClass("warning");
      }
      downAudio.play();
      thisBosstimer.percentageCount = this.percentageCount;
      thisBosstimer.barWidth = this.barWidth;
      thisBosstimer.downTime = this.downTime;
      thisBosstimer.counter = this.counter;
    };

    this.timer = function () {
      this.timerText = 0;
      this.warningTime = 5;
      this.barText = "";
      this.count = thisBosstimer.count;
      this.downTime = thisBosstimer.downTime;

      count = count - 1;
      barText = Math.round((count * 100) / (resetCount - untilBack)) + "%";

      //boss down
      if (count > resetCount - untilBack) {
        downTime = downTime - 1;
        $("#text" + boss).text("Back in");
        if (downTime < warningTime) {
          $("#boss" + boss).addClass("warning");
          backAudio.play();
        }
        timerText = downTime;
      } //boss up
      else {
        barWidth = (percentageCount * 100) / (resetCount - untilBack);
        percentageCount = percentageCount + 1; //ok

        if (downTime < warningTime && $("#boss" + boss).hasClass("warning")) {
          $("#boss" + boss).removeClass("warning");
        }
        $("#bar" + boss).css("width", barWidth + "%");
        $("#barText" + boss).text(barText);
        timerText = count;
        $("#text" + boss).text("enrage in");
        $("#reset" + boss).show();
      }

      // ones
      if (count === 90) {
        audio50.play();
      }
      // twice
      if (count < 30 && count >= 28) {
        audio85.play();
      }
      // three times
      if (count < 15 && count >= 12) {
        audio95.play();
      }

      if (count < warningTime) {
        $("#boss" + boss).addClass("warning");
        audio95.play();
      }

      var m = parseInt(timerText / 60.0);
      var sec = timerText % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      var t = m + ":" + sec;

      $("#timer" + boss).text(t);

      if (count <= 0) {
        clearInterval(counter);
        return;
      }

      thisBosstimer.count = this.count;
      thisBosstimer.downTime = this.downTime;
      thisBosstimer.percentageCount = this.percentageCount;
    };
  }

  	// initialize Felmsboss-object
	var FelmsWarning50Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-classic-alarm-3beeps.wav"
	);
  
	var FelmsWarning85Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-classic-alarm-5beeps.wav"
	);
  
	var FelmsWarning95Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-classic-alarm-995.wav"
	);
  
	var FelmsBackAudio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-wild-raven-bird-calling-62.wav"
	);
	
	var FelmsDownAudio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-creaking-cartoon-bird-calling-11.wav"
	);
	
  var FelmsBoss = new Bosstimer(
    "Felms",
    180 + 45,
    45,
    undefined,
    0,
    0,
    FelmsWarning50Audio,
    FelmsWarning85Audio,
    FelmsWarning95Audio,
	FelmsBackAudio,
	FelmsDownAudio
  );

  // click on startbutton Felmsboss
  $("#startFelms").click(function () {
    FelmsBoss.startTimer();
  });

  // click on downbutton Felmsboss
  $("#resetFelms").click(function () {
    FelmsBoss.bossDown();
  });

	// initialize Llothisboss-object
	var LlothisWarning50Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-clock-countdown-bleeps-2beeps.wav"
	);
  
	// initialize Llothisboss-object
	var LlothisWarning85Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-clock-countdown-bleeps-3beeps.wav"
	);
  
	// initialize Llothisboss-object
	var LlothisWarning95Audio = new Audio(
		"http://www.teamrodzilla.com/_sounds/mixkit-clock-countdown-bleeps-916.wav"
	);
  
	var LlothisBackAudio = new Audio(
	    "http://www.teamrodzilla.com/_sounds/mixkit-annoyed-big-dog-barking-51.wav"
	);
  
	var LlothisDownAudio = new Audio(
	    "http://www.teamrodzilla.com/_sounds/mixkit-dog-whimper-really-sad-468.wav"
	);
  
  var LlothisBoss = new Bosstimer(
    "Llothis",
    180 + 45,
    45,
    undefined,
    0,
    0,
    LlothisWarning50Audio,
    LlothisWarning85Audio,
    LlothisWarning95Audio,
	LlothisBackAudio,
	LlothisDownAudio
  );

  // click on startbutton Llothisboss
  $("#startLlothis").click(function () {
    LlothisBoss.startTimer();
  });

  // click on downbutton Llothisboss
  $("#resetLlothis").click(function () {
    LlothisBoss.bossDown();
  });
});
