const express = require('express');
const con = require('./config');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

app.get("/get" , (req, resp)=>{
    con.query("SELECT * from contact " , (err , result)=>{
        if(err) {
            resp.send('err');
        }
        else{
            resp.send(result);
        }
    })
});


app.post("/post" ,(req, resp)=>{
    const data = req.body;
    con.query('INSERT INTO contact SET?' , data , (err , result , fields) =>{
        if(err) throw err; 
        resp.send(result)
    })
} ); 

app.listen(4000);