const fs = require('fs');
const http = require('http')

const server = http.createServer((req,res)=>{
   fs.stat('rename.txt',(err)=>{
    if(err){
        res.write(err.message)
        res.end()
    }else{
        fs.unlink('rename.txt',(err)=>{
            if(err){
                res.write(err.message);
            }else{
                res.write('file delete successfull..');
            }
            res.end()
        })
    }
   })
});

server.listen(5000,'127.0.0.1','');
console.log('Server Running....');