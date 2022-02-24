
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());


var pg = require("pg-promise")(/*options*/);
var { Client } = require('pg');




var client = new Client({
  user: "tobdtoorexjfoy",
  password: "fc0c3fe412efdd7dd76992e423d3a794109d2b5fcf63495a863fd960bcd40e8d",
  database: "d2s94ef0jbngij",
  port: 5432,
  host: "    ec2-79-125-26-60.eu-west-1.compute.amazonaws.com",
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

  var currentdate = new Date(); 
  var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


  let query = `INSERT INTO templog VALUES (${req.body.temp}, '${datetime}')`
  client.query(query)
    .then(function (data) {
      res.send(data)
    })
    .catch(function (error) {
      res.send(error)
    });
})

app.listen(process.env.PORT || 5000, () => console.log('Server running at port 5000'));
