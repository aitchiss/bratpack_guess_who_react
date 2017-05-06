import React from 'react'
import QuestionOption from './QuestionOption'

class QuestionSelect extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentQuestionIndex: 0
    }
  }

  handleAskClick(e){
    this.props.answerQuestion(this.state.currentQuestionIndex)
  }

  onOptionChange(e){
    this.setState({currentQuestionIndex: e.target.value})
  }

  render(){
    const selectOptions = this.props.questionItems.map((item, index) => {
      return <QuestionOption item={item} value={index} key={index}/>
    })

    return (
      <div className="question-picker">
        <p>characteristic: </p>
        <select onChange={this.onOptionChange.bind(this)}>
        {selectOptions}
        </select>
        <button className="question-button" onClick={this.handleAskClick.bind(this)}>ask</button>
      </div>
    )
  }

  
}

export default QuestionSelect