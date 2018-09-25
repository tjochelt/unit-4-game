// 4 crystals are buttons

// Each crystal holds random number between 1 and 12
// Random number to match should be between 19 and 120
$(document).ready(function() {
  

    function getRandom() {
        return Math.floor(Math.random() * (120-19 + 1)) + 19;
    }
    console.log(getRandom())
// console.log(getRandom)
    // function randomNumber() {
    //     var randomNumber = Math.floor(math.random()* 120);
    //     return randomNumber();
    //     console.log(randomNumber())

    // var randomNumber = math.floor(math.random())

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