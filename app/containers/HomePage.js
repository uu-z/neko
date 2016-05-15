import React, { Component } from 'react'
import Word from '../components/Word'
import Option from '../components/Option'
import { connect } from 'react-redux'

class HomePage extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const {isopen, clickWord} = this.props
    
    return (
      <div>
        <Option isopen={isopen}/>
        <Word isopen={isopen} clickWord={clickWord}/>
      </div>
    )
  }
}

function mapStateToProps(state,props){
  const  {
    option: {isopen},
    word: {clickWord}
  } = state
 
  return {
    isopen,
    clickWord
  }
}

export default connect(mapStateToProps)(HomePage)