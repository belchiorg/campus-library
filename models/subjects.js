import mongoose from 'mongoose' ;

export const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 255
    }
})

export const Subject = mongoose.model('Subject', subjectSchema);
