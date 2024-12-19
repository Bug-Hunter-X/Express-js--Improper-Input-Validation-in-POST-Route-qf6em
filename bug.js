const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // ... process user data ...
  res.status(201).json({ message: 'User created' });
});

//This code is vulnerable to the Common Weakness Enumeration (CWE) ID 20: Improper Input Validation.
//If req.body is not properly validated, an attacker could submit malicious data that could cause errors or unexpected behaviour in the application.