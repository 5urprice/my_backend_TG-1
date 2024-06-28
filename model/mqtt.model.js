// mqttData.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const statusSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const MqttDataModel = db.model('estado', statusSchema);

module.exports = MqttDataModel;
