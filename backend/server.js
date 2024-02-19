const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/user-route");
const errorHandler = require("./middleware/error-middleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes Middleware
app.use("/api/users", userRoute);

// Error Middleware
app.use(errorHandler);

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT,  () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err));