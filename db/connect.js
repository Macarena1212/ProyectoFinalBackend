const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('Database conectada!');
    } catch (error) {
        console.error('Error conectando a database:', error.message);
    }
};

module.exports = { connect };
 

