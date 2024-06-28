// estabilidad.router.js

const express = require('express');
const router = express.Router();
const BPMDataModel = require('../model/BPM.model');

router.get('/max30102', async (req, res) => {
    try {
        const data = await BPMDataModel.find({}, { data: 1, _id: 0 });
        const BPMValues = data.map(entry => parseFloat(entry.data));
        res.json(BPMValues);
    } catch (error) {
        console.error('Error fetching BPM data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
