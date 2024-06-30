const mongoose = require('mongoose');

<<<<<<< HEAD
const dbURI = 'mongodb+srv://test:test@cluster0.guy6ime.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
=======
// Obtener la URL de MongoDB desde una variable de entorno
const mongodbUrl = process.env.MONGODB_URL;

const connection = mongoose.createConnection(mongodbUrl).on('open',()=>{
    console.log("MongoDB Connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});

module.exports = connection;
>>>>>>> eefb18a4fb3bb8a4ad49be6396e634a7fc4f100d
