/**
 * 
 
    Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.

 */


function areAnagrams(str1, str2) {

  if(str1.length == str2.length){

    if(str1.toLowerCase().split("").sort().join("") == str2.toLowerCase().split("").sort().join("")){
      return true
    } else return false
    
  }

  return false;
}