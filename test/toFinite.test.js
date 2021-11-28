import toNumber from '../src/toNumber.js'
import toFinite from '../src/toFinite.js'

jest.mock('../src/toNumber.js')

describe("toFinite", () => {
    it("should clamp infinity to MAX_VALUE", () => {
        const input = Infinity
        toNumber.mockReturnValueOnce(Infinity)

        const result = toFinite(input)
        expect(result).toEqual(Number.MAX_VALUE)
    })
    it("should clamp negative infinity to MIN_VALUE", () => {
        const input = -Infinity
        toNumber.mockReturnValueOnce(-Infinity)

        const result = toFinite(input)
        expect(result).toEqual(Number.MIN_VALUE)
    })
    it("REMOVE THIS should clamp greater than MAX_VALUE to Infinity", () => {
        // This test is designed incorrectly: greater than MAX_VALUE would be Infinity and that's already tested
        expect(false).toEqual(true)
    })
    it("REMOVE THIS should clamp negative infinity to MIN_VALUE", () => {
        // This test is designed incorrectly: lesser than MIN_VALUE would be -Infinity and that's already tested
        expect(false).toEqual(true)
    })
    it("should return already finite input", () => {
        const input = 1000.99
        toNumber.mockReturnValueOnce(1000.99)

        const result = toFinite(input)
        expect(result).toEqual(input)
    })
    it("should return already finite input", () => {
        const input = Number.MAX_VALUE
        toNumber.mockReturnValueOnce(Number.MAX_VALUE)

        const result = toFinite(input)
        expect(result).toEqual(input)
    })
    it("should return already finite input", () => {
        const input = Number.MIN_VALUE
        toNumber.mockReturnValueOnce(Number.MIN_VALUE)

        const result = toFinite(input)
        expect(result).toEqual(input)
    })
})