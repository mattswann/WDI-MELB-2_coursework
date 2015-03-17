var ranNum;
function playGame ( ) {
  var answer;
  var fnd = false;
  var cnt = 10;
  while ((cnt > 0) && (fnd == false)) {
    answer = prompt("Guess a number between 1 and 50!");
    if (answer > ranNum) { alert("Guess lower!"); }
    if (answer < ranNum) { alert("Guess higher!!"); }
    if (answer == ranNum) { alert("Correct!"); fnd = true; }
    cnt--;
  }
  if (!fnd) { alert('Too bad, you lose ... The number was '+ranNum); }
  return fnd;
}
function generateRandomNumber() {
  ranNum = Math.floor(Math.random()*50)+1;
}
window.onload = function() { generateRandomNumber(); }