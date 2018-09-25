
// create array words
var words = [
    "middlemoon",
    "moon",
    "tree",
    "bluetooth"
];
// select random word in words
var answerWord = words[Math.floor(Math.random() * words.length)];
// create answer _
var arrayAnswer = [];
for(let i = 0; i < answerWord.length; i++) {
    arrayAnswer[i] = "_";
}
console.log(arrayAnswer);
// create remain
remainLetters = answerWord.length;
// loop
do {
    alert(arrayAnswer.join(" "));
    var guess = prompt('Input letter');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Please enter 1 charactor');
    } else {
        for(let j = 0; j < answerWord.length; j++) {
            if (answerWord[j] === guess) {
                arrayAnswer[j] = guess;
                remainLetters--;
            }
        }
    }
} while (remainLetters > 0)
alert('Good job! Answer is ' + arrayAnswer.join(''));