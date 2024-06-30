const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://test:test@cluster0.guy6ime.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
