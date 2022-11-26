const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();


app.get('/', async (req, res) => {
    res.send('Bile-store server is running');
})


app.listen(port, () => console.log(`Bike-store running on ${port}`));