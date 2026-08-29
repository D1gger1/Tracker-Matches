require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
})