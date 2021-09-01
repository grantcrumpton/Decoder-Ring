const { polybius } = require("../src/polybius")
const { expect } = require("chai")

describe("polybius", () => {
  it ("It return false when decoding an odd number of input.", () => {
    const expected = false
    const input = "11 2 55"
    let encode
    const actual = polybius(input, encode=false)
    expect(actual).to.eql(expected)
  })
  it ("When encoding, it translates the letters i and j to 42", () => {
    const expected = "42"
    const input = "i"
    let encode
    const actual = polybius(input, encode=true)
    expect(actual).to.eql(expected)
  })
  it ("When decoding, it translates 42 to (i/j)", () => {
    const expected = "(i/j)"
    const input = "42"
    let encode
    const actual = polybius(input, encode=false)
    expect(actual).to.eql(expected)
  })
  it ("It ignores capital letters.", () => {
    const expected = "23513434112251"
    const input = "Message"
    let encode
    const actual = polybius(input, encode=true)
    expect(actual).to.eql(expected)
  })
  it ("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const expected = "11 23513434112251"
    const input = "a message"
    let encode
    const actual = polybius(input, encode=true)
    expect(actual).to.eql(expected)
  })
})