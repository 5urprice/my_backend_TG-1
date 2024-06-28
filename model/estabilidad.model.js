// estabilidad.model.js

const express = require('express');
const router = express.Router();
const EstabilidadDataModel = require('../model/BMI160.model'); // Asegúrate de importar el modelo correcto

router.get('/estabilidad-data', async (req, res) => {
    try {
        const data = await EstabilidadDataModel.find().limit(5).sort({ timestamp: -1 });
        res.json(data);
    } catch (error) {
        console.error('Error fetching estabilidad data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
