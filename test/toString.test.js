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
        
    })
    it("should stringify negative integer", () => {
        
    })
    it("should stringify positive double", () => {
        
    })
    it("should stringify zero", () => {
        
    })
    it("should return string unchanged", () => {
        
    })
    it("should stringify Infinity", () => {
        
    })
    it("should stringify large number", () => {
        
    })
})