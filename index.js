const Joi = require('joi'); //Joi 13.1.0
const express = require('express');
const {books, subs} = require('./books.js');
const app = express();
const subjects = require('./routes/subjects')   //utiliza a pasta das routes

app.use(express.json());
app.use('/api/subjects', subjects); //acede a /api/subjects/{sub} para ver os livros todos com esse subject

app.get('/', (req, res) => {
    res.send('This is Belchior\'s University Library\n Which books are you looking for?\n');
})

//Function that checks if there's any book with the specified subject
const inSubsList = () => subs.find(sub => sub.Subject.toLowerCase().trim().includes(subject.toLowerCase().trim()));

app.post('/api', (req, res) =>    {
    //Adds a new book to the api
    const {subject, title, author} = req.body;

    //Checks if there's a book with the same title
    const found = books.find(book => book.Title.toLowerCase() == title.toLowerCase())
    if (found) return res.status(400).send('Book already exists');
    

    books.push({Subject: subject, Title: title, Author: author, id: books.length + 1 });
    //If the subject on the subs array, adds it.
    if (!inSubsList) subs.push(subject);

    res.status(201);
})

//Tries to get the port, if not available, uses default port 3000
const port = process.env.PORT || 3000; 

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...`);
})