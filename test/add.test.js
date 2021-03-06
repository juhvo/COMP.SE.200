import add from '../src/add.js'

describe("add", () => {
    it("should handle undefined values", () => {
        const result = add(undefined, undefined)
        expect(result).toEqual(0)
    })
    it("should handle on defined and other undefined input", () => {
        const result = add(2, undefined)
        expect(result).toEqual(2)
    })
    it("should handle on undefined and other defined input", () => {
        const result = add(undefined, 2)
        expect(result).toEqual(2)
    })
    it("should handle string inputs", () => {
        const result = add("Test", "Data")
        expect(result).toEqual("TestData")
    })
    it("should add valid input numbers", () => {
        const result = add(4, 5)
        expect(result).toEqual(9)
    })
    it("should handle addition of negative numbers", () => {
        const result = add(4, -3)
        expect(result).toEqual(1)
    })
})