function nearestFibonacci(num) {
    let number = 0
    for(const element of num) {
        number += element
    }
  
    let first = 0
    let second = 1
    let third = first + second

    while (third <= number) {
        first = second
        second = third
        third = first + second
    }

    let result;
    if(Math.abs(third - number) >= Math.abs(second - number)) {
        result = second
    } else {
        result = third
    }

    return result - number
}

console.log(nearestFibonacci([15,1,3]))

// output: 2
// Because by the above input example [15,1,3], if we add up them it will 15+1+3 = 19, and the nearest fibonacci of 19 is 21, so we need to add 2 then it can be 21.