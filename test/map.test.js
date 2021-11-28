import map from '../src/map.js'

describe("map", () => {
    it("should apply iteratee to number array", () => {
        const result = map(Array(-100, -50, 20, 5.5), (x) => x * 2)
        expect(result).toEqual(expect.arrayContaining(Array(-200, -100, 40, 11)))
    })
    it("should return array of same length as input array", () => {
        const input = Array(1, 2, 3, "String 1", "String 2")
        const result = map(input, (x) => x)
        expect(result.length).toEqual(input.length)
    })
    it("empty input array should yield empty array", () => {
        const result = map(Array(), (x) => x * 2)
        expect(result.length).toEqual(0)
    })
    it("should throw error for non-array input", () => {
        expect(() => {
            map({ id: 123, name: "John Doe"}, (obj) => obj.name)
        }).toThrow()
    })
    it("should handle array of objects correctly", () => {
        const result = map(Array({ id: 1, name: "John Doe" }, { id: 2, name: "Jill Doe"}), (person) => person.name)
        expect(result).toEqual(expect.arrayContaining(Array("John Doe", "Jill Doe")))
    })
    it("should throw error for invalid iteratee", () => {
        expect(() => {
            map(Array(1, 2, 3), undefined)
        }).toThrow()
    })
})