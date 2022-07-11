import express, { response, Router } from 'express';
export const router = express.Router();
import { Book } from '../models/books.js'
import { Subject } from '../models/subjects.js';

router.get('/', async (req, res) => {
    const books = await Book.find().sort({title: 1})
    res.send(books);
})

router.post('/', async (req, res) => {

    const subject = await Subject.findById(req.body.subjectId);

    console.log(subject)
    if (!subject) return res.status(404).send('Invalid subject');
    
    let book = new Book({
        title: req.body.title,
        author: req.body.author,
        subject: {
            _id: subject._id,
            name: subject.name
        },
        available: req.body.available
    });

    book = await book.save();

    res.status(201).send(book);

})

router.delete('/:id', async (req,res) => {

    const book = await Book.findByIdAndRemove(req.params.id)

    if (!book) res.status(404).send("There's no book with such id.");

    res.status(201).send(book)
})

router.put('/:id', async (req,res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        subject: req.body.subject,
        new:true
    })

    if (!book) res.status(404).send("There's no book with such id.");

    res.status(201).send(book)
})

router.get('/:id', async (req,res) => {
    const book = await Book.findById(req.params.id)

    if (!book) res.status(404).send("There's no book with such id.");
    
    res.status(201).send(book)
})