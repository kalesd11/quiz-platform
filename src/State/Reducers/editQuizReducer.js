const initialState = {}

const editQuizReducer = (state = initialState, { type, payload }) => {
  if(type==='editQuiz'){
    const newState = {...state,...payload}
    // console.log(newState)
    return newState
  }
  else if(type==="editQuizDeleteOption"){
    let newOption = state.option.filter(item=>{
        return item.optionId !== payload.optionId
    })
    const newState = {...state}
    newState.option = newOption
    return newState
  }
  else if(type==="editQuizAddOption"){
    let newState = {...state}
    newState.option = [...newState.option,{...payload}]
    return newState
  }
  else if(type==="editQuizIsCheckedOption"){
    const newState = {...state}
    let newOption = state.option.map(item=>{
        if(item.optionId===payload.optionId){
            let newItem = {...item}
            newItem.isChecked = ! newItem.isChecked
            return newItem
        }else{
            return item
        }
     
    })
    newState.option= newOption
    return newState
  }
  else if(type==="editQuizAddQuetion"){
    const newState = {...state}
    newState.quetion = payload.quetion
    // console.log(newState)
    return newState
  }
  else{
    return state
  }
  
}
export default editQuizReducer