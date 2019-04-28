
// Here we are exporting an anonymous
// function, so when it is required
// on the other page it still has to 
// be called to get the returned object.

module.exports = () => {
    const x = 10
    const y = 20
    let name = "steve"

    const getName = () => {
        console.log(x)
        console.log(y)
        return name
    }

    const setName = (newName) => {
        name = newName
        return name
    }

    return { getName, setName }
}