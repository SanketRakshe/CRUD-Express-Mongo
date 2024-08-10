const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

//Connect to mongodb
mongoose.connect('mongodb+srv://rakshesanket67:Sanket%40123@clustercrud.4k2j1.mongodb.net/')
.then(() => {
    console.log('Connected to mongoDB server');
})
.catch((err) => {
    console.log('Error connecting to mongoDB server', err.message);
})

app.use('/api', productRoutes);

app.listen(PORT, function () {
    console.log(`server is up on http://localhost:${PORT}`);
});