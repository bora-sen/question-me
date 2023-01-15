const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/question.js');
const Test = require('./models/test');
dotenv.config()



let tests = [];


let con_string = process.env.CON_STR;
mongoose.set('strictQuery',true);
mongoose.connect(con_string).then(() => {

    console.log("Connection to DB is established..");

    const app = express();
    app.use(express.json());
    app.use(cors({ credentials: true }));


    app.get("/allTests/",(req,res) =>{
        try{

            console.log("===================================");
            console.log("New GET Request Recieved");
            console.log("===================================");


            Test.find({}).then((query_res) => {
                res.send(query_res);
                console.log("All question data is sent...");
            });

        }catch(err){
            console.log(err.message);
        }
    })

    app.get("/getTest/:aT",(req,res) =>{
        try{
            let localToken = req.params.aT;
            console.log("Token Arrived! :"+localToken);

            console.log("===================================");
            console.log("New GET Request Recieved");
            console.log("===================================");-
            Test.find({"accessToken":localToken}).then((query_res) => {
                res.send(query_res);
                console.log("All question data is sent...");
            });
        }catch(err){
            console.log(err.message);
            res.send(err.message)
        }
    })


    app.post("/",cors(),(req,res) => {
        try{
            console.log("===================================");
            console.log("New POST Request Recieved");
            console.log(req.body);
            console.log("===================================");

            tests.push(req.body);
            console.log(tests);

            res.send("POST Request Recieved. | Everything went well.")
            Test.create(req.body).then(() => {console.log("Created Test ")}).catch(err => {console.log(err.message)});

        }catch(err){
            console.log(err.message);
        }
    })

    app.listen(5000,() => {
        console.log("Server is started & listening port: [5000]");
    })













    /*

    Question.create({
        title:"test question",
        choices:[
            {
                id:1,
                title:"a ) test 1"
            },
            {
                id:2,
                title:"b ) test 1"
            },
            {
                id:3,
                title:"c ) test 1"
            },
            {
                id:4,
                title:"d ) test 1"
            }
        ],
        answerId:2
    }).then(() => {console.log("user 1 created!!!")});
    Question.create({
        title:"My Question",
        choices:[
            {
                id:1,
                title:"a ) test a"
            },
            {
                id:2,
                title:"b ) test b"
            },
            {
                id:3,
                title:"c ) test c"
            },
            {
                id:4,
                title:"d ) test d"
            }
        ],
        answerId:2
    }).then(() => {console.log("user 1 created!!!")});

    */

})