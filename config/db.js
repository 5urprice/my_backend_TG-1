const mongoose = require('mongoose');

// Obtener la URL de MongoDB desde una variable de entorno
const mongodbUrl = process.env.MONGODB_URL;

const connection = mongoose.createConnection(mongodbUrl).on('open',()=>{
    console.log("MongoDB Connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});

module.exports = connection;
