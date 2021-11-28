import filter from '../src/filter.js'

describe("filter", () => {
    it("should throw error for non-array input", () => {
        const result = filter({ id: 123, name: "John Doe" }, (value, index, array) => value.name)
        expect(result).toThrow()
    })
    it("should throw error for non-array input", () => {
        const result = filter({ length: 666 }, (obj) => obj.length <= 666)
        expect(result).toThrow()
    })
    it("should throw error for non-function predicate", () => {
        const result = filter(Array({ id: 123, name: "John Doe"}), "not a function")
        expect(result).toThrow()
    })
    it("should return gracefully with mismatching predicate", () => {
        const result = filter(Array({ id: 123, name: "John Doe"}), (value, index, array) => value.inexistingProp)
        expect(result.length).toEqual(0)
    })
    it("should filter out integers from an array of mixed types", () => {
        const result = filter(Array(1000, "String1", 2000, "String2"), (value, index, array) => !value.isInteger)
        expect(result).toEqual(expect.arrayContaining(Array("String1", "String2")))
    })
})