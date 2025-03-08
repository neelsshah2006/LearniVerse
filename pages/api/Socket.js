import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Starting Socket.io server...");

    const io = new Server(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      socket.on("sendMessage", (msg) => {
        io.emit("receiveMessage", msg);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
