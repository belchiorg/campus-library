import mongoose from 'mongoose';
import { subjectSchema } from './subjects.js'

export const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 255
    },
    author: {
        type: [ String ],
        required: true,
    },
    subject: {
        type: [ subjectSchema ],
        required:true 
    },
    available: { 
        type: Boolean,
        required: true
    }
})

export const Book = mongoose.model('Book', bookSchema);

