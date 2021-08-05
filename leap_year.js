function isLeapYear(start, end) {
    let result = []
    for(let i = start; i <= end; i++) {
        if (i % 4 == 0 && i % 100 != 0) {
            result.push(i)
        } else if(i % 400 == 0) {
            result.push(i)
        }
    }

    return result.toString() //! output dalam bentuk string
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

    return result //! output dalam bentuk array
}

console.log(isLeapYear(1900, 2020))
console.log(isLeapYear2(1900, 2020))

// output: 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020
