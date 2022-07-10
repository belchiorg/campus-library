import express, { response, Router } from 'express';
export const router = express.Router();
import { Book } from '../models/books.js'

router.get('/', async (req, res) => {
    const books = await Book.find().sort({title: 1})
    res.send(books);
})

router.post('/', async (req, res) => {
    
    let book = new Book(req.body);

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