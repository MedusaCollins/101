import React from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
function App() {
  const [todos, setTodos] = React.useState(["test", "todo2"]);
  const [input, setInput] = React.useState("");

  function todo(mode) {
    if (mode === 'add'){
      setTodos([...todos, input])
    }
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="w-[400px] space-y-6">
        <Input setInput={setInput} input={input} todo={todo}/>
        {input}
        <Todos todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
