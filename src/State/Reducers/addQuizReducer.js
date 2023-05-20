const initialState = JSON.parse(localStorage.getItem("quiz")) || []

const addQuizReducer=(state = initialState, { type, payload }) => {
    // console.log(state)
if (type==='addQuiz'){
    const newState = [...state,payload]
    // console.log(newState)
    return newState;
}
else if(type==="localQuiz"){
  if(payload){
    let newState = [...payload]
  return newState
  }else{
    return state
  }
}
else if(type==='deleteQuiz'){
  // console.log(state)
  // console.log(payload)
    return state.filter(item=>{
        return item.quizId !== payload.quizId
    })
}
  else if(type==='deleteQuetion'){
    
    return state.map(item=>{
      if(item.quizId===payload.quizId){
        // console.log(payload.id)
        let data = item.quetionState.filter(quetions=>{
            return quetions.id !== payload.id
          }) 
          let newState = {...item}
          newState.quetionState = data
          return newState
      }else{
        return item
      }
    })
  }

  else if(type==="addQuetion"){
    return state.map(item=>{
      if(item.quizId===payload.quetion.quizId){
        // console.log(payload.id)
          let newState = {...item}
          newState.quetionState = [...newState.quetionState,{...payload.quetion}]
          // console.log(newState)
          return newState
      }
        else{
            return item
        }
    })
}
else if(type==="editQuizSaveQuetion"){
  let newQuetion = state.map(item=>{
    if(item.quizId===payload.quizId){
      let newState = {...item}
      let newquetionState = item.quetionState.map(quetion=>{
        if(quetion.id===payload.id){
          return {...payload}
        }else{
          return quetion
        }
      })
      // console.log(payload)
      newState.quetionState = newquetionState
      return newState
    }
    else {
      return item
    }
  })
  return newQuetion
}
else if(type === "setInactive"){
 
 let newState = state.map(item=>{
  console.log(state)
    let newItem = {...item}
    if(newItem.quizId===payload.quizId){
      newItem.inactive = !newItem.inactive
      console.log(newItem)
      return newItem
    }else{
      return item
    }
  })
  return newState
}
else{
    return state
}

}
export default addQuizReducer;