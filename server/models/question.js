const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    choices:Array,
    answerId:Number
})


module.exports = mongoose.model('Question',questionSchema);