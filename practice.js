// Arrays
const greeting = 'We can do it!';
const chars = greeting.split('');
const joinedChars = chars.join('');
let i = Math.floor(Math.random() * chars.length);
let randomLetter = chars[i];
let j = Math.floor(Math.random() * chars.length);
let temp = chars[i];
chars[i] = chars[j];
chars[j] = temp;

// Maps
const candy = new Map();
candy.set('purple', 'grape');
candy.set('green', 'lime');
candy.set('red', 'cherry');
candy.set('orange', 'oragne');
candy.set('pink', 'strawberry');

for (let flavor of candy) {
  console.log(`The ${flavor[1]} is colored ${flavor[0]}`);
}

let a = candy.get('green');
let b = candy.get('yellow');

function getFlavor(color, candy) {
  if (candy.has(color)) {
    return candy.get(color);
  }
  console.log('Sorry, that color doesn\'t have a flavor');
}
