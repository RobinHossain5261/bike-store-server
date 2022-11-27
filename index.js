const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

//mideleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Bike-store server is running');
})


app.listen(port, () => console.log(`Bike-store running on ${port}`));