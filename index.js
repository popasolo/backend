const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/ProductRoute');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;
const dbconnection = process.env.MONGO_URL;
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



//define routes


//connect to MongoDB
mongoose.connect(dbconnection,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
//create api routes
app.use('/api/products', productRoutes);  
