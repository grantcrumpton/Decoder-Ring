// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {    
    function caesar(input, shift, encode = true) {
      let message = input.toLowerCase()
      let newMessage = ""
      if(!shift || shift < -25 || shift > 25) {
        return false
      }
      if(shift < 0){
        shift += 26
      }
      if(encode){
        for(let i = 0; i < message.length; i++){
          let code
          let currentLetter = message[i]
          let newLetter
          if(currentLetter.match(/[a-z]/g)) {
            code = message.charCodeAt(i)
            code += shift
            if(code > 122) {
                code-=26
              }
            currentLetter = String.fromCharCode(code)     
           }
          newMessage += currentLetter
        }
      }
      if(!encode){
        shift = -shift
        for(let i = 0; i < message.length; i++){
          let code
          let currentLetter = message[i]
          let newLetter
          if(currentLetter.match(/[a-z]/g)) {
            code = message.charCodeAt(i)
            code += shift
            if(code < 97) {
              code += 26
             }
            currentLetter = String.fromCharCode(code)     
           }
          newMessage += currentLetter
        }
      }
      return newMessage
    }
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };