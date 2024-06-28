// estabilidad.router.js

const express = require('express');
const router = express.Router();
const EstabilidadDataModel = require('../model/BMI160.model');

router.get('/estabilidad-data', async (req, res) => {
    try {
        const data = await EstabilidadDataModel.find({}, { data: 1, _id: 0 });
        const estabilidadValues = data.map(entry => parseFloat(entry.data));
        res.json(estabilidadValues);
    } catch (error) {
        console.error('Error fetching estabilidad data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
