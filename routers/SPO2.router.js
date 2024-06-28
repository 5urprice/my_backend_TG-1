// estabilidad.router.js

const express = require('express');
const router = express.Router();
const EstabilidadDataModel = require('../model/SPO2.model');
const SPO2DataModel = require('../model/SPO2.model');

router.get('/spo2', async (req, res) => {
    try {
        const data = await SPO2DataModel.find({}, { data: 1, _id: 0 });
        const spo2Value = data.map(entry => parseFloat(entry.data));
        res.json(spo2Value);
    } catch (error) {
        console.error('Error fetching spo2 data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
