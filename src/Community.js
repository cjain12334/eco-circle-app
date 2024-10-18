import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';

function Community() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        // Emit message to server (if using socket.io)
        setMessages([...messages, input]);
        setInput('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-950 text-white">
            <Nav />
            <div className="p-4">
                <h1 className="text-4xl">Community Chat</h1>
                <div className="flex flex-col gap-2 mt-4">
                    {messages.map((msg, index) => (
                        <div key={index} className="bg-gray-800 p-2 rounded">
                            {msg}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="mt-4 p-2 w-full rounded"
                />
                <button onClick={handleSend} className="bg-green-600 p-2 rounded mt-2">
                    Send
                </button>
            </div>
        </div>
    );
}

export default Community;
