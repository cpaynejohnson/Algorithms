// S(summary) - Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.


// E(examples) -  Number of vowels in text (Today is a great day!) => 7
//                 
//           
// A(approach) - Use array.includes to determine if each character in text is a vowel, if true, then add to counter. 

// T(test) - 

//  countVowels=['Four score and seven years'];


//const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//const regex = /[a,e,i,o,u]/gi;
//const found = paragraph.match(regex);

//console.log(found);
//console.log(found.length)

const array1 = ['Todayisagreatday'];

console.log(array1.includes('a'));
// expected output: true

//const pets = ['cat', 'dog', 'bat'];

//console.log(pets.includes('cat'));
// expected output: true

//console.log(pets.includes('at'));
let string = 'today is a good day'
let array1 = string.split('')
