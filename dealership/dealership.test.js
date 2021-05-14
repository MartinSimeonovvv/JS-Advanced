const { expect } = require('chai')
const dealership = require('./dealership')

describe('dealership', () => {
    describe('newCarCost', () => {
        it('returns original price when model unsupported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1)
        })
        it('returns discounted price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000)
        })
    })

    describe('carEquipment', () => {
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['heated seats'], [0])).to.deep.equal(['heated seats'])
        })

        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c'])
        })
    })

    describe('euroCategory', () => {
        it('category below 4', () => {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('category above 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${14250}.`)
        })
        it('category equals 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${14250}.`)
        })
    })
})