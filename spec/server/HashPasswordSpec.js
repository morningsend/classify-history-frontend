const hashPass = require("../../server/common/hash-password")

describe("Password hashing function test", ()=>{
    var password = "12345678"
    var ph = {}
    it("should compute a hash and salt based on the password", (done)=>{
        var promise = hashPass.hashPassword(password).then((ph)=>{
            expect(ph).not.toBe(null)
            expect(ph.password_hash).not.toBe(null)
            expect(ph.password_salt).not.toBe(null)
            done()
        })
    })
})