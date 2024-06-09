const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const connection = require('./db');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors()); // Allow all origins


app.post('/login',(req,res)=>{
  var data=req.body;
  console.log(data);
  res.json({ message: 'Data received successfully', data: data });
});

app.post('/main_data', (req, res) => {
  console.log("mainPage Requested");
  console.log(req.body);
  
  let data = ['HeadPhones','Watches'];
  let main_data = {};
  let completedQueries = 0;

  data.forEach(element => {
    connection.query(`SELECT img,id,main_cat,name FROM product WHERE main_cat="${element}"`, (error, results, fields) => {
      if (error) {
        console.error('An error occurred while executing the query:', error);
        res.status(500).send('An error occurred while processing your request.');
        return;
      }

      main_data[element] = results;
      completedQueries++;

      if (completedQueries === data.length) {
        console.log(main_data);
        res.json(main_data); // Send the response to the client
      }
    });
  });
});

app.post('/sub_main',async(req,res)=>{

  var id=req.body.id;
  console.log(id);
  connection.query(`SELECT * FROM product WHERE id=${id}`,(error, results, fields) => {
    if (error) {
      console.error('An error occurred while executing the query:', error);
      res.status(500).send('An error occurred while processing your request.');
      return;
    }
    //console.log(results);
    res.status(200).json(results);

  });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

