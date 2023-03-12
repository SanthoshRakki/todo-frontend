// import Connection from './database/db.js';
import express from 'express';
import cors from 'cors';
 import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Routes from './routes/route.js'

// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const app = express();

app.use(cors());
// app.use(express.json({extended: true}));
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', Routes);


 mongoose.connect('mongodb://0.0.0.0:27017/db')
    .then(()=>console.log('Connected!'));


    const PORT = 8000;
    
    app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));