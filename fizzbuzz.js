const _ = require("lodash")

const message = (num) => {
    let message;

    if (num % 3 == 0 && num % 5 === 0) {
        message = 'FizzBuzz'
    } else if (num % 3 === 0) {
        message = 'Fizz'
    } else if (num % 5 === 0) {
        message = 'Buzz'
    } else {
        message = 'null'
    }
    return message
}

const result = () => {
    const arr = _.range(1, 116)
    
    console.log(arr.map(x => `${x}: ` + message(x) ))
}

result()

