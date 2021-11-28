import toFinite from '../src/toFinite.js'
import toInteger from '../src/toInteger.js'

jest.mock('../src/toFinite.js')

describe("toInteger", () => {
    it("should return input integer unchanged", () => {
        const input = 10
        toFinite.mockReturnValueOnce(10)

        const result = toInteger(input)
        expect(result).toEqual(10)
    })
    it("should cast input float to integer", () => {
        const input = 10.00
        toFinite.mockReturnValueOnce(10.00)

        const result = toInteger(input)
        expect(result).toEqual(10)
    })
    it("should return NaN for non-number string", () => {
        const input = "Hello World"
        toFinite.mockReturnValueOnce(0)

        const result = toInteger(input)
        expect(result).toEqual(NaN)
    })
    it("should behave gracefully on providing symbols", () => {
        const input = "$%"
        toFinite.mockReturnValueOnce(0)

        const result = toInteger(input)
        expect(result).toEqual(NaN)
    })
    it("should provide output when a number is provided with spaces", () => {
        const input = " 10"
        toFinite.mockReturnValueOnce(10)

        const result = toInteger(input)
        expect(result).toEqual(10)
    })
    // Update test plan: remove condition and change expected return value
    it("should transform localized string number to number", () => {
        const input = "2,500.99"
        toFinite.mockReturnValueOnce(2500.99)

        const result = toInteger(input)
        expect(result).toEqual(2500)
    })
    it("Localized string representation should be transformed to Number correctly", () => {
        const input = "5 900 000"
        toFinite.mockReturnValueOnce(5900000)

        const result = toInteger(input)
        expect(result).toEqual(5900000)
    })
})