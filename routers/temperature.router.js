// temperature.router.js
const express = require('express');
const router = express.Router();
const MqttDataModel = require('../model/mqtt.model');

// Endpoint para obtener datos de temperatura
router.get('/temperature', async (req, res) => {
  try {
    // Consulta a MongoDB para obtener los datos de temperatura
    const temperatureData = await MqttDataModel.find({}, { data: 1, _id: 0 });

    // Extraer solo los valores de temperatura de la respuesta
    const temperatureValues = temperatureData.map(entry => parseFloat(entry.data));

    res.json(temperatureValues); // Devuelve los datos como respuesta
  } catch (error) {
    console.error('Error al obtener datos de temperatura:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
