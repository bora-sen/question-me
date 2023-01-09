import React from 'react'
//import style from './question_component.module.css';

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

    let true_id = 0;
    if(isTrue_a){true_id = 1}
    else if(isTrue_b){true_id = 2}
    else if(isTrue_c){true_id = 3}
    else if(isTrue_d){true_id = 4}


    let newQuestChoices = [
        { id:1, title:newChoice_a},
        { id:2, title:newChoice_b},
        { id:3, title:newChoice_c},
        { id:4, title:newChoice_d},
    ]
    let newQuest = {
        id:nthQuestion,
        title:newQuestTitle,
        trueChoiceId:true_id,
        choices:newQuestChoices,

    }

    console.log("Click Handled.");
    console.log(newQuest);
    questionObject = newQuest;
    console.log(questionObject);

    questionsArray.push(questionObject);
    console.log(questionsArray);
}




  return (
        <div className='block text-center mb-4 bg-white_main p-4 ' key={nthQuestion}>
            <div className='flex-col'>
                <span className='font-display text-2xl sm:text-3xl'>Question {nthQuestion}</span>
                <div className='flex justify-center items-center mb-4 mt-4'>
                    <label className='mr-2' htmlFor="input_title">Title: </label>
                    <input className='w-full h-8' placeholder='Enter question title' type="text" id={"input_title_"+nthQuestion}/>
                </div>

                <div className='mb-4 flex justify-between'>
                    <span className='text-2xl font-title-1 text-stroke ml-12'>Choices</span>
                    <span className='text-2xl font-title-1 text-stroke mr-12'>True?</span>
                </div>
                <ul className=''>
                    <li className='mb-3'>
                        <label className='' htmlFor={"input_choice_a_"+nthQuestion}>{"Choice a )"}</label>
                        <input className='w-68 sm:w-3/4 h-8 ml-2' placeholder='Enter a choice..' type="text" id={"input_choice_a_"+nthQuestion} />
                        <input className='ml-2' name={"isTrue_"+nthQuestion} type="radio" id={"is_a_true_"+nthQuestion}/>
                    </li>
                    <li className='mb-3'>
                        <label className='' htmlFor={"input_choice_b_"+nthQuestion}>{"Choice b )"}</label>
                        <input className='w-68 sm:w-3/4 h-8 ml-2' placeholder='Enter a choice..' type="text" id={"input_choice_b_"+nthQuestion} />
                        <input className='ml-2' name={"isTrue_"+nthQuestion} type="radio" id={"is_b_true_"+nthQuestion}/>
                    </li>
                    <li className='mb-3'>
                        <label className='' htmlFor={"input_choice_c_"+nthQuestion}>{"Choice c )"}</label>
                        <input className='w-68 sm:w-3/4 h-8 ml-2' placeholder='Enter a choice..' type="text" id={"input_choice_c_"+nthQuestion} />
                        <input className='ml-2' name={"isTrue_"+nthQuestion} type="radio" id={"is_c_true_"+nthQuestion}/>
                    </li>
                    <li className='mb-3'>
                        <label className='' htmlFor={"input_choice_d_"+nthQuestion}>{"Choice d )"}</label>
                        <input className='w-68 sm:w-3/4 h-8 ml-2' placeholder='Enter a choice..' type="text" id={"input_choice_d_"+nthQuestion} />
                        <input className='ml-2' name={"isTrue_"+nthQuestion} type="radio" id={"is_d_true_"+nthQuestion}/>
                    </li>
                </ul>
            </div>
            <button className='bg-highlight text-white_main rounded-xl p-2' onClick={e => {handleQuestionSubmit(e,nthQuestion)}}>Submit Question</button>
        </div>
  )
}

export default QuestionComponent