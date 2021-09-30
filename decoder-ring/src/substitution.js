const substitutionModule = (function () {
    function checkIfDuplicateExists(str){
      return new Set(str).size !== str.length 
  }
    function substitution(input, alphabet, encode = true) {
      if(!alphabet || alphabet.length !== 26){return false}
      if(checkIfDuplicateExists(alphabet)){return false}
      let lowerInput = input.toLowerCase()
      console.log(lowerInput)
      let returnedMessage = ''  
        if(encode){
          let referenceAlphabet = "abcdefghijklmnopqrstuvwxyz"
          for(let i = 0; i < lowerInput.length; i++) {
            let index = referenceAlphabet.indexOf(lowerInput.charAt(i))
            if(lowerInput.charAt(i) === " "){
               returnedMessage += lowerInput.charAt(i)
            } else {
                returnedMessage = returnedMessage + alphabet.charAt(index)
            }
          }
        } else {
        let referenceAlphabet = "abcdefghijklmnopqrstuvwxyz"
          for(let i = 0; i < lowerInput.length; i++) {
            let index = alphabet.indexOf(input.charAt(i))
            if(lowerInput.charAt(i) === " "){
               returnedMessage += lowerInput.charAt(i)
            } else {
                returnedMessage = returnedMessage + referenceAlphabet.charAt(index)
            }
          }
        }
      console.log(returnedMessage)
      return returnedMessage
    }
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  
