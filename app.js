const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');
app.use('/', require('./routes/userRoutes'));

const server = app.listen(process.env.PORT||1234,err=>{
    if(err){
           console.log('Error in Server Start ',err);
    }
    else{
        console.log('Server Started... ', server.address().port);
    }
})