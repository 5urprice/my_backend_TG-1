const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const LocationSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const LocationModel = db.model('Location', LocationSchema);

module.exports = LocationModel;
