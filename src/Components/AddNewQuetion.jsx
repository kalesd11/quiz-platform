import {
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../State/Actions";
import { DeleteForeverOutlined } from "@mui/icons-material";


export const AddNewQuetion = (props) => {
  const [newQuetion, setNewQuetion] = useState("");
  const [option, setOption] = useState("");
  const [show1, setshow1] = useState(false)
  const isChecked = false
  const addNewQuetion = useSelector((state) => state.addNewQuetion);
  const quizstate = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  // const quiz = JSON.parse(localStorage.getItem("quiz"))
  // console.log(quiz)
  // useEffect(()=>{
  //   dispatch(
  //     actions.localQuiz(
  //       quiz
  //     )
  //   );
  // },[])
  // console.log(quizstate)
  return (
<>
<Modal
      show={props.show}
      size="lg"
      centered
      backdrop
      style={{ backgroundColor: "Background" }}
    >
      <ModalHeader>
        <Typography variant="h5"> Add New Quetion :</Typography>
      </ModalHeader>
      <ModalBody>
        <TextField
          variant="outlined"
          value={newQuetion}
          inputProps={{ maxLength: 200, minLength: 10 }}
          type="text"
          label="New Quetion"
          fullWidth
          required
          color={newQuetion === "" ? "error" : "success"}
          onChange={(e) => setNewQuetion(e.target.value)}
          placeholder="Enter Your Quetion"
        />

        <Grid container spacing={2} rowGap={1} my={1} textAlign="center">
          {addNewQuetion.option
            ? addNewQuetion.option.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={6} my={2} key={Math.random()}>
                    <Card>
                      <CardContent component={Box} display='flex' flexWrap='wrap' justifyContent='space-between' >
                       
                        {item.value}
                        <Button                       
                          size="small"
                          variant="text"
                          onClick={() => {
                            dispatch(
                              actions.deleteNewOption({
                                optionId: item.optionId,
                              })
                            );
                          }}
                        >
                          {" "}
                          <DeleteForeverOutlined/>
                        </Button>
                      </CardContent>
                      <hr />
                      <CardActions>
                        <Box
                          display="flex"
                          sx={{ backgroundColor: "#e3f2fd" }}
                          width='100%'
                          justifyContent="end"
                          mx={2}
                        >
                          <FormControlLabel
                            sx={{ color: "#52b202" }}
                            control={
                              <Checkbox
                                size="small"
                                id="option"
                                color="success"
                              />
                            }
                            label="Correct Answer"
                            labelPlacement="start"
                            checked={item.isChecked}
                            onChange={() => {
                              dispatch(
                                actions.newIsCheckOption({
                                  
                                  optionId: item.optionId,
                                })
                              );
                            }}
                          />
                        </Box>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : ""}
        </Grid>

        <Box mx={3} my={2}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                actions.addNewOption({
                  optionId: new Date().getTime(),
                  value: option,
                  isChecked: isChecked
                }),
               
              );
              setOption("");
            }}
          >
            <TextField
              variant="outlined"
              value={option}
              type="text"
              label="Add Option"
              size="small"
              color={option === "" ? "error" : "success"}
              required={addNewQuetion.option?addNewQuetion.option.length<2?true:false:true}
              onChange={(e) => setOption(e.target.value)}
              placeholder="Add Option"
            />
            <Box margin={2}>
              <Button
                variant="contained"
                type="submit"
                size="small"
                color="primary"
                disabled={newQuetion===""||option===""?true:false}
                onClick={()=>{
                  dispatch(actions.addNewQuetion({
                    quetion:newQuetion
                  }))  
                }}
              >
                Add Option
              </Button>
            </Box>
          </form>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box mx={2}>
          <Button
            color="warning"
            variant="contained"
            onClick={() => props.setshow(false)}
          >
            cancel
          </Button>
        </Box>
        <Box mx={2}>
          <Button
            color="success"
            variant="contained"
            onClick={() => {
              dispatch(actions.addQuetion({
                quetion:addNewQuetion
              }))
              setNewQuetion("")
              props.setshow(false)
              setshow1(true)
            }
            }
          >
            Add
          </Button>
        </Box>
      </ModalFooter>
    </Modal>
    <Modal show={show1} centered>
    <ModalHeader>
        <Typography variant="h4" color="green"><b>Alert</b></Typography>
    </ModalHeader>
    <ModalBody>
    <Typography variant="body1" color="green">Quetion Added SuccessFully</Typography>
    </ModalBody>
    <ModalFooter>
            <Button variant="contained" color="success"
            onClick={()=>{
              localStorage.setItem(
                "quiz",
                JSON.stringify(quizstate)
              );
              setshow1(false)
            }}
            >
              Done
            </Button>
    </ModalFooter>
  </Modal>
</>
  );
};
