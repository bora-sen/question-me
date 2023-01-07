import React from 'react'
import QuestionComponent from '../QuestionComponent';

function CreateTestComponent() {


  

  let [InputTest,setInputTest] = React.useState();

  let [createdId,setCreatedId] = React.useState(1);

  const [questions,setQuestions] = React.useState([]);

    function handleAddQuestionButton(e){
      e.preventDefault();
      console.log("Handled AddQuestion Button");
      setQuestions(question => [...question,{
        id:createdId,
        title:"soru 1",
        choices:[]
      }])
      setCreatedId(createdId += 1);
      console.log("New Create ID: "+createdId);
    }



  return (
    <section>
        <span>Test 1</span>
        <div>
          <h2>Questions:</h2>
          {
            questions.map(question => {
              return (
                <QuestionComponent key={question.id} questionObject={question} questionsArray={questions}/>
              )
            })
          }
          <button onClick={e => {handleAddQuestionButton(e)}}>Add Questions</button>
        </div>
        <button onClick={e => {console.log("Clicked")}}>Submit Test</button>
    </section>
  )
}

export default CreateTestComponent