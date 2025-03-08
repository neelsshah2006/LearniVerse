import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("https://learni-verse-theta.vercel.app/socket", { path: "/api/socket" });

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
        💬 Real-time Chat
      </h1>
      <div className="w-96 h-80 border bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <p key={i} className="p-2 bg-blue-100 rounded-lg my-1 text-gray-800">
            {msg}
          </p>
        ))}
      </div>
      <div className="flex w-96 mt-2">
        <input
          className="border border-gray-500 px-3 py-2 w-full rounded-xl text-black"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
