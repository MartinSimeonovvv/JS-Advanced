const { expect } = require('chai')
const isOddOrEven = require('./isOddOrEven')

describe('isOddOrEven', () => {
    it('Params not string', () => {
        expect(isOddOrEven(3)).to.equal(undefined)
    })
    it('String with even length', () => {
        expect(isOddOrEven('even')).to.equal('even')
    })
    it('String with odd length', () => {
        expect(isOddOrEven('odd')).to.equal('odd')
    })

    //test overloading
    it('String with odd length multiple', () => {
        expect(isOddOrEven('oddEven')).to.equal('odd')
    })
})