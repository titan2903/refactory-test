const data = require('./data.json')

// 1. Find items in the Meeting Room.
function getItemInMeetingRoom(payload) {
    let result = []
    for(const element of payload) {
        if(element.placement.name === "Meeting Room") {
            result.push(element)
        }
    }

    return result
}

console.log("1. Items In Meeting Room")
console.log(getItemInMeetingRoom(data))