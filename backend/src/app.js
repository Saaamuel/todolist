//Configura as rotas e middlewares 
const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/tasks', tasksRoutes);

module.exports = app;
