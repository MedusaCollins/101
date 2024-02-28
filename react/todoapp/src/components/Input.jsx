import React from "react";

const Input = ({input, setInput, todo}) => {
    function handleKeyDown(event) {
        if (event.key === 'Enter'){
            todo('add')
            setInput('')
        }
    }
    return (
            <input 
                type="text" 
                className="border border-gray-400 w-full p-2"
                value={input} 
                onChange={(prev) => setInput(prev.target.value)}
                onKeyDown={handleKeyDown}
            /> 
    )
}

export default Input;