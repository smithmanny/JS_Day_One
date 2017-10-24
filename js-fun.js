const _ = require("lodash")

// const add = (a, b = 1) => console.log(a + b)
// add(21)

// const multiply = (a, b = 2) => console.log(a * b)
// multiply(10)

// const subtract = (a, b = 1) => console.log(a - b)
// subtract(5)

const arr = _.range(1, 101)

const func = () => {
    console.log(arr.map(x => x + 1))
}

func(); 
