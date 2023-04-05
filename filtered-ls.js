// const fs = require('fs')

// const dirname = process.argv[2]
// const ext = process.argv[3]

// fs.readdir(dirname, function(err,list){
//     if(err){
//         return console.log(err)
//     }
//     list.forEach(function(file){
//         file.split('.')[1]=== ext ? console.log(file) : null
//     })
// })

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})