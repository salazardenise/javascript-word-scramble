// Create a function that reverses a word
function reverseWord(word) {
  return word.split('').reverse().join('');
}

// Create a function that takes an array of words and returns a new array of the
// words with each word reversed.
function reverseWordList(words) {
  return words.map((word) => reverseWord(word));
}

// Create a function that returns a random word from an array
function randomWord(words) {
  const wordIdx = Math.floor(Math.random() * words.length);
  return words[wordIdx];
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.
let words = ['lion', 'zebra', 'cat', 'dog'];
let reversedWords = reverseWordList(words);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.
function getAnswerMap(words) {
  const answerMap = new Map();
  for (let word of words) {
    answerMap.set(reverseWord(word), word);
  }
  return answerMap;
}

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.
function checkGuess(guess, word, answerMap) {
  
  }
  console.log(`Sorry, incorrect. The word was ${word}`);
}

function checkGuess2(guess, word, answerMap) {
  if (answerMap.has(guess)) {
    return answerMap.get(guess);
  }
  console.log(`Sorry, incorrect. The word was ${word}`);
}
// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.


// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
