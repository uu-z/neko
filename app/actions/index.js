export const HANDLE_OPTION_CHANGE = 'HANDLE_OPTION_CHANGE'

export function handleOptionChange (key,value,parent){
  return {
    type: HANDLE_OPTION_CHANGE,
    parent: parent,
    data: {
      [key]: value
    }
  }
}
