var sequence = [];
var simon = [];
var colors = ["R", "G", "B", "Y"]
var count = 0;
var strict = true;
var greenAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var yellowAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var redAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueAudio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

$("#start").click(function() {
  simon.push(colors[Math.floor(Math.random() * colors.length)]);
  $("#start").addClass("hidden");
  $("#status").html("");
  sounds();
  $('#counter').html(count);
});

$("#strict").change(function() {
  strict = !strict;
  reset();
});

$(".redPie").click(function() {
  redAudio.play();
  sequence.push("R");
  $(".redPie").effect("highlight", {}, 400);
  simonSays();
});

$(".bluePie").click(function() {
  blueAudio.play();
  sequence.push("B");
  $(".bluePie").effect("highlight", {}, 400);
  simonSays();
});

$(".greenPie").click(function() {
  greenAudio.play();
  sequence.push("G");
  $(".greenPie").effect("highlight", {}, 400);
  simonSays();
});

$(".yellowPie").click(function() {
  yellowAudio.play();
  sequence.push("Y");
  $(".yellowPie").effect("highlight", {}, 400);
  simonSays();
});

$("#reset").click(function() {
  reset();
  $("#status").html("");
})

function reset() {
  sequence = [];
  simon = [];
  $("#seq").html(sequence);
  $("#simon").html(simon);
  $("#start").removeClass("hidden");
  count = 0;
  $('#counter').html(count);
}

var i = 0

function sounds() {
  if (simon[i] == "G") {
    setTimeout(function() {
      greenAudio.play();
      $(".greenPie").effect("highlight", {}, 400);
      i++;
      if (i < simon.length) {
        sounds()
      } else {
        i = 0
      }
    }, 1000);
  } else if (simon[i] == "R") {
    setTimeout(function() {
      redAudio.play();
      $(".redPie").effect("highlight", {}, 400);
      i++;
      if (i < simon.length) {
        sounds()
      } else {
        i = 0
      }
    }, 1000);
  } else if (simon[i] == "Y") {
    setTimeout(function() {
      yellowAudio.play();
      $(".yellowPie").effect("highlight", {}, 400);
      i++;
      if (i < simon.length) {
        sounds()
      } else {
        i = 0
      };
    }, 1000);
  } else if (simon[i] == "B") {
    setTimeout(function() {
      blueAudio.play();
      $(".bluePie").effect("highlight", {}, 400);
      i++;
      if (i < simon.length) {
        sounds()
      } else {
        i = 0
      }
    }, 1000);
  }
}

function simonSays() {
  {
    if (sequence[count] == simon[count]) {
      count += 1;
      if (count == 20) {
        $("#status").html("You Win!!");
        reset();
      } else if (count == simon.length) {
       $('#counter').html(count); simon.push(colors[Math.floor(Math.random() * colors.length)]);
        sounds();
        count = 0;
        sequence = [];
      }

    } else {
      if (strict == true) {
        $('#counter').html("!");
        reset();
      } else {
        $('#counter').html("!");
        sequence = [];
        count = 0;
        sounds();
      }
    }
  }
}