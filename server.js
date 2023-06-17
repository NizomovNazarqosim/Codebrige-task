const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/dogRouter.js');

const port = 8000;
const app = express();
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ping', (req, res) => {
    res.status(200).send({
        message: 'Dogshouseservice.Version1.0.1'
    });
});
app.use('/dogs', router);

app.use('/*', (req, res) => {
    res.status(400).send({
        message: 'This url is not found'
    });
})

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
})