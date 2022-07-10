import express from 'express';

const app = express();

import {router as subjects } from './routes/subjects.js'   //utiliza a pasta das routes
import {router as customers} from './routes/customers.js'
import {router as books} from './routes/books.js'

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/CampusLib')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err))

app.use(express.json());
app.use('/api/subjects', subjects); //acede a /api/subjects/{sub} para ver os livros todos com esse subject
app.use('/api/customers', customers);
app.use('/api/books', books);

app.get('/', (req, res) => {
    res.send('This is Belchior\'s University Library\n Which books are you looking for?\n');
})


//Tries to get the port, if not available, uses default port 3000
const port = process.env.PORT || 3000; 

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...`);
})