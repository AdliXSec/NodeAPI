// Import the necessary modules
const express = require('express');
const { router } = require('./routers/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Create an instance of an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Set the port
const PORT = process.env.PORT || 3000;

app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
