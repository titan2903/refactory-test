const data = require('./data.json')

// 3. Find all the furniture.
function getFurniture(payload) {
    let result = []
    for(const element of payload) {
        if(element.type === "furniture") {
            result.push(element)
        }
    }
    return result
}

console.log("3. Furniture Items")
console.log(getFurniture(data))