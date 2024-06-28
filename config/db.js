const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://192.168.0.25:27017/Project_TG').on('open',()=>{
    console.log("MongoDB Connected");
}).on('error',()=>{
    console.log("MongoDB connection error");
});

module.exports = connection;