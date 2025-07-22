

// index.js
const express = require('express');  //importing express library


const app = express();

// Route: Home page
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});



// | Express Code         | Real Life                    |
// | -------------------- | ---------------------------- |
// | `require('express')` | Toolbox open karna           |
// | `express()`          | Restaurant counter setup     |
// | `app.get()`          | Menu me ek dish add karna    |
// | `app.listen()`       | Restaurant ka gate khol dena |


