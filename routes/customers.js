import express from 'express';
export const router = express.Router();
import { Customer } from '../models/customer.js'

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort({name: 1})
    res.send(customers)
})

router.post('/', async (req, res) => {

    let customer = new Customer(req.body
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
        phone: req.body.phone,
        new: true
    })

    if (!customer) res.status(404).send('There\'s no customer with such id.');

    res.status(201).send(customer)
})

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) return res.status(404).send('customer not found');

    res.status(404).send(customer);
})
