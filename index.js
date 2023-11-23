const express = require('express')
const mongoose = require('mongoose');
const env = require('dotenv').config()
const PORT=process.env.PORT || 2000
const inforoute=require('./src/routes/information')
const cors =require('cors')

var app = express();
app.use(express.json()) // for json
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.apvocjz.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));


    app.use('/api',inforoute)


    app.listen(PORT, () => {
        console.log(`server is running on port no ${PORT}`)
    }) 