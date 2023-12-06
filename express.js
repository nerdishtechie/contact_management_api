const express = require('express')
const app = express()
app.get("/", handleRoot)
app.get("/info", handleInfo)
function handleRoot(request,response){
    response.send("This is root route")
}
function handleInfo(request,response){
    response.send("This is Info")
}
app.listen(3000, ()=>{
    console.log("Server is running on 3000")
})