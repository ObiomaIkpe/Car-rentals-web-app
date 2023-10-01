const mongoose = require('mongoose');

const connectDB = (URL) => {
    try{
        console.log('connected to DB')
        return mongoose.connect(URL)
    }catch(err){
        console.log('error')
    }
}

module.exports = connectDB;