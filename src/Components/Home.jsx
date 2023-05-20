import {
  Container,
  Grid,
  Card,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="xl">
      <Grid
      marginTop={5}
        container
        spacing={5}
        wrap="wrap"
        height="75vh"
        justifyContent="space-around"
       alignItems='center'
      >
        <Grid item lg={4} xs={12} sm={12} justifyContent='center' flexWrap='wrap'>
          <Card elevation={3} component={Box} padding={2} >
            <CardContent component={Box} display="flex" justifyContent="center">
              <Typography
                component={Link}
                to="/new_quiz"
                color="black"
                textAlign="center"
                variant="h5"
              >
                Create New Quiz
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <Card elevation={3} component={Box} padding={2} >
            <CardContent component={Box} display="flex" justifyContent="center">
              <Typography
                component={Link}
                to="/my_quiz"
                color="black"
                textAlign="center"
                variant="h5"
              >
                My Quiz
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <Card elevation={3} component={Box} padding={2} >
            <CardContent component={Box} display="flex" justifyContent="center">
              <Typography
                component={Link}
                to="/auth"
                color="black"
                textAlign="center"
                variant="h5"
              >
                Play Quiz
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
