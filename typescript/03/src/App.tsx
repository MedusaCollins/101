import { useState } from 'react'; 
import Header from './components/Header'
import Input from './components/Input'
import Todos from './components/Todos';

type ITodo = {
  id: number;
  text: string;
  completed: boolean;
}

const App:React.FC = () => {
  const [dark, setDark] = useState<boolean>(true)
  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id:Date.now(),
      text:input,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      {/* background */}
      <div className={`${!dark ? 'bg-desktop-dark' : 'bg-desktop-light'} h-[300px] w-full bg-cover top-0 absolute -z-10`}/>
      <div className={`${!dark ? 'bg-light-gray' : 'bg-light-blue-400'} h-full w-full absolute -z-20`}/>

        <div className='w-[40rem] h-[400px]'>
          <Header dark={dark} setDark={setDark}/>
          <Input input={input} setInput={setInput} handleSubmit={handleSubmit}/>
          <Todos todos={todos}/>
        </div>
    </div>
  );
}

export default App;
