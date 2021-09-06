const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,
    {
     useNewUrlParser:true,
     useUnifiedTopology: true,
     poolSize:process.env.POOLSIZE
    },(err) =>{
        if(err){
            console.log('Error in Connection with DB ' + err);
        }
        else{
            console.log("DB is Connected...");
        }
});
module.exports = mongoose;