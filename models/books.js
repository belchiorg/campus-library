import mongoose from 'mongoose';
import { subjectSchema } from './subjects.js'

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: [ String ],
        required: true,
    },
    subject: {
        type: [ subjectSchema ],
        required:true 
    }
})

export const Book = mongoose.model('Book', bookSchema);

