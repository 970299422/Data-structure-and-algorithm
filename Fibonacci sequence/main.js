const { timeTools } = require('../timeTools')

const fib1 = (n) => {
  if (n <= 1) return n
  return fib1(n - 1) + fib1(n - 2)
}

const fib2 = (n) => {
  let first = 0
  let second = 1
  for (let i = 0; i < n - 1; i++) {
    let sum = first + second
    first = second
    second = sum
  }
  return second
}

timeTools('fib1', () => {
  console.log(fib1(38))
})

timeTools('fib2', () => {
  console.log(fib2(38))
})
