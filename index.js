const http = require('http');
const server = http.createServer(handleServer);
function handleServer(req,res){
    res.end("Hello")
}
server.listen(3000,()=>{
    console.log("server is running on 3000");
})