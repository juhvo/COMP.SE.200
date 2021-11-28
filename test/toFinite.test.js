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