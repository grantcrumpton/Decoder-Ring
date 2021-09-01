const { substitution } = require("../src/substitution")
const { expect } = require("chai")

describe("substitution", () => {
  let encode
  it ("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const expected = false
    const alphabet = "qwertyuiopasdfghjklzxcvbn"
    let input = "message"
    const actual = substitution(input, alphabet, encode = true)
    expect(actual).to.eql(expected)
  })
  it ("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const expected = "nfttbhf"
    const alphabet = "bcdefghijklmnopqrstuvwxyza"
    const input = "message"
    const actual = substitution(input, alphabet, encode = true)
    expect(actual).to.eql(expected)
  })
  it ("It returns false if there are any duplicate characters in the given alphabet.", () => {
    const expected = false
    const input = "should be false"
    const alphabet = "qwertyuiopassdfghjklzxcvbn"
    const actual = substitution(input, alphabet, encode = true)
    expect(actual).to.eql(expected)
  })
  /*it ("It ignores capital letters.", () => {
    const expected = "nfttbhf"
    const input = "Message"
    const alphabet = "bcdefghijklmnopqrstuvwxyza"
    const actual = substitution(input, alphabet, encode = true)
    expect(actual).to.eql(expected)
  })*/
  it("Should translate upper case the same as lower case", () => {
      let input = "Message"
      let alphabet = "qwertyuiopasdfghjklzxcvbnm"
      let answer = "dtllqut"
      const actual = substitution(input, alphabet, encode)
      expect(actual).to.eql(answer)
    })
  it ("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const expected = "tipvme cf"
    const input = "should be"
    const alphabet = "bcdefghijklmnopqrstuvwxyza"
    const actual = substitution(input, alphabet, encode = true)
    expect(actual).to.eql(expected)
  })
})