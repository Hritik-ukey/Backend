const http = require('http');

//Server Browser se server pe response send kar raha hai...
const server = http.createServer((req,res) => {
    res.end('Hellow from Node js Server!');
});

//is port pe chal raha hai
server.listen(3000,()=>{
    console.log('Server listening 3000 Port')
});
