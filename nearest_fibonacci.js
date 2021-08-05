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