import mongoose from 'mongoose';

export const customerSchema = new mongoose.Schema({
    premium: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 255
    },
    phone: {
        type: Number,
        min: 1000,
        max: 999999999999
    }
})

export const Customer = mongoose.model('Customer', customerSchema);

