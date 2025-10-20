/*

S P A C E J A M
Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).

Tests
Passed:1. spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
Passed:2. spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
Passed:3. spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
Passed:4. spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
Passed:5. spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".


*/

function spaceJam(s) {

console.log(s)
let newString = s.trim().toUpperCase()

console.log(newString)

let splittedString = newString.split("");

let newStringAfterSplittingAndRemovingBetweenSpaces=[]

for(let i=0; i<splittedString.length; i++){
  if(splittedString[i] == " "){
      continue
    }
  newStringAfterSplittingAndRemovingBetweenSpaces.push(splittedString[i])
  }

console.log(newStringAfterSplittingAndRemovingBetweenSpaces)

let joinedString = newStringAfterSplittingAndRemovingBetweenSpaces.join("  ")

console.log(joinedString)

let finalString = joinedString.toLocaleString()
  return finalString
}