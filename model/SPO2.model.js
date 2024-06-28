// BPM.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const SPO2Eschema = new Schema({
    data: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const SPO2DataModel = db.model('SPO2', SPO2Eschema);

module.exports = SPO2DataModel;
