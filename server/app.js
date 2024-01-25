const express = require("express");
const routes = require("./routes/playerStats");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/playerstats',routes)

app.listen(5000);
