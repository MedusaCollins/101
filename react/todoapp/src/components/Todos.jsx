import React from "react";

const Todos = ({ todos, setTodos }) => {
    console.log(todos.filter((todo => todo !== "todo2")))
    return (
        <div className="w-full space-y-2">
            {todos.reverse().map((selectedTodo, index) => (
                <div key={index} className="bg-slate-700 text-white">
                    <p>{selectedTodo}</p>
                    <button onClick={() => setTodos(todos.filter((todo => todo !== selectedTodo)))}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Todos;