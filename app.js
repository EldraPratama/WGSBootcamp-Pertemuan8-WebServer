const fs   = require('fs');
const http = require('http')
const port = 3000

//fungsi untuk membuka suatu file
const openFile = (path,res) => {
    fs.readFile(path,(err,data)=>{
        if (err) {
            res.writeHead(404)
            res.write('Error : page not found')          
        }else{
            res.write(data)
        }
        res.end()
    })
}

http
    .createServer((req,res)=>{
        const url = req.url
        console.log(url);
        res.writeHead(200,{
            'Content-Type':'text/html'
        }) 
       
        if (url==='/about') {
            //Membuka file html about 
            openFile('./about.html',res)
        }else if (url==='/contact') {
             //Membuka file html contact
            openFile('./contact.html',res)
        }else {
             //Membuka file html index jika url yang dicari tidak ada 
            openFile('./index.html',res)
        }

})
    .listen(3000,()=>{
        console.log('Server is listening on port 3000');
    })

