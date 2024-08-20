require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');

//Parse request
app.use(bodyParser.json());

//MongoDB connection
connectDB()

//Routes
app.use('/api/users', require('./Routes/Api/Users'));


app.get('/', (req, res) => { res.json({ message : 'Welcome to ToDO App!'})});

const port = 5000
app.listen(port , ()=> {
    console.log(`Server running on port ${port}`);   
});