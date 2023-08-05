import {
  Box,
  Container,
  Button,
  Paper,
  TextField,
  Typography,
  Radio,
} from "@mui/material";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import React, {useEffect, useMemo } from "react";
import { useState } from "react";
import { AddBox } from "@mui/icons-material";
import SingleCorrect from "./SingleCorrect";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";
function NewQuiz() {
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);
  const [quizType, setquizType] = useState("");
  const [quizName, setquizName] = useState("");
  const [quizId, setquizId] = useState("");
  const [description, setdescription] = useState("");
  let singleCorrect = useSelector((state) => state.singleCorrect);
  const singleCorrectOptions = useSelector(
    (state) => state.singleCorrectOptions
  );
  const quizReducer = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const handleQuetion = () => {
    return singleCorrect.map((item, index) => {
      return (
        <SingleCorrect
          key={Math.random()}
          id={item.id}
          quetion={item.quetion}
          index={index}
          quizName={item.quizName}
          description={item.description}
        />
      );
    });
  };
  const singleCorrectMcq = useMemo(handleQuetion, [singleCorrect]);
useEffect(()=>{
  dispatch(actions.reset())
},[])
  return (
    <Container>
      <Box display="flex">
        <Modal show={show1} centered fullscreen="sm-true">
          <ModalHeader>
            <b>Select Type of Your Quiz</b>{" "}
          </ModalHeader>
          <ModalBody>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
              <Box margin={0.5}>
                <Button
                  LinkComponent={Radio}
                  variant="outlined"
                  name="btnradio"
                  onClick={() => setshow1(false)}
                >
                  MCQ(MultyCorrect)
                </Button>
              </Box>

              <Box margin={0.5}>
                <Button
                  LinkComponent={Radio}
                  variant="outlined"
                  name="btnradio"
                  onClick={() => {
                    setshow1(false);
                    setquizType("SingleCorrect");
                    setquizId(new Date().getTime());
                  }}
                >
                  {" "}
                  MCQ(SingleCorrect)
                </Button>
              </Box>
              <Box margin={0.5}>
                <Button
                  LinkComponent={Radio}
                  variant="outlined"
                  name="btnradio"
                  onClick={() => setshow1(false)}
                >
                  Short Answer(2 Words)
                </Button>
              </Box>

              <Box margin={0.5}>
                <Button
                  LinkComponent={Radio}
                  variant="outlined"
                  name="btnradio"
                  onClick={() => setshow1(false)}
                >
                  Desscription(2-4 sentences)
                </Button>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              to="/"
              className="NavLink"
              variant="outlined"
              color="error"
              LinkComponent={Link}
              onClick={() => {
                setshow1(false);
                dispatch(
                  actions.showNavButton({ value1: false, value2: true })
                );
              }}
            >
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </Box>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            actions.addQuiz({
              quizName: quizName,
              description: description,
              quizId: quizId,
              quetionState: singleCorrectOptions,
              createdAt : Date.now(),
              inactive : false
            })
          );
       
          setshow2(true);
        }}
      >
        <Box>
          <Typography variant="h5" margin={3}>
            Create New Quiz
          </Typography>
          <Paper variant="elevation" elevation={5}>
            <Box marginX={3} p={1}>
              <TextField
                required
                color={quizName === "" ? "error" : "success"}
                value={quizName}
                onChange={(e) => {
                  setquizName(e.target.value);
                }}
                type="text"
                margin="normal"
                fullWidth
                inputProps={{ maxLength: 30, minLength: 10 }}
                label="Quiz Title"
                placeholder="Enter Your Quiz Name"
              />
            </Box>
            <Box marginX={3} p={1}>
              <TextField
                fullWidth
                color={description === "" ? "error" : "success"}
                required
                label="Description"
                type="text"
                margin="normal"
                multiline
                rows={5}
                placeholder="Enter Some Description Here"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></TextField>
            </Box>
          </Paper>
        </Box>
        <Box>{quizType === "SingleCorrect" ? singleCorrectMcq : ""}</Box>

        <Box margin={3} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            onClick={() =>
              dispatch(
                actions.singleCorrectMcq({
                  id: new Date().getTime(),
                  quizName: quizName,
                  description: description,
                  quetion: "",
                })
              )
            }
          >
            <AddBox sx={{ margin: 0.5 }} /> Add Quetion
          </Button>
        </Box>
        <hr />
        <Box margin={3} display="flex" justifyContent="end">
       
          <Button
            variant="contained"
            type="submit"
            sx={{ px: 4 }}
           
          >
            Save
          </Button>
        </Box>
      </form>
      <Modal show={show2} centered>
        <ModalHeader>
          <Typography variant="h6"> Your Quiz Created Successfully</Typography>
        </ModalHeader>
        <ModalFooter>
          <Box marginX={1}>
            <Button
              LinkComponent={Link}
              className="link"
              to="/my_quiz"
              variant="contained"
              color="info"
              onClick={() => {
                localStorage.setItem(
                  "quiz",
                  JSON.stringify(quizReducer)
                )
                setshow2(false)}}
            >
              View
            </Button>
          </Box>
          <Box marginX={1}>
            <Button
              variant="contained"
              LinkComponent={Link}
              className="link"
              to="/"
              color="success"
              onClick={() => {
                localStorage.setItem(
                  "quiz",
                  JSON.stringify(quizReducer)
                )
                setshow2(false)}}
            >
              Done
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
     
    </Container>
  );
}

export default NewQuiz;
