//Define o modelo de tarefa com Mongoose
const mongoose = require('mongoose');

// Definir o esquema de Tarefa
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportar o modelo
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
