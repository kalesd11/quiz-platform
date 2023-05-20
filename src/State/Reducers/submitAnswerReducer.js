const initialState = []

const submitAnswerReducer= (state = initialState, { type, payload }) => {
  // console.log(state)
  switch (type) {

  case 'submitAnswer':
        let isQuetion = state.filter(item=>{
          return item.quetionId===payload.quetionId
        })
      return isQuetion[0]? state.map(item=>{
          if(item.quetionId===payload.quetionId){
            const newItem = {...item}
            newItem.mark = payload.mark
            newItem.optionId = payload.optionId
            return newItem
          }else{
            return item
          }
      }):[...state,{...payload}];
  
  case "submitQuiz":
    return []

  default:
    return state
  }
}
export default submitAnswerReducer