// location.router.js

const express = require('express');
const router = express.Router();
const LocationModel = require('../model/location.model');

// POST endpoint para guardar una nueva ubicación
router.post('/location', async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        // Validar si latitude y longitude están presentes en la solicitud
        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        // Crear un nuevo documento de ubicación
        const location = new LocationModel({
            latitude,
            longitude
        });

        // Guardar la ubicación en la base de datos
        await location.save();

        res.status(201).json({ message: 'Location saved successfully' });
    } catch (error) {
        console.error('Error saving location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET endpoint para obtener todas las ubicaciones guardadas
router.get('/locations', async (req, res) => {
    try {
        // Obtener todas las ubicaciones ordenadas por timestamp descendente (opcional)
        const locations = await LocationModel.find().sort({ timestamp: -1 });

        res.status(200).json(locations);
    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
