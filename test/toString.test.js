import toString from '../src/toString.js'
import { expect } from 'chai'

describe("toString", () => {
    it("should stringify undefined", () => {
        const result = toString(undefined)
        expect(result).to.equal("undefined")
    })
    it("should stringify an array", () => {
        const result = toString([1, 2, 3])
        expect(result).to.equal("1,2,3")
    })
    it("should stringify positive integer", () => {
        //expect().to.be.true
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