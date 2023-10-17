const mongoose = require("mongoose")

const ResultSchema = mongoose.Schema({
  testAccessLink: String,
  accessLink:String,
  name:String,
  score: Number,
  isPassed: Boolean,
})

module.exports = mongoose.model("Result", ResultSchema)
