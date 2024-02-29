import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socketIO from 'socket.io-client';

const Chat = ({ username }) => {
    const [socket, setSocket] = useState(null);
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newSocket = socketIO.connect('http://localhost:3001');
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []); // Sadece bir kez çalışması için boş bağımlılık array'i kullanılır

    useEffect(() => {
        if (!socket) return;

        socket.on('sendMessage', (msg) => {
                setMessages(prevMessages => [...prevMessages, msg]);
        });

        return () => {
            socket.off('sendMessage');
        };
    }, [socket, username]);

    const sendMessage = async () => {
        try {
            // const response = await axios.post("http://localhost:3001/sendMessage", { username, currentMessage });
            socket.emit('sendMessage', { username, message: currentMessage });
            setCurrentMessage('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className='flex gap-2'>
                        <span className='text-green-500'>{message.username}:</span>
                        <span className='text-slate-300'>{message.message}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder='Type Something...'
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className='rounded-md text-gray-400 bg-zinc-800 outline-none focus:border border-zinc-700 p-2 bottom-12 absolute w-[400px]'
                onKeyDown={(e) => e.code === "Enter" && sendMessage()}
            />
        </div>
    );
}

export default Chat;
