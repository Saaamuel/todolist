//Permite adicionar novas tarefas
// TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onTaskAdded }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar os dados para o backend
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then((response) => response.json())
      .then((newTask) => {
        // Chamar a função para atualizar a lista de tarefas no componente pai
        onTaskAdded(newTask);
        setTaskTitle('');
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Nova tarefa"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
