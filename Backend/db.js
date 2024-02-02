const mongoose = require('mongoose')
require('dotenv').config();

const connectToDB = async () =>{
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
        });
        console.log('📦 connected to mongoDB');
    } catch (error){
        console.log("Error connecting to DataBase with the code", error);
    }
}

const isConnected = ()=>{
    return mongoose.connection.readyState === 1
}

module.exports = {connectToDB, isConnected}