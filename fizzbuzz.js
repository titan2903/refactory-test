function fizzbuzz(n) {
    let result = []
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if(i % 3 === 0) {
            result.push("Fizz")
        } else if(i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i.toString())
        }
    }

    return result
}

console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))

/**
 //Example 1
    Input: n = 3
    Output: ["1","2","Fizz"]

// Example 2
    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"]

// Example 3
    Input: n = 15
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */
