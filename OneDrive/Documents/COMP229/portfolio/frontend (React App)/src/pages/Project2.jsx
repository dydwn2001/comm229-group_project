// src/pages/Project2.jsx
import React, { useState } from 'react';
import './Project2.css';

function Project2() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const addTask = e => {
    e.preventDefault();
    if (!title || !time) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title, time, done: false }
    ]);
    setTitle('');
    setTime('');
  };

  const toggleDone = id => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const removeTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="project-wrapper">
      <h2>Dad Scheduler</h2>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.done ? 'done' : ''}>
            <span>{task.time}</span> – <span>{task.title}</span>
            <div className="task-buttons">
              <button onClick={() => toggleDone(task.id)}>
                {task.done ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => removeTask(task.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project2;
