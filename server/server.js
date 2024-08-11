const express = require('express');
const dotenv = require('dotenv');

const auctionTimer = require('./timer');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
});

// ...

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});