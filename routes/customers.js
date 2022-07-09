const express = require('express');
const { required } = require('joi/lib/types/lazy');
const router = express.Router();
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
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
}));

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort({name: 1})
    res.send(customers)
})

router.post('/', async (req, res) => {

    let customer = new Customer(req.body /*//! Mudar isto para ver se funciona */
    );

    customer = await customer.save()

    res.status(201).send(customer)
})

router.delete('/:id', async (req, res) => {

    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) res.status(404).send('There\'s no customer with such id.');

    res.status(201).send(customer)
})

router.put('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        premium: req.body.premium,
        phone: req.body.phone
    })

    if (!customer) res.status(404).send('There\'s no customer with such id.');

    res.status(201).send(customer)
})

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) return res.status(404).send('customerect not found');

    res.status(404).send(customer);
})

module.exports = router;