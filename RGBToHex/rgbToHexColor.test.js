const { expect } = require('chai')
const rgbToHexColor = require('./rgbToHexColor')

describe('rgbToHexColor', () => {

    it('converts red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
    })

    it('converts green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
    })

    it('converts blue  to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
    })

    it('returns undefined for str params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.equal(undefined)
    })

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined)
    })

    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined)
    })

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined)
    })

    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined)
    })

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined)
    })

    it('returns undefined for values > 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined)
    })

    //overloading

    it('converts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    })

    it('converts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    })
})
