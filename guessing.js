
var x = Math.floor(Math.random() * 100) + 1;
var turns = 5;
var hint = 'Guess my number, 1-100!';

while (turns > 0) {
  var guess = prompt(hint +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  guess = Number(guess);
  if (guess == x) {
    console.log('YOU WIN!');
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    turns = turns - 1;
  }
}
alert('The secret number was ' + x + '.');