const validator = require("../common/email-validator")
describe("Email validator spec", ()=>{
    
    it("should return true for valid emails of the for xxxx@xxxx.xx", ()=>{
        expect(validator.isEmailValid("ah@gmail.com")).toBe(true)
    })
    it("should return false for invalid emails such as xxx@aaa", () => {
        expect(validator.isEmailValid("hallo@world")).toBe(false)
    })
})
