const express = require("express")
const { v4 } = require("uuid")
const cors = require("cors")
const { Test } = require("../models")

const testRouter = express.Router()

testRouter.get("/:aLink", async (req, res) => {
  try {
    let localToken = req.params.aLink
    const searchedList = await Test.find({ accessLink: localToken })
    const selectedTest = await searchedList[0]
    const filteredQuestions = await selectedTest.questions.map((question) => {
      return {
        title: question.title,
        id: question.id,
        choices: question.choices,
      }
    })
    const filteredTest = {
      title: selectedTest.title,
      questions: await filteredQuestions,
    }
    if ((await searchedList.length) === 0) {
      res.sendStatus(400)
    } else {
      res.send(filteredTest)
    }
  } catch (err) {
    console.log(err.message)
  }
})

testRouter.post("/create/", cors(), (req, res) => {
  try {

    const { title, questions } = req.body
    const newTest = {
      title,
      questions,
      accessLink: v4(),
    }

    Test.create(newTest)
      .then(() => {
        console.log(`[${new Date().toISOString()}] Created a new Test`)
        res.send({
          message: "Test is created!",
          accessLink: newTest.accessLink,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  } catch (err) {
    console.log(err.message)
  }
})

testRouter.get("/all/", (req, res) => {
  try {
    //TODO: Add Isolation (returns truePrefix attribute)
    Test.find({}).then((query_res) => {
      res.send(query_res)
    })
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = testRouter
