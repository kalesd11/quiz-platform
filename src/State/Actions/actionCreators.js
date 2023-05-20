
const showNavButton = (value)=>{
    return (dispatch=>{
        dispatch({
            type:'showNavButton',
            payload : value
        })
    })
}

const singleCorrectMcq = (value)=>{
    return (dispatch=>{
        dispatch({
            type:'singleCorrectMcq',
            payload : value
        })
    })
}

const singleCorrectOptions = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'singleCorrectOptions',
            payload : value
        })
        // console.log(value)
    })
}
    const isChecked = (value)=>{
        return (dispatch =>{
            dispatch({
                type : 'isChecked',
                payload : value
            })
            // console.log(value)
        })  
}
    const addQuetion = (value)=>{
        return (dispatch =>{
            dispatch({
                type : 'addQuetion',
                payload : value
            })
            // console.log(value)
        })  
}
    const addNewQuetion = (value)=>{
        return (dispatch =>{
            dispatch({
                type : 'addNewQuetion',
                payload : value
            })
            // console.log(value)
        })  
}
    const addNewOption = (value)=>{
        return (dispatch =>{
            dispatch({
                type : 'addNewOption',
                payload : value
            })
            // console.log(value)
        })  
}
const deleteOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'deleteOption',
            payload : value
        })
        // console.log(value)
    })  
}
const deleteNewOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'deleteNewOption',
            payload : value
        })
        // console.log(value)
    })  
}
const newIsCheckOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'newIsCheckOption',
            payload : value
        })
        // console.log(value)
    })  
}

const addQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'addQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const localQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'localQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const deleteQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'deleteQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const playQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'playQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const playQuizId = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'playQuizId',
            payload : value
        })
        // console.log(value)
    })  
    
}
const submitAnswer = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'submitAnswer',
            payload : value
        })
        // console.log(value)
    })  
    
}
const submitQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'submitQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const quizSubmitted = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'quizSubmitted',
            payload : value
        })
        // console.log(value)
    })  
    
}
const deleteQuetion = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'deleteQuetion',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuiz = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuiz',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuizAddQuetion = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuizAddQuetion',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuizSaveQuetion = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuizSaveQuetion',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuizDeleteOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuizDeleteOption',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuizAddOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuizAddOption',
            payload : value
        })
        // console.log(value)
    })  
    
}
const editQuizIsCheckedOption = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'editQuizIsCheckedOption',
            payload : value
        })
        // console.log(value)
    })  

}
const setInactive = (value)=>{
    return (dispatch =>{
        dispatch({
            type : 'setInactive',
            payload : value
        })
        // console.log(value)
    })  

}



export {showNavButton,singleCorrectMcq, singleCorrectOptions,isChecked,deleteOption,addQuiz,deleteQuiz,playQuiz,deleteQuetion,addQuetion,playQuizId,submitAnswer,submitQuiz,quizSubmitted,addNewQuetion,addNewOption,deleteNewOption,newIsCheckOption,editQuiz,editQuizDeleteOption,editQuizAddOption,editQuizIsCheckedOption,editQuizAddQuetion,editQuizSaveQuetion,localQuiz,setInactive};

