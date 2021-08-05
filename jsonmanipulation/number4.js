const data = require('./data.json')

// 4. Find all items were purchased on 16 Januari 2020.
function unixEpochTimeMS(time) {
    const unixEpochTimeMS = time * 1000;
    const date = new Date(unixEpochTimeMS)
    const dString = date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',');
    
    return dString[0].toString()
}

function getPurchased(payload) {
    let result = []
    for(const element of payload) {
        if(unixEpochTimeMS(element.purchased_at) === '1/16/2020') {
            result.push(element)
        }
    }
    return result
}

console.log("4. Items purchased on 16 Januari 2020")
console.log(getPurchased(data))