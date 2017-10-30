const curry = f => x => (...args) => f(x, ...args)

const flip = f => (a, b) => f(b, a)

const modulo = (a, b) => a % b

const cFlip = f => b => (a, ...rest) => f(a, b)
// curry(flip)

const mod = cFlip(modulo)
// b => a => a % b

console.log(mod(2)(21))
// a => b % a