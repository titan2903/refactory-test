const data = require('./data.json')

// 2. Find all electronic devices.
function getElectronic(payload) {
    let result = []
    for(const element of payload) {
        if(element.type === "electronic") {
            result.push(element)
        }
    }
    return result
}

console.log("2. Eletronic Items")
console.log(getElectronic(data))