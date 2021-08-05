function isLeapYear(start, end) {
    let result = []
    for(let i = start; i <= end; i++) {
        if (i % 4 == 0 && i % 100 != 0) {
            result.push(i)
        } else if(i % 400 == 0) {
            result.push(i)
        }
    }

    return result.toString()
}

function isLeapYear2(start, end) {
    let result = []
    for(let i = start; i <= end; i++) {
        if (i % 4 == 0 && i % 100 != 0) {
            result.push(i)
        } else if(i % 400 == 0) {
            result.push(i)
        }
    }

    return result
}

console.log(isLeapYear(1900, 2020))
console.log(isLeapYear2(1900, 2020))