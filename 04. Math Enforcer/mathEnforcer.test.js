const { expect } = require('chai')
const mathEnforcer = require('./mathEnforcer').mathEnforcer

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('parameter is NOT a number', () => {
            expect(mathEnforcer.addFive('string')).to.equal(undefined)
        })
        it('parameter is a positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('parameter is a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })
        it("should return correct result for floating point parameter", () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    })
    describe('subtractTen', () => {
        it('parameter is NOT a number', () => {
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined)
        })
        it('parameter is a positive number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5)
        })
        it('parameter is a negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
        })
        it("should return correct result for floating point parameter", () => {
            expect(mathEnforcer.subtractTen(11.14)).to.be.closeTo(1.14, 0.01);
        });
    })
    describe('sum', () => {
        it('If any of the 2 parameters is NOT a number', () => {
            expect(mathEnforcer.sum('string', 2)).to.equal(undefined)
            expect(mathEnforcer.sum(2, 'string')).to.equal(undefined)
        })
        it('both parameters are numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10)
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        })
    })
})