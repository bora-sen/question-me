const mongoose = require('mongoose');


const TestSchema = mongoose.Schema({
    title:String,
    accessToken:String,
    questions:[]
})


module.exports = mongoose.model('Test',TestSchema);