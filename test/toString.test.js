import isSymbol from '../src/isSymbol.js'
import toString from '../src/toString.js'

jest.mock('../src/isSymbol.js')

describe("toString", () => {
    it("should stringify undefined", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(undefined)
        expect(result).toEqual("undefined")
    })
    it("should stringify an array", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString([1, 2, 3])
        expect(result).toEqual("1,2,3")
    })
    it("should stringify positive integer", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(200)
        expect(result).toEqual("200")
    })
    it("should stringify negative integer", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(-300)
        expect(result).toEqual("-300")
    })
    it("should stringify positive double", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(50.5)
        expect(result).toEqual("50.5")
    })
    it("should stringify zero", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(0)
        expect(result).toEqual("0")
    })
    it("should return string unchanged", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString("Already a string")
        expect(result).toEqual("Already a string")
    })
    it("should stringify Infinity", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(Infinity)
        expect(result).toEqual("Infinity")
    })
    it("should stringify large number", () => {
        isSymbol.mockReturnValueOnce(false)

        const result = toString(Number.MAX_VALUE)
        expect(result).toEqual(Number.MAX_VALUE.toString())
    })
})