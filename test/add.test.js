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
})