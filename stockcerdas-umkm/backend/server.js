const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config(); 

const app = express();


app.use(cors());
app.use(express.json()); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

const authRoutes = require('./routes/authRoutes');
const produkRoutes = require('./routes/produkRoutes');
app.use('/api/auth', authRoutes); 
app.use('/api/produk', produkRoutes); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));