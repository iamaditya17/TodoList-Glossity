const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/TodoRoute")

require("dotenv").config()                               //import dotenv dependency

const app = express();
const port = process.env.port || 5000;

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err)) //if there are some error then catch it

app.use(routes)
app.listen(port, () => {
    console.log(`Server is listening to Port ${port}`);
})
