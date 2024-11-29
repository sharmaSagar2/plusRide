const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


connectToDB();



app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use('/users',userRoutes);

module.exports = app;