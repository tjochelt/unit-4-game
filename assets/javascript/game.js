// 4 crystals are buttons

// Random number to match should be between 19 and 120
$(document).ready(function() {
  var playerGoal;
  var playerTotal;

  //sets player goal as random number between 19-120
  $("#random-number").text(function() {
    playerGoal = Math.floor(Math.random() * 102) + 19;
  });
$("#random-number").html(playerGoal);
// console.log(playerGoal)

  // Each crystal holds random number between 1 and 12
  //Clicking on the crystal adds the random number to playerTotal
  $("#crystal-1").on("click", function() {
    playerTotal = function getRandom() {
      return Math.floor(Math.random() * 12) + 1;
    };
  });
  console.log(playerTotal);
  // $(".random-number").append(getRandom())

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
