require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const pullupRoutes = require('./routes/pullups');
app.use('/api/pullups', pullupRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
})

