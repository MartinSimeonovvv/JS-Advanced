const { expect } = require('chai')
const isSymmetric = require('./checkForSymmetry')

describe('isSymetric', () => {
    it('return true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.true
    })

    it('return false for valid non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.false
    })

    it('return false for invalid argument', () => {
        expect(isSymmetric('a')).to.false
    })

    it('return false for type-coerced elements', () => {
        expect(isSymmetric(['1', 1])).to.false
    })

    //test overloading
    it('return true for valid symmetric odd input element', () => {
        expect(isSymmetric([1, 1, 1])).to.true
    })

    it('return true for valid symmetric str array', () => {
        expect(isSymmetric(['a', 'a'])).to.true
    })

    it('return false for valid non-symmetric str array', () => {
        expect(isSymmetric('a', 'b')).to.false
    })
})

// •	Take an array as argument
// •	Return false for any input that isn’t of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false