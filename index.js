const Joi = require('joi'); //Joi 13.1.0
const express = require('express');
const {books, subs} = require('./books.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is Belchior\'s University Library\n Which books are you looking for?\n');
})

app.get('/api/subjects', (req, res) => {
    //sends all the subjects on the server
    res.send(subs);
})


app.get('/api/subjects/:sub', (req, res) => {

    //filters the books to just include the ones with the specified subject
    const list = (books.filter(book => book.Subject.toLowerCase().trim().includes(req.params.sub.toLowerCase().trim())));
    //If the list is empty, there's no book with such subject -> error 404, exits
    if (list == []) return res.status(404).send('Subject not found');

    //sends all books with the specified subject
    res.send(list);
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

app.put('/api/subjects/:id', (req, res) => {
    //Changes a book on the API
    const {title, author, subject} = req.body;

    //Finds the book with the specified id
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Theres\'s no book with id ' + req.params.id);
    
    //Changes the book
    book.Subject =  subject;
    book.Author = author;
    book.Title=  title;

    //If the new subject is not on the subs array, adds it.
    if (!inSubsList) subs.push(subject);

    res.status(201).send(book);
});

app.delete('/api/subjects/:id', (req, res) => {
    //Removes a book from the API

    //Finds the book with the specified id
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Theres\'s no book with id ' + req.params.id);

    //Gets the book index and removes it.
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.status(201).send(book)
}) 

//Tries to get the port, if not available, uses default port 3000
const port = process.env.PORT || 3000; 

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...`);
})