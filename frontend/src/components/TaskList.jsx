//Lista de tarefas a partir do backend
// TaskList.jsx
import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Buscar as tarefas do backend
    fetch('http://localhost:5000/tasks')  // Alterar URL conforme o seu backend
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>  // _id se estiver usando MongoDB
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
