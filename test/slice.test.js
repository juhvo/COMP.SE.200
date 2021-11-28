import slice from '../src/slice.js'

describe("slice", () => {
    it("should be items from array when the positive start and end is provided and array consists of numbers", () => {
        const result = slice(Array(1,2,3,4), 1, 3)
        expect(result).toEqual(expect.arrayContaining(Array(1,2,3)))
    })
    it("should be items from array when start and end are positive, and array consists of text", () => {
        const input = Array("John", "Doe", "Test", "User", "Testing", "Data")
        const result = slice(input, 1, 5)
        expect(result).toEqual(expect.arrayContaining(Array("John", "Doe", "Test", "User", "Testing")))
    })
    it("should be correct when start is positive, and end is negative number", () => {
        const input = Array(1,2,3,4,5)
        const result = slice(input, 2, -1)
        expect(result).toEqual(expect.arrayContaining(Array(3, 4)))
    })
    it("should behave gracefully when the start is negative, and end is a positive number", () => {
        const input = Array(1,2,3,4,5)
        const result = slice(input, -2, 1)
        expect(result.length).toEqual(0)
    })
})