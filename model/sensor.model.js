const express = require('express');
const router = express.Router();
const MqttDataModel = require('../model/mqtt.model');

router.get('/sensor-data', async (req, res) => {
    try {
        const data = await MqttDataModel.find().limit(5).sort({ timestamp: -1 });
        res.json(data);
    } catch (error) {
        console.error('Error fetching sensor data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
