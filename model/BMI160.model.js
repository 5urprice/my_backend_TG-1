// BMI160.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const estabilidadSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const EstabilidadDataModel = db.model('estabilidad', estabilidadSchema);

module.exports = EstabilidadDataModel;
