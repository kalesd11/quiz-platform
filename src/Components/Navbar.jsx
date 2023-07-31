import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { actions } from "../State/Actions";
import { useDispatch } from "react-redux";

function Navbar() {
  // const classes = useStyles()
  const dispatch = useDispatch();
  return (
    <AppBar position="relative" color="inherit" elevation={3} style={{width:"100%"}}>
      <Box
        mt={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mx={3} pb={0.5}>
          <Typography
            variant="h3"
            fontSize={32}
            fontStyle="italic"
            fontFamily="serif"
            color="darkgreen"
          >
            <b>Quizzy</b>
          </Typography>
        </Box>
        <Box
          display="flex "
          justifyContent="end"
          alignItems="center"
          marginY={1}
        >
          <Box>
            <Button LinkComponent={Link} to="/" variant="text" color="inherit">
              Home
            </Button>
          </Box>
          <Box marginRight={1}>
            <Button
              LinkComponent={Link}
              className="NavLink"
              to="/new_quiz"
              onClick={() => {
                dispatch(actions.quizSubmitted());
              }}
              variant="outlined"
              color="error"
            >
              New Quiz
            </Button>
          </Box>
          <Box marginRight={0.5}>
            <Button
              LinkComponent={Link}
              className="NavLink"
              to="/my_quiz"
              variant="outlined"
              color="error"
            >
              My Quiz
            </Button>
          </Box>
          {/* <Box marginRight={3}>
       <Button LinkComponent={Link} className='NavLink' to="/auth" variant="outlined" color='error'>
         Play Quiz
       </Button>
       </Box> */}
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
