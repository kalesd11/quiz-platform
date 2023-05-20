let INIT_STATE = []
const singleCorrectReducer = (state=INIT_STATE,action)=>{
        if(action.type==="singleCorrectMcq"){
            let newState = [...state,{...action.payload}]
            // console.log(newState)
            return newState
            
        }
      
        else{
            // console.log(state)
            return state
        }
}
export default singleCorrectReducer;