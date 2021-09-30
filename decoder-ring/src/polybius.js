const polybiusModule = (function () {
    const table = {
      "a":"11", "b":"21", "c":"31", "d":"41", "e":"51",
      "f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52", 
      "l":"13", "m":"23", "n":"33", "o":"43", "p":"53",
      "q":"14", "r":"24", "s":"34", "t":"44", "u":"54",
      "v":"15", "w":"25", "x":"35", "y":"45", "z":"55",
    }
    function polybius(input, encode = true) {
      let message = input.toLowerCase()
      let messageOne = ''
      let messageTwo = ''
      if(!encode){
        let testForOdd = input.replace(/ /g, "").length
        
        
        
  //BEGINNING DECODE--------------------------
        if(testForOdd % 2 === 1){return false}      
        let wordOne = []
        let wordTwo = []
        let letter = ''
        let intoWords = message.split(" ")
        let phrase =''
        
        wordOne = intoWords[0]
        wordTwo = intoWords[1]
        if(wordOne) {
          let brokenWord = wordOne.toString().match(/.{2}/g)
          for(let i = 0; i < brokenWord.length; i++) {
            letter = Object.keys(table).find((key) => table[key]===brokenWord[i])
            if(letter === 'i' || letter === 'j') {
              letter = '(i/j)'
            }
            messageOne += letter   
          }
           wordOne = messageOne
        }
        if(wordTwo) {
          let brokenWord = wordTwo.toString().match(/.{2}/g)
          
          for(let i = 0; i < brokenWord.length; i++) {
            letter = Object.keys(table).find((key) => table[key]===brokenWord[i])
            if(letter === 'i' || letter === 'j') {
              letter = '(i/j)'
            }
            messageTwo += letter
          }
          wordTwo = messageTwo       
        }
        if(messageTwo.length>0) {
          return `${wordOne} ${wordTwo}`
        } else {
          return wordOne
        }
      }
          
      
  //BEGINNING ENCODE--------------------------
      for(let i = 0; i < message.length; i++) {
        let letter = message[i]
        if(letter.match(/[a-z]/i)) {
         letter = table[message[i]]
        }
        messageOne += letter
      }
      return messageOne
    }
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
