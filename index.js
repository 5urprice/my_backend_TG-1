const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const MqttDataModel = require('./model/mqtt.model');
const mqtt = require('./config/mqtt');

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World!!!!!")
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
