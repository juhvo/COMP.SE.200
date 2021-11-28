import ceil from '../src/ceil.js'

describe("ceil", () => {
    it("should should round positive decimal to next integer", () => {
        const result = ceil(0.6)
        expect(result).toEqual(1)
    })
    it("should round negative decimal to nearest integer", () => {
        const result = ceil(-5.1)
        expect(result).toEqual(-5)
    })
    it("should round a number to the nearest decimal number if precision is provided", () => {
        const result = ceil(9.003, 2)
        expect(result).toEqual(9.01)
    })
    it("should round a number to backwards if the precision is provided as a negative number", () => {
        const result = ceil(9050, -2)
        expect(result).toEqual(9100)
    })
})