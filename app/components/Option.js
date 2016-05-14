import React, { Component } from 'react'
import styles from './Option.css'
import classnames from 'classnames'
import { connect } from 'react-redux'
import {handleOptionChange} from '../actions/index'

class Option extends Component {
  constructor(props){
    super(props)
  this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    const {handleOptionChange, isopen}= this.props
    handleOptionChange('isopen', !isopen, 'option')
  }
  
  render() {
    const { isopen } = this.props
    
    // const optionStyle = classnames([styles.option,{
    //   'fa': true,
    //   'fa-circle-o': !isopen,
    //   'fa-dot-circle-o' : isopen,
    //   'fa-lg': true,
    // }])
    const optionText = isopen ? 'Romaji' : 'Katakana'
    
    return (
      <div 
        onClick={()=> this.handleClick()}
        className={styles.container}>
        <span className={styles.option}>{optionText}</span>
      </div>
    )
  }
}

Option.defaultProps = {
  isopen: false
}

function mapStateToProps(state){
  return{}
}

export default connect(mapStateToProps, {
  handleOptionChange
})(Option)