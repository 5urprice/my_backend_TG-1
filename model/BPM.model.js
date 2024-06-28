// BPM.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const BPMSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const BPMDataModel = db.model('BPM/SPO2', BPMSchema);

module.exports = BPMDataModel;
