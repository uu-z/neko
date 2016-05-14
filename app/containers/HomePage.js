import React, { Component } from 'react'
import Word from '../components/Word'
import Option from '../components/Option'
import { connect } from 'react-redux'

class HomePage extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const {isopen} = this.props
    
    return (
      <div>
        <Option isopen={isopen}/>
        <Word isopen={isopen}/>
      </div>
    )
  }
}

function mapStateToProps(state,props){
  const  {
    option: {isopen}
  } = state
 
  return {
    isopen
  }
}

export default connect(mapStateToProps)(HomePage)