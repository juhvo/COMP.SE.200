import isSymbol from '../src/isSymbol.js'
import isObject from '../src/isObject.js'
import toNumber from '../src/toNumber.js'

jest.mock('../src/isSymbol.js')
jest.mock('../src/isObject.js')

describe("toNumber", () => {
    it("should transform integer string to number type", () => {
        const input = "1234"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(1234)
    })
    it("should return NAN for non-number string", () => {
        const input = "Beverages"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(NaN)
    })
    it("should transform float string to number", () => {
        const input = "123.55"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(123.55)
    })
    it("should transform localized string number to number", () => {
        const input = "2,500.99"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(2500.99)
    })
    it("localized string representation should be transformed to Number correctly", () => {
        const input = "5 900 000"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(5900000)
    })
    it("should transform string \"Infinity\" to number type Infinity", () => {
        const input = "Infinity"
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(Infinity)
    })
    it("should transform MAX_VALUE string to number", () => {
        const input = `${Number.MAX_VALUE}`
        isSymbol.mockReturnValueOnce(false)
        isObject.mockReturnValueOnce(false)

        const result = toNumber(input)
        expect(result).toEqual(Number.MAX_VALUE)
    })
})