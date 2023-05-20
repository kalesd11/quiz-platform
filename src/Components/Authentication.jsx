import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Input,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {actions} from '../State/Actions'
function Authentication() {
  const [user, setuser] = useState('')
  const dispatch =useDispatch()
  let quiz = useSelector(state=>state.playquiz)
 
  return (
    <Container maxWidth="md">
      <Box component={Box} height="80vh" display="flex" alignItems="center">
        <Card component={Box} p={3} elevation={5} minWidth='100%'>
         <CardHeader style={{color:'red',textTransform:"capitalize",}} title={quiz.quizName}></CardHeader>
          <CardContent>
            <Typography variant="subtitle1">
              1. All Quetions are Compulsory.
            </Typography>
            <Typography variant="subtitle1">
              2. Each Quetion Carries Equal Marks.
            </Typography>
            <Typography variant="subtitle1">
              3. Minimum 40% is required to Pass the Test.
            </Typography>
          </CardContent>
          <CardActions>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <Input
               required
              sx={{ marginBottom: 3, marginTop: 5, display: "block" }}
              value={user}
              onChange={(e)=>setuser(e.target.value)}
              placeholder="Enter Your Name"
            ></Input>
            <Button type="submit" variant="contained" color="success" className="link" LinkComponent={Link} to="/play_quiz"
            onClick={()=>dispatch(actions.playQuiz({user:user,quizId:''}))}>
              Start Quiz
            </Button>
            </form>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default Authentication;
