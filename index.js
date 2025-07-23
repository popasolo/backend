const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port,(req, res) => {
  console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});