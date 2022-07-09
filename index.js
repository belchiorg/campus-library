const Joi = require('joi'); //Joi 13.1.0
const express = require('express');
const {books, subs} = require('./books.js');
const app = express();

const subjects = require('./routes/subjects')   //utiliza a pasta das routes
const customers = require('./routes/customers')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/CampusLib')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err))

app.use(express.json());
app.use('/api/subjects', subjects); //acede a /api/subjects/{sub} para ver os livros todos com esse subject
app.use('/api/customers', customers);

app.get('/', (req, res) => {
    res.send('This is Belchior\'s University Library\n Which books are you looking for?\n');
})


//Tries to get the port, if not available, uses default port 3000
const port = process.env.PORT || 3000; 

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...`);
})