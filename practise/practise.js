// const express = require('express');



// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Home page is listening...');
// });

// app.get('/about',(req,res)=>{
//     res.send('Hii i am about...');
// });


// app.get('/contact',(req,res)=>{
//     res.send('Hii i am contact...');
// });


// app.listen(7000,()=>{
//     console.log('App is running on 7000 port...');
// });
////////////////////////////////////////////////////////////////

//Returning practise.html 

const express = require('express');
const path = require('path');

const app = express();

// Serve static files like CSS, JS, images
app.use(express.static(__dirname)); // ⭐ IMPORTANT ⭐

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'practise.html'));
});

app.listen(7000, () => {
  console.log('Server running at http://localhost:7000');
});

