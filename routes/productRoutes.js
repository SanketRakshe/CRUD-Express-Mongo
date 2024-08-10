const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Create a new Product
router.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch(err) {
        res.status(500).send(err.message);
    }
});

// Update a product by ID
router.put('/products/:id', async (req, res) => {
    try {
        const product = await(Product.findByIdAndUpdate(req.params.id, req.body));
        if(!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) {
            res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    } catch(err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;