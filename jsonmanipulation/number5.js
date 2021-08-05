const data = require('./data.json')

// 5. Find all items with brown color.
function getBrown(payload) {
    let result = []
    for(const element of payload) {
        for(const row of element.tags) {
            if(row === "brown") {
                result.push(element)
            }   
        }
    }
    return result
}

console.log("5. Items with brown color")
console.log(getBrown(data))