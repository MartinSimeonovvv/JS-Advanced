const { expect } = require('chai')
const lookupChar = require('./lookupChar')

describe('lookupChar', () => {
    it('first parameter is NOT a string', () => {
        expect(lookupChar(3, 2)).to.equal(undefined)
    })
    it('second parameter is NOT a number', () => {
        expect(lookupChar('string', 'notNum')).to.equal(undefined)
    })
    it('second parameter is NOT an integer', () => {
        expect(lookupChar('string', 3.3)).to.equal(undefined)
    })
    it('first parameter is empty', () => {
        expect(lookupChar('', 'notNum')).to.equal(undefined)
    })
    it('second parameter is bigger than string length', () => {
        expect(lookupChar('string', 8)).to.equal('Incorrect index')
    })
    it('second parameter is equal to string length', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index')
    })
    it('second parameter is negative number', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index')
    })
    it('character at the specified index', () => {
        expect(lookupChar('string', 3)).to.equal('i')
    })
})