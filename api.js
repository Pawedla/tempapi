
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());


var pg = require("pg-promise")(/*options*/);
var { Client } = require('pg');

var client = new Client({
  user: "nwmpqvvxenofxa",
  password: "b9ecb9382f235ffda326de765f57f7ed00d882084ed4ef5ee7d1cc090c5bf788",
  database: "dca66vstun5di9",
  port: 5432,
  host: "ec2-52-31-217-108.eu-west-1.compute.amazonaws.com",
  ssl: { rejectUnauthorized: false }
});
client.connect();

app.get('/latest', (req, res) => {
  client.query('SELECT * FROM templog x WHERE x.m_time=(SELECT max(x.m_time) FROM templog x);')
    .then(function (data) {
      for (let row of data.rows) {
        res.send(row)
      }
    })
    .catch(function (error) {
      res.send(error)
    });
})

app.post('/add', (req, res) => {
  let query = `INSERT INTO templog VALUES (${req.body.temp}, '${req.body.m_time}')`
  client.query(query)
    .then(function (data) {
      res.send(data)
    })
    .catch(function (error) {
      res.send(error)
    });
})

app.listen(process.env.PORT || 5000, () => console.log('Server running at port 5000'));
