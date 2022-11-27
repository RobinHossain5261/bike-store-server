const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//mideleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nbqc6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const categoryCollection = client.db('bikeStore').collection('categoryOptions');

        app.get('/products', async (req, res) => {
            const query = {};
            const options = await categoryCollection.find(query).toArray();
            res.send(options)
        })

        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const singleProducts = await categoryCollection.findOne(query);
            res.send(singleProducts)
        })

    }
    finally {

    }

}

run().catch(console.log)


app.get('/', async (req, res) => {
    res.send('Bike-store server is running');
})


app.listen(port, () => console.log(`Bike-store running on ${port}`));