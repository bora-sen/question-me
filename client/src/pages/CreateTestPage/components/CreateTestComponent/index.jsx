import React from 'react'
import QuestionComponent from '../QuestionComponent';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'

function CreateTestComponent() {

  const [showUrl,setShowUrl] = React.useState(false);

  let [test_url,setTest_url] = React.useState("localhost");

  let [createdId,setCreatedId] = React.useState(1);

  const [questions,setQuestions] = React.useState([]);
  //setQuestions([]);
  const [inputs,setInputs] = React.useState([]);

    function handleAddQuestionButton(e){
      e.preventDefault();
      console.log("Handled AddQuestion Button");
      setInputs(input => [...input,{
        id:createdId,
        title:"soru 1",
        choices:[]
      }])
      let inc = createdId +1;
      setCreatedId(inc);

      console.log("New Create ID: "+createdId);
    }



    function handleCreateTestButton(e){
      e.preventDefault();
      console.log("CreateTestButton is handled!");
      let test_name = document.getElementById('input_test_name').value;
      let access_code = uuidv4();
      console.log(access_code);

      let test_obj = {
        title:test_name,
        accessToken:access_code,
        questions:questions,
      };
      console.log(test_obj);
      axios.post('http://localhost:5000/',test_obj).then((req,res) => {
        if(req.status === 200){
          console.log("Test Succesfuly created!");
          setTest_url('http://localhost:3000/solve/'+access_code);
        }
      })
      setShowUrl(true);
    }


  return (
    <section>
      <div className='text-center'>
        <div className='flex items-center justify-center'>
        <input className='w-3/4 text-xl bg-highlight text-white_main placeholder:text-white_main placeholder:font-bold placeholder:text-center p-2 rounded-xl my-4 text-center' type="text" placeholder='Enter test title..' id="input_test_name" />
        </div>

          <div className=''>
            <h2 className='text-left font-bold font-poppins'>Questions:</h2>
            {
              inputs.map(question => {
                return (
                  <QuestionComponent key={question.id} questionObject={question} questionsArray={questions}/>
                )
              })
            }
            <button className='bg-highlight p-2 rounded-xl text-white_main mb-4 font-bold' onClick={e => {handleAddQuestionButton(e)}}>Add Questions</button>
          </div>
          <button className='bg-highlight p-2 rounded-xl text-white_main mb-4 text-3xl font-bold' onClick={e => {handleCreateTestButton(e)}}>Create Test</button>
      </div>


            {showUrl && 
            <div className='text-center font-bold mt-4'>
              <a href={test_url} className='bg-tertiary text-white_main p-4 rounded-xl'>Go to this link for solve the test! - {test_url}</a>
            </div>
            }

    </section>
  )
}

export default CreateTestComponent