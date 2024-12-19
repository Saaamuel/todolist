//Implementa as rotas de listar e criar tarefas
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Rota para listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar tarefas', error: err });
  }
});

// Rota para criar uma nova tarefa
router.post('/', async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'O campo título é obrigatório' });
  }

  const newTask = new Task({ title });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao salvar tarefa', error: err });
  }
});

module.exports = router;
