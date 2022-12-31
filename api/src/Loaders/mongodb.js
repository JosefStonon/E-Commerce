const mongoose = require('mongoose');

async function startDB() {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017')
    
    
}

module.exports =startDB; 