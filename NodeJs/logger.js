const EventEmitter = require('events')

// (function(exports, require, module, __filename, __dirname){          //module wrapper function
    var url = "http://mylogger,io/log"
    
    class Logger extends EventEmitter{
        //method function inside of class
        log=()=>{
            //send HTTP request
            console.log(message)
    
            //trigger an event (put name of event)
            this.emit('messageLogged', {id:1, url: 'https://'})    
        }
    }

    
    //module.exports.log=log          //object 형태로 export
    //exports.log=log                 //prefix is always module
    module.exports=Logger                //function 형태로 direct export
// }) 