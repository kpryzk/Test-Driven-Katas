const {expect} = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('returns an empty string if empty string provided', () => {
    expect(wrap("", 10)).to.equal("")
  })

  it('line is less than max length', () => {
    expect(wrap("words", 20)).to.equal("words")
  })

  it('takes in a string and returns string with line breaks', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  })

})

