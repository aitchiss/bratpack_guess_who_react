import React from 'react'
import QuestionSelect from '../components/QuestionSelect'
import Answer from '../components/Answer'

class QandAContainer extends React.Component{

  render(){
    return(
      <div className="q-and-a">
        <QuestionSelect questionItems={this.props.questionItems} answerQuestion={this.props.answerQuestion}/>
        <Answer answer={this.props.answer}/>
      </div>
    )
  }
}

export default QandAContainer