import add from '../src/add.js'

describe("add", () => {
    it("should handle undefined values", () => {
        const result = add(undefined, undefined)
        expect(result).toEqual(0)
    })
})