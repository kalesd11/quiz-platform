import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { actions } from '../State/Actions';

const EditQuiz = (props) => {
    const isChecked = false
    const editQuiz = useSelector(state=>state.editQuiz)
    const quizstate = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch()
    const [newQuetion, setNewQuetion] = useState('')
    const [option, setOption] = useState('')
    const [show1, setshow1] = useState(false)
    // const quiz = JSON.parse(localStorage.getItem("quiz"))
    // useEffect(()=>{
    //  if(quizstate.length===0){
    //    dispatch(
    //     actions.localQuiz(
    //       quiz
    //     )
    //   );
    //  }
    // },[])
    // console.log(editQuiz);
  return (
   <Container>
     <Modal
    show={props.show}
    size="lg"
    centered
    backdrop
    style={{ backgroundColor: "Background" }}
  >
    <ModalHeader>
      <Typography variant="h5"> Update Your Quetion :</Typography>
    </ModalHeader>
   
    <ModalBody>

    <Box display='flex' flexWrap="wrap" rowGap={1}>
    <TextField
        variant="outlined"
        value={newQuetion}
        inputProps={{ maxLength: 200, minLength: 10 }}
        type="text"
        label="New Quetion"
        required
        fullWidth
        color={newQuetion === "" ? "error" : "success"}
        onChange={(e) => setNewQuetion(e.target.value)}
        placeholder={editQuiz.quetion}
      />
      <Button size='small' variant='contained' color='success' disabled={newQuetion===""?true:false}
        onClick={()=>{
          dispatch(actions.editQuizAddQuetion({
              quetion:newQuetion
            }));
        }}
      >save changes</Button>
    </Box>

      <Grid container spacing={2} rowGap={1} my={1} textAlign="center">
        {editQuiz.option
          ? editQuiz.option.map((item, index) => {
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
                            actions.editQuizDeleteOption({
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
                              actions.editQuizIsCheckedOption({
                                
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
      
          <TextField
            variant="outlined"
            value={option}
            type="text"
            label="Add Option"
            size="small"
            color={option === "" ? "error" : "success"}
            required={editQuiz.option?editQuiz.option.length<2?true:false:true}
            onChange={(e) => setOption(e.target.value)}
            placeholder="Add Option"
          />
          <Box margin={2}>
            <Button
              variant="contained"
             
              size="small"
              color="primary"
             onClick={()=>{
              dispatch(
                actions.editQuizAddOption({
                  optionId: new Date().getTime(),
                  value: option,
                  isChecked: isChecked
                }),
               
              );
              setOption("");
             }}
            >
              Add Option
            </Button>
          </Box>
        
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
        type='submit'
          color="success"
          variant="contained"
          onClick={()=>{
            
            dispatch(actions.editQuizSaveQuetion(
              editQuiz
            ));
            setNewQuetion("")
            setshow1(true)
            props.setshow(false);
          }}
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
   <Typography variant="body1" color="green">Quetion Edited SuccessFully</Typography>
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
   </Container>
  )
}

export default EditQuiz