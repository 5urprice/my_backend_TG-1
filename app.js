const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const ToDoRoute = require('./routers/todo.router');
const temperatureRouter = require('./routers/temperature.router');
const estabilidadRouter = require('./routers/estabilidad.router');
const BPMRouter = require('./routers/max30102.route');
const SPO2Router = require('./routers/SPO2.router');
const locationRouter = require('./routers/location.router'); // Nuevo router para ubicaciones

const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', ToDoRoute);
app.use('/', temperatureRouter);
app.use('/', estabilidadRouter);
app.use('/', BPMRouter);
app.use('/', SPO2Router);
app.use('/', locationRouter); // Agregar el nuevo router de ubicaciones

module.exports = app;
