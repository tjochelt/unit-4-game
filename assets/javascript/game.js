// Random number to match should be between 19 and 120
$(document).ready(function() {
  var playerGoal;
  var playerTotal = 0;
  var winTotal = 0;
  var lossTotal = 0;

  //sets player goal as random number between 19-120

  $("#random-number").text(function getGoal() {
    playerGoal = Math.floor(Math.random() * 102) + 19;
  });
  $("#random-number").html(playerGoal);
  // console.log(playerGoal)

  // Each crystal holds random number between 1 and 12
  //Clicking on the crystal adds the random number to playerTotal

  var crystalOne = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalOne)
  var crystalTwo = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalTwo)
  var crystalThree = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalThree)
  var crystalFour = Math.floor(Math.random() * 12) + 1;
  // console.log(crystalFour)

  //click crystal, update player total with crystal value
  //show on UI

  //crystal 1 logic
  $("#crystal-1").on("click", function() {
    playerTotal += crystalOne;
    $("#total-score").html(playerTotal);
    console.log("one" + crystalOne + " ", playerTotal);
    if (playerTotal === playerGoal) {
           alert("You Win!!!");
      $("#total-score").html((playerTotal = 0));
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      $("#total-score").html((playerTotal = 0));
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
  });

  //crystal 2 logic
  $("#crystal-2").on("click", function() {
    playerTotal += crystalTwo;
    $("#total-score").html(playerTotal);
    console.log("two" + crystalTwo + " ", playerTotal);
    if (playerTotal === playerGoal) {
           alert("You Win!!!");
      $("#total-score").html((playerTotal = 0));
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      $("#total-score").html((playerTotal = 0));
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
  });

  //crystal 3 logic
  $("#crystal-3").on("click", function() {
    playerTotal += crystalThree;
    $("#total-score").html(playerTotal);
    console.log("three" + crystalThree + " ", playerTotal);
    if (playerTotal === playerGoal) {
           alert("You Win!!!");
      $("#total-score").html((playerTotal = 0));
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      $("#total-score").html((playerTotal = 0));
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
  });

  //crystal4 logic
  $("#crystal-4").on("click", function() {
    playerTotal += crystalFour;
    $("#total-score").html(playerTotal);
    console.log("four" + crystalFour + " ", playerTotal);
    if (playerTotal === playerGoal) {
      alert("You Win!!!");
      $("#total-score").html((playerTotal = 0));
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      $("#total-score").html((playerTotal = 0));
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
      $("#random-number").text(function getGoal() {
        playerGoal = Math.floor(Math.random() * 102) + 19;
      });
      $("#random-number").html(playerGoal);
      crystalOne = Math.floor(Math.random() * 12) + 1;
      crystalTwo = Math.floor(Math.random() * 12) + 1;
      crystalThree = Math.floor(Math.random() * 12) + 1;
      crystalFour = Math.floor(Math.random() * 12) + 1;
    }
  });
});
