const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url=== '/'){
        res.end('welcome to home page')
    }
    if (req.url=== '/About'){
        res.end('welcome to About page')
    }
    if (req.url=== '/Contact'){
        res.end('welcome to Contact page')
    }
    // res.end(`
    //     <h3>Opps</h3>
    // `)
})
server.listen(5000)