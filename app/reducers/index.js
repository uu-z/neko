import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import * as ActionTypes from '../actions'


function option(state={ isopen:null }, action){
  switch(action.type){
    case ActionTypes.HANDLE_OPTION_CHANGE:
      if(action.parent === 'option'){
        return Object.assign({}, state, action.data)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  routing,
  option,
})

export default rootReducer
