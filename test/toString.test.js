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
        //expect().to.be.true
    })
    it("should stringify positive double", () => {
        //expect().to.be.true
    })
    it("should stringify zero", () => {
        //expect().to.be.true
    })
    it("should return string unchanged", () => {
        //expect().to.be.true
    })
    it("should stringify Infinity", () => {
        //expect().to.be.true
    })
    it("should stringify large number", () => {
        //expect().to.be.true
    })
})