/*

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.


Tests

1. isBalanced("racecar") should return true.
Passed:2. isBalanced("Lorem Ipsum") should return true.
Passed:3. isBalanced("Kitty Ipsum") should return false.
Passed:4. isBalanced("string") should return false.
Passed:5. isBalanced(" ") should return true.
Passed:6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
Passed:7. isBalanced("123A#b!E&*456-o.U") should return true.

*/


function isBalanced(s) {

  /*

  first calcualte the lenght of the string
  if its odd ignore the centre character 
  if the length is odd how would you divide string 
  suppose if length is 5 suraj divide length by 2
  and then floor it it gives us the number strings middle character position and ignore that 
  if it is not odd divide the string in two strings

  now the algorithm

  divide the string into firstHalf and secondHalf

  now loop through each string and check whenther each character of the string includes in vowels character list
  
  */ 
  let vowel="aeiou"

  let firstHalf, secondHalf, firstHalfVowel=0, secondHalfVowel=0;

  if(s.length == 1){
    return true
  }

  if(s.length % 2 == 0){
    firstHalf = s.slice(0,Math.floor(s.length/2));
    secondHalf = s.slice(Math.floor(s.length/2),s.length);
  } else {
    firstHalf = s.slice(0,Math.floor(s.length/2));
    secondHalf = s.slice(Math.floor(s.length/2) + 1,s.length);
  }

  for(let i = 0; i<firstHalf.length; i++){
    if(vowel.includes(firstHalf[i].toLowerCase())){
      firstHalfVowel += 1;
    }
  }

  for(let i = 0; i<secondHalf.length; i++){
    if(vowel.includes(secondHalf[i].toLowerCase())){
      secondHalfVowel += 1;
    }
  }



if(firstHalfVowel == secondHalfVowel){
  return true;
} else return false

}