import React from 'react'

function QuestionComponent({questionObject,questionsArray}) {
    let nthQuestion = questionObject.id;


  function handleQuestionSubmit(e) {


    e.preventDefault();

    let newQuestTitle = document.getElementById('input_title_'+nthQuestion).value;
    let newChoice_a = document.getElementById('input_choice_a_'+nthQuestion).value;
    let newChoice_b = document.getElementById('input_choice_b_'+nthQuestion).value;
    let newChoice_c = document.getElementById('input_choice_c_'+nthQuestion).value;
    let newChoice_d = document.getElementById('input_choice_d_'+nthQuestion).value;

    let isTrue_a = document.getElementById('is_a_true_'+nthQuestion).checked;
    let isTrue_b = document.getElementById('is_b_true_'+nthQuestion).checked;
    let isTrue_c = document.getElementById('is_c_true_'+nthQuestion).checked;
    let isTrue_d = document.getElementById('is_d_true_'+nthQuestion).checked;

    let trueChoiceId = 0;


    if(isTrue_a){trueChoiceId = 1}
    else if(isTrue_b){trueChoiceId = 2}
    else if(isTrue_c){trueChoiceId = 3}
    else if(isTrue_d){trueChoiceId = 4}


    let newQuestChoices = [
        { id:1, title:newChoice_a},
        { id:2, title:newChoice_b},
        { id:3, title:newChoice_c},
        { id:4, title:newChoice_d},
    ]
    let newQuest = {
        id:nthQuestion,
        title:newQuestTitle,
        choices:newQuestChoices
    }

    console.log("Click Handled.");
    console.log(newQuest);
    questionsArray.push(newQuest);
    console.log(questionsArray);



}





  return (
        <div className='flex flex-col' key={nthQuestion}>
            <span>Question {nthQuestion}</span>
            <label htmlFor="input_title">Title: </label>
            <input type="text" id={"input_title_"+nthQuestion}/>
            <span>Choices</span>
            <ul>
                <li>
                    <label htmlFor={"input_choice_a_"+nthQuestion}>{"Choice a )"}</label>
                    <input type="text" id={"input_choice_a_"+nthQuestion} />
                    <input name={"isTrue_"+nthQuestion} type="radio" id={"is_a_true_"+nthQuestion}/>
                </li>
                <li>
                    <label htmlFor={"input_choice_b_"+nthQuestion}>{"Choice b )"}</label>
                    <input type="text" id={"input_choice_b_"+nthQuestion} />
                    <input name={"isTrue_"+nthQuestion} type="radio" id={"is_b_true_"+nthQuestion}/>
                </li>
                <li>
                    <label htmlFor={"input_choice_c_"+nthQuestion}>{"Choice c )"}</label>
                    <input type="text" id={"input_choice_c_"+nthQuestion} />
                    <input name={"isTrue_"+nthQuestion} type="radio" id={"is_c_true_"+nthQuestion}/>
                </li>
                <li>
                    <label htmlFor={"input_choice_d_"+nthQuestion}>{"Choice d )"}</label>
                    <input type="text" id={"input_choice_d_"+nthQuestion} />
                    <input name={"isTrue_"+nthQuestion} type="radio" id={"is_d_true_"+nthQuestion}/>
                </li>
            </ul>
            <button onClick={e => {handleQuestionSubmit(e,nthQuestion)}}>Submit Question</button>
        </div>
  )
}

export default QuestionComponent