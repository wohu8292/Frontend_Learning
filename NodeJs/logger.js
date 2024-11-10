// (function(exports, require, module, __filename, __dirname){          //module wrapper function
    console.log(__filename)
    console.log(__dirname)
    var url = "http://mylogger,io/log"
    
    function log(message){
        //send HTTP request
        console.log(message)
    }
    
    //module.exports.log=log          //object 형태로 export
    //exports.log=log                 //prefix is always module
    module.exports=log                //function 형태로 direct export
// }) 