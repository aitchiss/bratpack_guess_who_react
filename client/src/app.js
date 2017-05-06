import React from 'react'
import ReactDOM from 'react-dom'
import GuessWho from './containers/GuessWho'


window.onload = function(){
  ReactDOM.render(
    <GuessWho/>,
    document.querySelector('#app')
    )
}