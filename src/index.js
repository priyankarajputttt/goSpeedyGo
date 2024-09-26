const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
// const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());


const dbURI = 'mongodb+srv://pr639490:g0gLbWKTnmIvhChj@cluster0.utbnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Swagger setup
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// User routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
