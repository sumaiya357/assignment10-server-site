const express = require('express');
const app = express();
const port = process.env.PORT||5000;

const data =require('./data.json')
const category = require('./category.json')
const cors = require('cors');

app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use(cors())

app.get('/data',(req,res)=> {
    res.send(data)
})

app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCategory = category.filter( single_category => single_category.id ===id)
    res.send( selectedCategory)
})
app.listen(port, ()=>{
    console.log('Course loading on port')
})