require("../src/index.js")
const assert = require('assert')
const fizzBuzz = require("../src/index.js")

describe("FizzBuzz", function() {
    it("returns fizz when given 3", function() {
        const result = fizzBuzz(3)
        assert.equal(result, "Fizz")
    })

    it("returns buzz when give 5", function() {
        assert.equal(fizzBuzz(5), "Buzz")
    })

    it("returns Fizzbuzz when given 15", function() {
        assert.equal(fizzBuzz(15), "FizzBuzz")
    })
    
    it ("returns fizz when given 6", function () {
        assert.equal(fizzBuzz(6), "Fizz")
    })
})