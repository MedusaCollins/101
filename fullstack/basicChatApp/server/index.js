import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer } from 'http'; // Değişiklik burada
import { Server } from 'socket.io';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = createServer(app); // Değişiklik burada
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
})

app.post("/joinChat", (req,res) => {
    console.log(req.body)
    res.send("test")
})

// app.post("/sendMessage", (req,res) => {
//     res.send({username: req.body.username, message: req.body.currentMessage})
// });

// Değişiklik burada
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('sendMessage', (msg) => {
        io.emit('sendMessage', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

// Değişiklik burada
server.listen(port, () => {
    console.log(`Server started at ${port} port.`)
})
