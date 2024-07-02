const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', routes);

app.get("/",(req,res)=>{
    res.send("hii");
})

app.listen(PORT,()=>{
    console.log("server is listening at 3000");
})