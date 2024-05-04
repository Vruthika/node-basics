const { log, error } = require('node:console')
const fs = require('node:fs')

fs.writeFile("attendance.txt", "Aakash", (err) => {
    if (err) {
        log("Some error " + err)
    }
    log("Saved")
})

fs.readFile("attendance.txt", (err, data) => {
    if (err) {
        log("Error on reading: " + err)
    }
    log("This is your data: " + data)
})
// ctrl+Shift+Space => gives suggestions about the method