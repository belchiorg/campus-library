import express from 'express';
export const router = express.Router();
import mongoose from 'mongoose'
import { Subject } from '../models/subjects.js'


router.get('/', async (req, res) => {
    //sends all the subjects on the server
    const subjects = await Subject.find().sort({name: 1});
    res.send(subjects);
})

router.post('/', async (req, res) =>    {
    //Adds a new subject
    
    let subj = new Subject({
        name: req.body.name
    });

    subj = await subj.save()

    res.send(subj);
    res.status(201);
})


router.put('/:id', async (req, res) => {
    //Finds the subject with the specified id
    const subj = await Subject.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            new: true
        });
    
    if (!subj) return res.status(404).send('There is not a subject with such id');

    res.status(201).send(subj)
});

router.delete('/:id', async (req, res) => {
    //Removes a book from the API

    //Finds the book with the specified id
    const subj = await Subject.findByIdAndRemove(req.params.id);

    if (!subj) return res.status(404).send('Theres\'s no book with id ' + req.params.id);

    //Gets the book index and removes it.
    res.status(201).send(subj)
}) 

router.get('/:id', async (req, res) => {
    const subj = await Subject.findById(req.params.id)
    //If the list is empty, there's no book with such subject -> error 404, exits
    if (!subj) return res.status(404).send('Subject not found');

    //sends all books with the specified subject
    res.send(subj);
})

