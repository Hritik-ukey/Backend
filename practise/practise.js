const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRouter = require('./routes/user');

app.use(express.json());
app.use('/users', userRouter);

// 🔗 Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Mongo Error:', err));

app.listen(7000, () => {
  console.log('Server running on http://localhost:7000');
});
