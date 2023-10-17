const mongoose = require("mongoose")

const TestSchema = mongoose.Schema({
  title: String,
  accessLink: String,
  questions: [],
})

module.exports = mongoose.model("Test", TestSchema)
