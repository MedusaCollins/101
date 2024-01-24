import React from 'react'
type Props = {
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: any) => void
}

const Input:React.FC<Props> = ({input, setInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className='bg-white grid grid-flow-col grid-cols-12 items-center text-left rounded-md'>
        <div className='border-2 border-gray-200 w-6 h-6 rounded-full col-span-1 ml-4'></div>
        <input type="text"
        className='text-light-blue-400 col-span-11 h-14 ring-0 focus:outline-none rounded-r-md'
        placeholder='Create a new todo...'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}/>
    </form>
  )
}

export default Input