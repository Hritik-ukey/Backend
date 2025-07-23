const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 🔹 GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 🔹 GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(500).send('Invalid ID');
  }
});

// 🔹 POST create user
router.post('/', async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.status(201).json(newUser);
});

// 🔹 PUT update user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch {
    res.status(500).send('Invalid ID');
  }
});

// 🔹 DELETE user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

module.exports = router;
