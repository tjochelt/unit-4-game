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
  $("#crystal-1").on("click", function() {
    playerTotal += crystalOne;
    $("#total-score").html(playerTotal);
    console.log("one" + crystalOne + " ", playerTotal);
    if (playerTotal === playerGoal) {
      console.log("You Win!!!");
      playerTotal = 0;
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      playerTotal = 0;
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
    }
  });

  $("#crystal-2").on("click", function() {
    playerTotal += crystalTwo;
    $("#total-score").html(playerTotal);
    console.log("two" + crystalTwo + " ", playerTotal);
    if (playerTotal === playerGoal) {
      console.log("You Win!!!");
      playerTotal = 0;
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      playerTotal = 0;
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
    }
  });

  $("#crystal-3").on("click", function() {
    playerTotal += crystalThree;
    $("#total-score").html(playerTotal);
    console.log("three" + crystalThree + " ", playerTotal);
    if (playerTotal === playerGoal) {
      console.log("You Win!!!");
      playerTotal = 0;
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      playerTotal = 0;
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
    }
  });

  $("#crystal-4").on("click", function() {
    playerTotal += crystalFour;
    $("#total-score").html(playerTotal);
    console.log("four" + crystalFour + " ", playerTotal);
    if (playerTotal === playerGoal) {
      alert("You Win!!!");
      playerTotal = 0;
      winTotal++;
      $("#win-total").html(winTotal);
      console.log(winTotal);
    }
    if (playerTotal > playerGoal) {
      alert("Loser!");
      playerTotal = 0;
      lossTotal++;
      $("#loss-total").html(lossTotal);
      console.log(lossTotal);
    }
  });

  // If user total === playerGoal, reset game.

  // Else if it matches exactly,
  // 	    Win total increases by one
  // 	    Score resets
  // 	    Random numbers for crystals and match number reset
  // 	    Display 'you win'
  // Else
  // 	    Loss total increase by one
  // 	    Score resets
  // 	    Random numbers for crystals and match number reset
  // 	    Display you lose
});
