const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')

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

const emitter = new EventEmitter()
//register listener (you can use addListener instead of on)
emitter.on('messageLogged', (e)=>{
    console.log('listener called', arg)
})
//trigger an event (put name of event)
emitter.emit('messageLogged', {id:1, url: 'https://'})           
