import {
  Box,
  Container,
  Step,
  StepLabel,
  Button,
  Stepper,
  Paper,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";

const PlayQuiz = () => {
  const [activeStep, setactiveStep] = useState(0);
  const [disableNext, setdisableNext] = useState(true);
  const [disableFinish, setdisableFinish] = useState(true);
  const [result, setresult] = useState(0);
  // const quizReducer = useSelector((state) => state.quizReducer);
  const quizReducer = JSON.parse(localStorage.getItem("quiz"));
  const playquiz = useSelector((state) => state.playquiz);
  const submitAnswer = useSelector((state) => state.submitAnswer);
  const dispatch = useDispatch();

  const curQuiz = quizReducer.filter((item) => {
    return playquiz.quizId === item.quizId;
  });

  const quetions = curQuiz.map((item) => {
    return item.quetionState.map((data) => {
      return data.quetion;
    });
  });

  // console.log(quetions);
  const resultArr = submitAnswer.filter((item) => {
    return item.mark === "1";
  });

  const handleResult = (arr) => {
    return arr.reduce((acc, cur) => {
      return acc + Number(cur.mark);
    }, 0);
  };
  const percentage = quetions[0] ? (result * 100) / quetions[0].length : 0;
  // console.log(result);
  const handleNext = () => {
    setactiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    if (activeStep > 0) setactiveStep(activeStep - 1);
  };
  // useEffect(()=>{
  //   if(quizReducer.length===0){
  //    dispatch(
  //      actions.localQuiz(
  //        quiz
  //      )
  //    );
  //   }
  //  },[])
  return (
    <>
      <Typography variant="body1" align="right" mt={2} mr={5} color="green">
        <b>Welcome! {playquiz.user}</b>
      </Typography>
      <Container maxWidth="md" height="65vh" component={Box} marginTop={5}>
        {quetions[0] ? (
          activeStep === quetions[0].length ? (
            <Card>
              {percentage >= 40 ? (
                <>
                  <Box display="flex" justifyContent="center">
                    <img
                      src="https://th.bing.com/th/id/OIP.gy7v9eo85DJ_TZ3y9dx-nQHaHa?pid=ImgDet"
                      alt=""
                      height="250"
                      width={450}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" align="center" color="darkgreen">
                      Congartulations..!
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      color="royalblue"
                    >
                      {` You Scored ${result}/${quetions[0].length} marks`}
                    </Typography>
                    <Typography variant="h5" align="center" color="blue">
                      {` Your Result is ${percentage.toFixed(2)}%`}
                    </Typography>
                  </CardContent>
                </>
              ) : (
                <>
                  {" "}
                  <Box display="flex" justifyContent="center">
                    <img
                      src="https://th.bing.com/th/id/OIP.gy7v9eo85DJ_TZ3y9dx-nQHaHa?pid=ImgDet"
                      alt=""
                      height="250"
                      width={450}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" align="center" color="darkred">
                      Oops ! You Failed The Test..!
                    </Typography>
                    <Typography variant="body1" align="center" color="red">
                      {` You Scored ${result}/${quetions[0].length} marks`}
                    </Typography>
                    <Typography variant="h5" align="center" color="darkred">
                      {` Your Result is ${percentage.toFixed(2)}%`}
                    </Typography>
                  </CardContent>
                </>
              )}
            </Card>
          ) : (
            <Paper elevation={5} sx={{ p: 2 }}>
              <Stepper activeStep={activeStep}>
                {quizReducer.map((item) => {
                  return playquiz.quizId === item.quizId
                    ? item.quetionState
                      ? item.quetionState.map((data, index) => {
                          return (
                            <Step key={Math.random()}>
                              <StepLabel key={Math.random()}>
                                Quetion {index + 1}
                              </StepLabel>
                            </Step>
                          );
                        })
                      : ""
                    : "";
                })}
                {}
              </Stepper>
              {quizReducer.map((item) => {
                //  playquiz.quizId===item.quizId?
                return playquiz.quizId === item.quizId ? (
                  item.quetionState ? (
                    item.quetionState.map((data, index) => {
                      if (index === activeStep) {
                        return (
                          <Card key={Math.random()} sx={{ p: 1, m: 2 }}>
                            <CardContent>
                              <Typography variant="h6">
                                {index + 1}. {data.quetion}
                              </Typography>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                              >
                                {
                                  data.option.map((option) => {
                                    return (
                                      <FormControlLabel
                                        key={Math.random()}
                                        control={
                                          <Radio
                                            value={
                                              option.isChecked
                                                ? 1
                                                : Math.random()
                                            }
                                            checked={
                                              submitAnswer[index]
                                                ? submitAnswer[index]
                                                    .optionId ===
                                                  option.optionId
                                                  ? true
                                                  : false
                                                : false
                                            }
                                            onChange={(e) => {
                                              dispatch(
                                                actions.submitAnswer({
                                                  mark: e.target.value,
                                                  optionId: option.optionId,
                                                  quetionId: data.id,
                                                })
                                              );
                                              setdisableNext(false);
                                              setdisableFinish(false);
                                            }}
                                          />
                                        }
                                        label={option.value}
                                      />
                                    );
                                  })
                                  // options
                                }
                              </RadioGroup>
                            </CardContent>
                          </Card>
                        );
                      } else {
                        return "";
                      }
                    })
                  ) : (
                    <h1>Sorry... No Quetions In This Quiz.</h1>
                  )
                ) : (
                  ""
                );
              })}
              <Box display="flex" justifyContent="space-between" mx={2} my={1}>
                <Button
                  variant="contained"
                  disabled={activeStep === 0 ? true : false}
                  color="primary"
                  onClick={handlePrev}
                >
                  prev
                </Button>
                {quetions[0].length - 1 === activeStep ? (
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={disableFinish}
                    onClick={() => {
                      handleNext();
                      setresult(handleResult(resultArr));
                      dispatch(actions.submitQuiz());
                    }}
                  >
                    finish
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={disableNext}
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    next
                  </Button>
                )}
              </Box>
            </Paper>
          )
        ) : (
          <Typography variant="h5" align="center">
            <b>No Quiz Available Here !</b>{" "}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default PlayQuiz;
