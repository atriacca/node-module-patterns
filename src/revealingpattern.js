
// This var is not exported as we only want the user to interact with it
// via the 'getter' and 'setter' functions we defined below and exported.
let num = 10

// get my num
function getNumber(){
    return num
}

// set new number
function setNumber(newNumber){
    num = newNumber
    return num
}

module.exports = { getNumber, setNumber }