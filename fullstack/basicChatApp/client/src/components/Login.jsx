import React, { useState } from 'react'

const Login = ({username, setUsername, join}) => {
    const [errorMessage, setErrorMessage] = useState('')
  return (
    <div className='flex flex-col gap-5 p-5 border border-slate-600 rounded-sm'>
        <div className='flex flex-col gap-2'>
            <input type="text" className='bg-zinc-800 text-slate-300 focus:ring-2 ring-green-400 outline-none rounded-md p-2' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <span className='text-red-500'>{errorMessage}</span>
        </div>
        <button className='bg-green-500 hover:bg-green-600 rounded-md p-2' onClick={() => username !== "" ? join() : setErrorMessage("Username is invalid.")}>Join Now</button>
    </div>
  )
}

export default Login