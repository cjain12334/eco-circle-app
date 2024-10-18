import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000'); // Adjust the URL accordingly

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch old messages from the server
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/chat/messages');
        setMessages(res.data);
      } catch (error) {
        console.error('Failed to load messages', error);
      }
    };
    fetchMessages();

    // Listen for new messages via WebSocket
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up when the component unmounts
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      // Send message to the server via WebSocket
      socket.emit('message', { user: 'You', text: message });
      setMessages((prevMessages) => [...prevMessages, { user: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <div className="h-80 overflow-y-auto border-b border-gray-300 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.user === 'You' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block px-4 py-2 rounded-lg text-white ${msg.user === 'You' ? 'bg-green-500' : 'bg-gray-500'}`}
            >
              <strong>{msg.user}</strong>: {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
