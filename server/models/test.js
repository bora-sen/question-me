const mongoose = require('mongoose');


const TestSchema = mongoose.Schema({
    questions:Array,
})


module.exports = mongoose.model('Test',TestSchema);