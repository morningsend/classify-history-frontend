const hashPass = require("../common/hash-password")

describe("Password hashing function test", ()=>{
    var password = "12345678"
    var ph = {}
    it("should compute a hash and salt based on the password", (done)=>{
        var promise = hashPass.hashPassword(password).then((ph)=>{
            expect(ph).not.toBe(null)
            expect(ph.hash).not.toBe(null)
            expect(ph.alt).not.toBe(null)
            done()
        })
    })
    it("should verify the same password to be true", (done) => {
        var promise = hashPass.hashPassword(password).then((hh)=>{
            return hashPass.verifyPassword(password, hh.hash, hh.salt)
        }).then(result =>{
            expect(result).toBe(true)
            done()
        })
    })
    it("should verify the different password to be false", (done) => {
        var promise = hashPass.hashPassword("abcded").then((hh)=>{
            return hashPass.verifyPassword(password, hh.hash, hh.salt)
        }).then(result =>{
            expect(result).toBe(false)
            done()
        })
    })
})