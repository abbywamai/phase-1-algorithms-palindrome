function isPalindrome(word) {
  if(word == palidrome){
    return true
  }else(){
    return false
  }
  console.log(abba)
  console.log(racecar)
  console.log(ab)
  console.log(robot)
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
