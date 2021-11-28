import divide from '../src/divide.js'

describe("divide", () => {
    it("should hande invalid inputs gracefully", () => {
        const result = divide(undefined, undefined)
        expect(result).toEqual(0)
    })
    it("should not break if any of the 2 values is undefined", () => {
        const result = divide(6, undefined)
        expect(result).toEqual(NaN)
    })
    it("should respond to strings gracefully", () => {
        const result = divide("Test", "Data")
        expect(result).toEqual(NaN)
    })
    it("should divide two numbers successfully", () => {
        const result = divide(5, 2)
        expect(result).toEqual(2.5)
    })
})