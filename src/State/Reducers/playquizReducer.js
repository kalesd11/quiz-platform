 
 const initialState = {}
 
  const playquizReducer = (state = initialState, { type, payload }) => {
  if(type==='playQuizId'){
    return {...state,...payload}
  }
  else if(type==='playQuiz'){
    let newState = {...state}
    newState.user = payload.user
    return newState
  }
  else{
    return state    
  }
 }
 export default playquizReducer