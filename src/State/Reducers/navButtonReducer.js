let INIT_STATE = {
    show1:false,
    show2:true
}
const navButtonReducer = (state=INIT_STATE,action)=>{
    if(action.type==="showNavButton"){
        let newState = {...state}
        newState.show1 = action.payload.value1
        newState.show2 = action.payload.value2
        // console.log(newState)
        return newState
    }
    else{
        // console.log(state)
        return state
    }
}

export {navButtonReducer};