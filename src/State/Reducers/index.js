import { combineReducers } from "redux";
import { navButtonReducer } from "./navButtonReducer";
import singleCorrectReducer from "./singleCorrectReducer";
import singleCorrectOptionsReducer from "./singleCorrectOptionsReducer";
import addQuizReducer from "./addQuizReducer";
import playquizReducer from "./playquizReducer";
import submitAnswerReducer  from "./submitAnswerReducer";
import addNewQuetionReducer from "./addNewQuetionReducer";
import editQuizReducer from "./editQuizReducer";
const reducers = combineReducers({
    navButton:navButtonReducer,
    singleCorrect:singleCorrectReducer,
    singleCorrectOptions:singleCorrectOptionsReducer,
    quizReducer:addQuizReducer,
    playquiz : playquizReducer,
    submitAnswer : submitAnswerReducer,
    addNewQuetion:addNewQuetionReducer,
    editQuiz:editQuizReducer
})


export default reducers;