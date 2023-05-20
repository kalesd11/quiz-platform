import {
  DeleteForeverOutlined,
  Edit,
  GppBadRounded,
  PixOutlined,
} from "@mui/icons-material";
import {
  Box,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Container,
  Button,
  ButtonGroup,
  Tooltip,
  TextField,
} from "@mui/material";
import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddNewQuetion } from "./AddNewQuetion";
import EditQuiz from "./EditQuiz";

function MyQuiz() {
  const quizstate = useSelector((state) => state.quizReducer);
  const quizReducer = JSON.parse(localStorage.getItem("quiz"));
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  // const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [quizId, setquizId] = useState("");
  const [quizName, setquizName] = useState("");
  const quiz = quizstate.filter((item) => {
    return quizId === item.quizId;
  });
  // console.log(quizstate);
  const NewQuetion = () => {
    return (
      <AddNewQuetion
        show={show2}
        setshow={setShow2}
        setshow1={setshow1}
        setedit={setshow1}
      />
    );
  };
  const quizEdit = () => {
    return (
      <EditQuiz
        show={show3}
        setshow={setShow3}
        setshow1={setshow1}
        setedit={setshow1}
      />
    );
  };
  // useEffect(() => {
  //   if (quizstate.length === 0) {
  //     dispatch(actions.localQuiz(quizReducer));
  //     // navigate("/")
  //   }
  // }, []);
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="end" marginTop={5}>
        <Button
          LinkComponent={Link}
          onClick={() => {
            dispatch(actions.quizSubmitted());
          }}
          to="/new_quiz"
          className="link"
          variant="contained"
        >
          Create New Quiz
        </Button>
      </Box>
      <Paper component={Box} boxShadow={4} marginTop={5} height="60vh">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Quiz No.</b>
                </TableCell>
                <TableCell>
                  <b>Quiz Title</b>
                </TableCell>
                <TableCell>
                  <b>Status</b>
                </TableCell>
                <TableCell>
                  <b>Created On</b>
                </TableCell>
                <TableCell>
                  <b>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quizReducer.map((item, index) => {
                return (
                  <React.Fragment key={Math.random()}>
                    <TableRow>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.quizName}</TableCell>
                      <TableCell>
                        <FormControlLabel
                          label="Active"
                          labelPlacement="start"
                          control={
                            <Switch
                              color="success"
                              checked={item.inactive}
                              onChange={() => {
                                dispatch(
                                  actions.setInactive({ quizId: item.quizId })
                                );
                              }}
                              onClick={()=>{
                                localStorage.setItem("quiz",JSON.stringify(quizstate))
                              }}
                            />
                          }
                          sx={{ marginLeft: -0.5 }}
                        ></FormControlLabel>
                      </TableCell>
                      <TableCell>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          component={Box}
                          marginRight={-5}
                          disabled={item.inactive}
                        >
                          <Tooltip title="Play Quiz">
                            <Button
                              className="play"
                              onClick={() =>
                                dispatch(
                                  actions.playQuizId({
                                    quizId: item.quizId,
                                    user: "",
                                    quizName: item.quizName,
                                  })
                                )
                              }
                              color="success"
                              LinkComponent={Link}
                              to="/auth"
                            >
                              <PixOutlined />
                            </Button>
                          </Tooltip>

                          <Tooltip title="Edit Quiz">
                            <Button
                              onClick={() => {
                                setshow1(true);
                                setquizId(item.quizId);
                              }}
                            >
                              <Edit />
                            </Button>
                          </Tooltip>

                          <Tooltip title="Delete Quiz">
                            <Button
                              color="error"
                              onClick={() => {
                                dispatch(
                                  actions.deleteQuiz({ quizId: item.quizId })
                                );
                                setshow(true);
                              }}
                            >
                              <GppBadRounded />
                            </Button>
                          </Tooltip>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>

                    <Modal show={show} centered>
                      <ModalHeader>
                        <Typography variant="h6">
                          <b>Are You Sure You Want To Delete ?</b>
                        </Typography>
                      </ModalHeader>
                      <ModalBody>
                        <Typography variant="body1">
                          Deleting This File Will Result in Loosing This File
                          Data Permanently and is not Recoverable
                        </Typography>
                      </ModalBody>
                      <ModalFooter>
                        <Box marginX={2}>
                          <Button
                            variant="outlined"
                            color="inherit"
                            onClick={() => {
                              dispatch(actions.localQuiz(quizReducer));
                              setshow(false);
                            }}
                          >
                            Cancle
                          </Button>
                        </Box>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            localStorage.setItem(
                              "quiz",
                              JSON.stringify(quizstate)
                            );
                            setshow(false);
                            // setShow4(true);
                          }}
                        >
                          Delete
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Modal show={show1} size="lg" backdrop>
        <ModalHeader>
          <Typography variant="h6">
            <b>Edit Your Quiz</b>
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Paper elevation={3}>
            <Box marginX={3} p={1}>
              <TextField
                required
                color={quizName === "" ? "error" : "success"}
                defaultValue={
                  quizName !== "" ? quizName : quiz[0] ? quiz[0].quizName : ""
                }
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
                required
                label="Description"
                type="text"
                margin="normal"
                multiline
                rows={5}
                placeholder="Enter Some Description Here"
                defaultValue={quiz[0] ? quiz[0].description : ""}
              ></TextField>
            </Box>
          </Paper>
          {quiz[0]
            ? quiz[0].quetionState.map((item, index) => {
                return (
                  <Paper
                    component={Box}
                    marginTop={1}
                    elevation={3}
                    key={Math.random()}
                  >
                    <Box p={1} key={Math.random()}>
                      <Box display="flex" px={1} justifyContent="space-between">
                        <Typography
                          variant="subtitle1"
                          marginRight={3}
                          textAlign="start"
                        >
                          <b>Quetion No.{index + 1}</b>
                        </Typography>
                        <ButtonGroup>
                          <Tooltip title="Edit Quetion">
                            <Button
                              size="small"
                              variant="contained"
                              sx={{ p: 0, mx: 1 }}
                              color="inherit"
                              onClick={() => {
                                dispatch(
                                  actions.editQuiz({
                                    id: item.id,
                                    quetion: item.quetion,
                                    quizId: quiz[0].quizId,
                                    option: item.option,
                                  })
                                );
                                setShow3(true);
                              }}
                            >
                              <Edit />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Delete Quetion">
                            <Button
                              size="small"
                              variant="contained"
                              sx={{ p: 0, mx: 1 }}
                              color="inherit"
                              onClick={() => {
                                dispatch(
                                  actions.deleteQuetion({
                                    id: item.id,
                                    quetion: item.quetion,
                                    quizId: quiz[0].quizId,
                                  })
                                );
                                setShow5(true);
                              }}
                            >
                              <DeleteForeverOutlined />
                            </Button>
                          </Tooltip>
                        </ButtonGroup>
                      </Box>

                      <TextField
                        required
                        disabled
                        type="text"
                        color={item.quetion === "" ? "error" : "success"}
                        margin="normal"
                        fullWidth
                        label="Quetion"
                        placeholder="Enter Your Quetion"
                        inputProps={{ maxLength: 200, minLength: 10 }}
                        defaultValue={item.quetion}
                      />
                    </Box>
                  </Paper>
                );
              })
            : ""}
          <Paper>{NewQuetion()}</Paper>
          {quizEdit()}
          <Box m={2} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                dispatch(
                  actions.addNewQuetion({
                    quizId: quiz[0].quizId,
                    id: new Date().getTime(),
                    quetion: "",
                    option: [],
                  })
                );
                setShow2(true);
              }}
            >
              Add Quetion
            </Button>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box mx={1}>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => setshow1(false)}
            >
              cancel
            </Button>
          </Box>
          <Box mx={1}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                localStorage.setItem("quiz", JSON.stringify(quizstate));
                setshow1(false);
              }}
            >
              update
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
      {/* <Modal show={show4} centered>
        <ModalHeader>
          <Typography variant="h4" color="darkred">
            <b>Alert</b>
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Typography variant="body1" color="darkred">
            Quiz Deleted SuccessFully
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.setItem("quiz", JSON.stringify(quizstate));
              setShow4(false);
            }}
          >
            Done
          </Button>
        </ModalFooter>
      </Modal> */}

      <Modal show={show5} centered>
        <ModalHeader>
          <Typography variant="h4" color="darkred">
            <b>Alert</b>
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Typography variant="body1" color="darkred">
            Quetion Deleted Successfully.
          </Typography>
        </ModalBody>
        <ModalFooter>
          {/* <Button
            variant="contained"
            color="inherit"
            style={{ marginRight: 12 }}
            onClick={() => {
              setShow5(false);
            }}
          >
            cancel
          </Button> */}
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.setItem("quiz", JSON.stringify(quizstate));
              setShow5(false);
            }}
          >
            Done
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default MyQuiz;
