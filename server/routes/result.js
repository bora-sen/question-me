const express = require("express")
const { Result, Test } = require("../models")
const { v4 } = require("uuid")
const cors = require("cors")
const resultRouter = express.Router()

resultRouter.get("/:aT", async (req, res) => {
  try {
    let localToken = req.params.aT
    const searchedList = await Result.find({ accessLink: localToken })
    const selectedResult = await searchedList[0]
    res.send(selectedResult)
  } catch (err) {
    console.log(err.message)
  }
})

resultRouter.post("/create/", cors(), async (req, res) => {
  try {
    let trueCount = 0

    const filteredTests = await Test.find({ accessLink: req.body.accessLink })
    const selectedTest = await filteredTests[0]

    await selectedTest.questions.forEach((databaseQuestion) => {
      req.body.questions.forEach((requestQuestion) => {
        if (databaseQuestion.id === requestQuestion.id && databaseQuestion.truePrefix === requestQuestion.truePrefix) {
          trueCount += 1
        }
      })
    })

    let score = (trueCount / (await selectedTest.questions.length)) * 100

    let isPassed = score >= 50 ? true : false

    const createResultResponse = await Result.create({
      testAccessLink: selectedTest.accessLink,
      accessLink: v4(),
      name: req.body.name,
      score,
      isPassed,
    })
    //TODO: Return questions array with true or false property
    res.send(createResultResponse)
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = resultRouter