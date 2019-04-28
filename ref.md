// Node
    // Compiler
    // Javascript engine running locally
    // Used to accumulate 'modules' into a cohesive program


// Modules
    // Every file in a Node project is referred to as a 'module'
    // Each file(module) has a exports it can use to either export
    // a function or an object using 'module.exports = '

    // To use a module(another file in your project), you have to 
    // use the 'require' keyword to import it's export
    // const data = require('./filewithmydataexport.js')


// Ex 1, Exporting an Object or a single function
    // const {sum, mult} = require('./myFunctions.js')

    // console.log(sum)

    // const value = sum(3, 4)
    // const value2 = mult(19, 29)
    // console.log(value)
    // console.log(value2)

// Ex 2 - Exporting an Object 
    // const { getNumber, setNumber } = require('./revealingpattern.js')
        // console.log(getNumber())
        // setNumber(20)
        // console.log(getNumber())


// Ex 3 - exporting a function that returns an object when called
    // const data = require('./functionpattern.js')
    // const {getName, setName } = data()

    // console.log(getName())
    // setName("Rick")
    // console.log(getName())