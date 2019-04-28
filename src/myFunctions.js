// Here we are exporting an object
// with two functions inside, so when
// we require it on another file we 
// can either destructure the imports,
// or use dot notation to access them.

// Ex Destructuring
// const {sum, mult} = require('./myFunctions.js')

// Ex dot notation
// const data = require('./myFunctions.js')
// data.sum(2, 3) // 5
// data.mult(2, 3) // 6

const sum = (x, y) => {
    return x + y
}

const mult = (x, y) => {
    return x * y
}

module.exports = sum
// export default sum
// Exporting a single function is equivalent to the 'export default' syntax you use in React

module.exports = {sum, mult}
// export const sum
// export const mult

// Exporting an Object with multiple functions/variables inside is the equivalent of a 'export' in React
