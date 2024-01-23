import React, { useState } from 'react'

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<item[]>([{
    id: 1,
    text: "Learning TypeScript",
    completed: false
  },
  {
    id: 2,
    text: "Build TodoListApp",
    completed: false
  }
  ])
  const handleClick = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    )
  }
  const handleAddTodo = () => {
    const newTodo: item = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}
            onClick={() => handleClick(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}

          >{todo.text}</li>
        ))}
      </ul>
      <input type="text" placeholder="add Item" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
    </div >
  )
}
