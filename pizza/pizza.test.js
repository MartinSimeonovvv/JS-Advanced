const { expect } = require('chai')
const pizzUni = require('./pizza')

describe('pizzUni', () => {

    describe('makeAnOrder', () => {
        let pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' }
        let pizzaDrink = { orderedDrink: 'drink' }
        let pizzaFood = { orderedPizza: 'pizza' }
        let noPizza = {}

        it('Only drink order', () => {
            expect(() => pizzUni.makeAnOrder(pizzaDrink)).to.throw('You must order at least 1 Pizza to finish the order.')
        })

        it('Empty object', () => {
            expect(() => pizzUni.makeAnOrder(noPizza)).to.throw('You must order at least 1 Pizza to finish the order.')
        })

        it('Only pizza order', () => {
            expect(pizzUni.makeAnOrder(pizzaFood)).to.equal('You just ordered pizza')
        })

        it('Pizza and drink order', () => {
            expect(pizzUni.makeAnOrder(pizza)).to.equal('You just ordered pizza and drink.')
        })
    })

    describe('getRemainingWork', () => {
        let statusArr = [
            { pizzaName: 'pizza1', status: 'ready' },
            { pizzaName: 'pizza2', status: 'ready' },
            { pizzaName: 'pizza3', status: 'preparing' },
            { pizzaName: 'pizza4', status: 'preparing' },
        ]

        let statusReady = [
            { pizzaName: 'pizza1', status: 'ready' },
            { pizzaName: 'pizza2', status: 'ready' },
        ]

        let statusPreparing = [
            { pizzaName: 'pizza3', status: 'preparing' },
            { pizzaName: 'pizza4', status: 'preparing' },
        ]

        it('Ready', () => {
            expect(pizzUni.getRemainingWork(statusReady)).to.equal('All orders are complete!')
        })

        it('Preparing', () => {
            expect(pizzUni.getRemainingWork(statusPreparing)).to.equal('The following pizzas are still preparing: pizza3, pizza4.')
        })

        it('Preparing', () => {
            expect(pizzUni.getRemainingWork(statusArr)).to.equal('The following pizzas are still preparing: pizza3, pizza4.')
        })
    })

    describe('orderType', () => {
        let typeOfOrder1 = 'Carry Out'
        let typeOfOrder2 = 'Delivery'
        let totalSum = 2

        it('Carry Out', () => {
            expect(pizzUni.orderType(totalSum, typeOfOrder1)).to.equal(1.8)
        })

        it('Delivery', () => {
            expect(pizzUni.orderType(totalSum, typeOfOrder2)).to.equal(2)
        })
    })
})