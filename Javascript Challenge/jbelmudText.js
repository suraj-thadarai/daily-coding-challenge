function jbelmu(text) {

  let finalString=[];

  const wordsArray = text.split(" ")

  console.log('wordsArray is', wordsArray)

  // now take each word and and check their length if word length is two or less than two no changes in the word and push to the finalString Array

  // if the word length is greater than two then the words first and second letter will not be changed only the middle part will change their places according to the aplhabetically sorting.

  // loop through words array
  for(let i=0; i<wordsArray.length; i++){
    // check if words length two or less than 2 then push to the finalString Array

    if(wordsArray[i].length<=2){
      finalString.push(wordsArray[i])
    }
    
    console.log("wordsArray[i]", wordsArray[i])

    if(wordsArray[i].length>2){
      let finalWord = null
      let slicedword = wordsArray[i].slice(1,-1)
      console.log("slicedword is",slicedword)
      const sortedWord = slicedword.split("").sort().join("")
      
      console.log("sortedWord is", sortedWord)

      finalWord = wordsArray[i][0] + sortedWord + wordsArray[i][wordsArray[i].length-1]

      console.log('finalWord is', finalWord)

      finalString.push(finalWord)
      
    }
  }

  console.log("finalString is", finalString.join(" "))

  return finalString.join(" ");
}


jbelmu("hello world")