const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const bodyParser = require('body-parser');




dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Failed to connect to MongoDB', err));
  });

