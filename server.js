const express = require('express');
const path = require('path');
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', pagesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio app running on http://localhost:${PORT}`);
});