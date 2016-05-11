
const emailValidationRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

function isEmailValid(email){
    if(!(typeof email === 'string')) return false
    return emailValidationRegex.test(email)
}

module.exports.isEmailValid = isEmailValid
module.exports.emailValidationRegex = emailValidationRegex