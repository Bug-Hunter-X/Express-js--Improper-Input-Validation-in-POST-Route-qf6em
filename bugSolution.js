const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Input validation
  if (!user.name || typeof user.name !== 'string' || user.name.length === 0) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!user.age || typeof user.age !== 'number' || user.age <= 0) {
    return res.status(400).json({ error: 'Age must be a positive number' });
  }
  // ... process user data ...
  res.status(201).json({ message: 'User created' });
});
