import React from 'react'
import QuestionSelect from './QuestionSelect'
import Answer from './Answer'

const QandASection = (props) => {

  return(
    <div className="q-and-a">
      <QuestionSelect questionItems={props.questionItems} answerQuestion={props.answerQuestion}/>
      <Answer answer={props.answer}/>
    </div>
  )
}

export default QandASection