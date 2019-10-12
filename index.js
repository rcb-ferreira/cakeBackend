const express = require('express'),
    cors = require('cors'),
    cakeRouter = require('./routes/cakes');

const app = express();

// Enable Content-type JSON
app.use(express.json());
// Enable Contet-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Enable CORS for testing, not production
app.use(cors());

app.get('/api', (req, res) => {
    return res.send('Welcome to the cake app');
});

// API version 1 routes
app.use('/api/v1', cakeRouter);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on ${process.env.PORT || 4000} port.`);
});