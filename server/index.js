const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addGame, deleteGame } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)

app.get('/api/game', getGame)
app.get('/api/price', getPrice)
app.post('/api/game', addGame)
app.delete('/api/game/:index', deleteGame)

app.listen(4000, () => console.log("Server running on 4000"));
