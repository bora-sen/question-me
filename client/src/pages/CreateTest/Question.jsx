import React from "react"

function Question({ id,setQuestions }) {
  function handleSaveQuestion(e) {
    e.preventDefault()
    let choiceACheckbox = document.getElementById(`choice_of_${id}_a`)
    let choiceBCheckbox = document.getElementById(`choice_of_${id}_b`)
    let choiceCCheckbox = document.getElementById(`choice_of_${id}_c`)
    let choiceDCheckbox = document.getElementById(`choice_of_${id}_d`)

    let choiceAInput = document.getElementById(`choice_of_${id}_input_a`)
    let choiceBInput = document.getElementById(`choice_of_${id}_input_b`)
    let choiceCInput = document.getElementById(`choice_of_${id}_input_c`)
    let choiceDInput = document.getElementById(`choice_of_${id}_input_d`)

    let questionTitle = document.getElementById(`question-title_${id}`).value
    let newQuestion = {
      title: questionTitle,
      choices: [
        {
          title: choiceAInput.value,
          prefix: "a",
          isTrue: choiceACheckbox.checked,
        },
        {
          title: choiceBInput.value,
          prefix: "b",
          isTrue: choiceBCheckbox.checked,
        },
        {
          title: choiceCInput.value,
          prefix: "c",
          isTrue: choiceCCheckbox.checked,
        },
        {
          title: choiceDInput.value,
          prefix: "d",
          isTrue: choiceDCheckbox.checked,
        },
      ],
    }
    setQuestions(old =>[...old,newQuestion])
    e.target.disabled = true
  }
  return (
    <div className="w-50 px-4 py-2 my-4 border rounded mx-auto">
      <div className="row g-3 align-items-center invisible">
        <span className="fw-bold fs-2">1</span>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col col-auto">
          <label htmlFor={`question-title_${id}`}>Question Title ?</label>
        </div>
        <div className="col col-auto">
          <input type="text" className="form-control" name={`question-title_${id}`} id={`question-title_${id}`} />
        </div>
      </div>

      {/* Choice a */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" name={`choice_of_${id}`} id={`choice_of_${id}_a`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>a ) </span>
        </div>
        <div className="col col-auto">
          <input type="text" className="form-control" id={`choice_of_${id}_input_a`} />
        </div>
      </div>

      {/* Choice b */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" name={`choice_of_${id}`} id={`choice_of_${id}_b`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>b ) </span>
        </div>
        <div className="col col-auto">
          <input type="text" className="form-control" id={`choice_of_${id}_input_b`} />
        </div>
      </div>

      {/* Choice c */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" name={`choice_of_${id}`} id={`choice_of_${id}_c`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>c ) </span>
        </div>
        <div className="col col-auto">
          <input type="text" className="form-control" id={`choice_of_${id}_input_c`} />
        </div>
      </div>

      {/* Choice d */}
      <div className="row g-3 align-items-center my-2">
        <div className="col col-auto">
          <input type="radio" name={`choice_of_${id}`} id={`choice_of_${id}_d`} className="form-check-input" />
        </div>
        <div className="col col-auto">
          <span>d ) </span>
        </div>
        <div className="col col-auto">
          <input type="text" className="form-control" id={`choice_of_${id}_input_d`} />
        </div>
      </div>

      {/* Save Question Button */}
      <div className="row">
        <div className="col col-auto">
          <button className="btn btn-secondary" onClick={(e) => handleSaveQuestion(e)}>
            Save Question
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question
