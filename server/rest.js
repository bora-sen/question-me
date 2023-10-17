const express = require("express")
const fs = require("fs")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config()
const {TestRouter,ResultRouter} = require("./routes")

mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGODB_CONNECTION_URI).then(() => {
  console.log(`[${new Date().toISOString()}] Connected To Database..`)

  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use("/test/",TestRouter)
  app.use("/result/",ResultRouter)
  app.use(
    morgan("[:date[iso]] :method Request to :url for :remote-addr", { immediate: true, stream: fs.createWriteStream("./logs/access.log", { flags: "a" }) })
  )
  app.use(cors({ credentials: true }))

  app.listen(process.env.PORT, () => {
    console.log(`[${new Date().toISOString()}] Server is Listening on Port [${process.env.PORT}]`)
  })
})
