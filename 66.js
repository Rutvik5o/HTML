const http=require('http')
const fs=require('fs')


const fileContent=fs.readFileSync('temp.html')


const server=http.createServer( (req,res)=>{
    

    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent)

}
)
//80 is default . in if you want different port then you need to mention explicity.
server.listen(80,'127.0.0.1',()=>
    {
        console.log("Listening on Port 80")

    })
