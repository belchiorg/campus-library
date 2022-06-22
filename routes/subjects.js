const express = require('express');
const router = express.Router();
const {books, subs} = require('../books.js');

//Function that checks if there's any book with the specified subject
const inSubsList = () => subs.find(sub => sub.Subject.toLowerCase().trim().includes(subject.toLowerCase().trim()));

router.get('/', (req, res) => {
    //sends all the subjects on the server
    res.send(subs);
})


router.get('/:sub', (req, res) => {

    //filters the books to just include the ones with the specified subject
    const list = (books.filter(book => book.Subject.toLowerCase().trim().includes(req.params.sub.toLowerCase().trim())));
    //If the list is empty, there's no book with such subject -> error 404, exits
    if (list == []) return res.status(404).send('Subject not found');

    //sends all books with the specified subject
    res.send(list);
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    //Removes a book from the API

    //Finds the book with the specified id
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Theres\'s no book with id ' + req.params.id);

    //Gets the book index and removes it.
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.status(201).send(book)
}) 

module.exports = router;