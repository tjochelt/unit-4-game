// 4 crystals are buttons

// Random number to match should be between 19 and 120
$(document).ready(function() {
  var playerGoal;
  var playerTotal = 0;

  //sets player goal as random number between 19-120
  $("#random-number").text(function() {
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
        console.log("You Win!!!")
    }
    if (playerTotal > playerGoal) {
        alert("Loser!")
    }
  });

  $("#crystal-2").on("click", function() {
    playerTotal += crystalTwo;
    $("#total-score").html(playerTotal);
    console.log("two" + crystalTwo + " ", playerTotal);
    if (playerTotal === playerGoal) {
        console.log("You Win!!!")
    }
    if (playerTotal > playerGoal) {
        alert("Loser!")
    }
  });

  $("#crystal-3").on("click", function() {
    playerTotal += crystalThree;
    $("#total-score").html(playerTotal);
    console.log("three" + crystalThree + " ", playerTotal);
    if (playerTotal === playerGoal) {
        console.log("You Win!!!")
    }
    if (playerTotal > playerGoal) {
        alert("Loser!")
    }
  });

  $("#crystal-4").on("click", function() {
    playerTotal += crystalFour;
    $("#total-score").html(playerTotal);
    console.log("four" + crystalFour + " ", playerTotal);
    if (playerTotal === playerGoal) {
        console.log("You Win!!!")
    }
    if (playerTotal > playerGoal) {
        alert("Loser!")
    }
  });

  // If user total < guess total
  // 	    User can keep clicking
  
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
