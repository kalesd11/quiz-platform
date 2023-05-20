const initialState = {};

const addNewQuetionReducer = (state = initialState, { type, payload }) => {
  if (type === "addNewQuetion") {
    
  const newState = { ...state, ...payload};
  // console.log(newState)
  return newState
  } 
  else if (type === "addNewOption") {
    const newState = { ...state };
    newState.option = [...newState.option, { ...payload }];
    return newState;
  } 
  
  else if (type === "deleteNewOption") {
    const option = state.option.filter((item) => {
  
      return item.optionId !== payload.optionId;
    });
    const newState = {...state}
    newState.option = [...option]
    return newState
  }
  
  else if(type==='newIsCheckOption'){
  const newState =  {...state}
  
 const newOption = newState.option.map(item=>{
      if(item.optionId===payload.optionId){
        const newItem = {...item}
        newItem.isChecked= ! newItem.isChecked
        return newItem
      }
      else{
        return item
      }
    })
    // console.log(newState)
    return {...newState, option:newOption}
  }

  else {
    return state;
  }
};

export default addNewQuetionReducer;
