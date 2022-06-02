require("../src/index.js")
const assert = require('assert')
const fizzBuzz = require("../src/index.js")

describe("FizzBuzz", function() {
    it("returns fizz when given 3", function() {
        const result = fizzBuzz(3)
        assert.equal(result, 3)
    })
})