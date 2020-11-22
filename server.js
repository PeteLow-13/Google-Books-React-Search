const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
