const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {

//     if (err) {
//         throw err
//     } 

//     console.log(data)
// })



//.......READ STREAM
// const streem = fs.createReadStream(path.resolve(__dirname, 'test.txt'),{encoding: 'utf-8'})

// streem.on("data", (chank)=>{
//     console.log(chank)
// })

// streem.on('end', ()=> console.log('END'))
// streem.on('error', ()=> console.log('END'))

// streem.on('open', (e)=> console.log('ERROR->', e))

//.......WRITE STREAM

const writableStrim = fs.createWriteStream(path.resolve(__dirname, 'test_for_ write.tst'))

for (let i =0; i< 200; i++) {
    writableStrim.write(i + "\n")
}
writableStrim.end()