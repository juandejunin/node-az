const fs = require('fs')

const fileName = process.argv[2]

const file = fs.readFileSync(fileName)
const content = file.toString()
const lines = content.split('\n').length -1

console.log(lines)