const initialState = [];

const singleCorrectOptionsReducer = (
  state = initialState,
  { type, payload }
) => {
  // console.log(state);
  if (type === "singleCorrectOptions") {
    const isOptionPresent = state.find((item) => item.id === payload.id);
    return isOptionPresent
      ? state.map((item) => {
          if (item.id === payload.id) {
            let current = { ...item };
            current.quetion = payload.quetion
            current.option = [...current.option, ...payload.option];
            // console.log(current)
            return current;
          } else {
            return item;
          }
        })
      : [...state, { ...payload }];
  } 
  else if (type === "isChecked") {
    return state.map((item) => {
         if (item.id === payload.quetionId) {
           let current = { ...item };
            let newOption = current.option.map(data=>{
                 if(data.optionId===payload.optionId){
                   let newData={...data}
                   newData.isChecked = ! newData.isChecked
                   return newData
                 }
                 else{
                   return data
                 }
             })
           return {...current,option:newOption}
         } else {
           return item
         }
       })
   
 }

 else if (type === "deleteOption") {
  return state.map((item) => {
       if (item.id === payload.quetionId) {
         let current = { ...item };
          let newOption = current.option.filter(data=>{
               return data.optionId!==payload.optionId
           })
         return {...current,option:newOption}
       } else {
         return item
       }
     })
 
}
else if(type==="quizSubmitted"){
  return []
}
  
  else {
    return state;
  }
 
};
export default singleCorrectOptionsReducer;
