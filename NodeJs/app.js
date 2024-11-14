const path = require('path')
const os = require('os')
const fs = require('fs')
const Logger = require('./logger')

var pathObj = path.parse(__filename)
//  {
//     root: 'C:\\',
//     dir: 'C:\\Users\\gjdnd\\Desktop\\취업준비\\FontEnd\\NodeJs',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }

var totalMemory = os.totalmem()
var freeMemory = os.freemem()
//7866454016

// const files = fs.readdirSync('./')
//[ 'app.js', 'logger.js', 'note.txt' ]
fs.readdir('./', (err, files)=>{
    if(err){
        console.log('Error', err)
    }else{
        console.log('Result', files)
    }
})

//will use "extends EventEmitter" from Logger class
const logger = new Logger()         
//register listener (you can use addListener instead of on)
logger.on('messageLogged', (e)=>{
    console.log('listener called', arg)
})
logger.log('message')