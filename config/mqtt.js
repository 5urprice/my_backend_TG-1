const EstabilidadDataModel = require('../model/BMI160.model');
const SPO2DataModel = require('../model/SPO2.model');
const BPMDataModel = require('../model/BPM.model');
const MqttDataModel = require('../model/mqtt.model');
const mqtt = require('mqtt');

const protocol = 'mqtts';
const host = 'a2f8666d.ala.us-east-1.emqxsl.com';
const port = '8883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx_test',
    password: '12345678',
    reconnectPeriod: 1000,
});

const topic = 'esp32/sensor_data';
const estabilidadTopic = 'esp32/estabilidad_data';
const bpmTopic = 'esp32/bpm_data';
const spo2Topic = 'esp32/spo2_data';

client.on('connect', () => {
    console.log('EMQX is Connected');

    client.subscribe([topic, estabilidadTopic, bpmTopic, spo2Topic], (err) => {
        if (err) {
            console.error('Subscription error:', err);
        } else {
            console.log(`Subscribed to topics '${topic}', '${estabilidadTopic}', '${bpmTopic}', and '${spo2Topic}'`);
        }
    });
});

client.on('message', (topic, payload) => {
    const message = payload.toString();

    switch (topic) {
        case 'esp32/sensor_data':
            console.log('Received Message:', topic, message);
            saveMessageDatabase(message);
            break;
        case 'esp32/estabilidad_data':
            console.log('Received Estabilidad Message:', topic, message);
            saveEstabilidadDatabase(message);
            break;
        case bpmTopic:
            console.log('Received BPM Message:', topic, message);
            saveBPMDatabase(message);
            break;
        case spo2Topic:
            console.log('Received SPO2 Message:', topic, message);
            saveSpo2Database(message);
            break;
        default:
            console.log('Received Unknown Topic:', topic, message);
    }
});

function saveMessageDatabase(message) {
    const newMessage = new MqttDataModel({
        data: message,
        timestamp: new Date()
    });

    newMessage.save()
        .then(result => {
            //console.log('Message saved to database:', result);
        })
        .catch(error => {
            console.error('Error saving message to database:', error);
        });
}

function saveEstabilidadDatabase(message) {
    const newEstabilidadMessage = new EstabilidadDataModel({
        data: message,
        timestamp: new Date()
    });

    newEstabilidadMessage.save()
        .then(result => {
            //console.log('Estabilidad Message saved to database:', result);
        })
        .catch(error => {
            console.error('Error saving Estabilidad message to database:', error);
        });
}

function saveBPMDatabase(message) {
    const newBPMMessage = new BPMDataModel({
        data: message,
        timestamp: new Date()
    });

    newBPMMessage.save()
        .then(result => {
            //console.log('BPM Message saved to database:', result);
        })
        .catch(error => {
            console.error('Error saving BPM message to database:', error);
        });
}

function saveSpo2Database(message) {
    const newSpo2Message = new SPO2DataModel({
        data: message,
        timestamp: new Date()
    });

    newSpo2Message.save()
        .then(result => {
            //console.log('SPO2 Message saved to database:', result);
        })
        .catch(error => {
            console.error('Error saving SPO2 message to database:', error);
        });
}
