import { DeleteForeverOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actions } from "../State/Actions";

function SingleCorrectOptions(props) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Box display="flex" justifyContent="space-between">
        <CardContent component={Paper} sx={{ width: 200 }}>
          {props.data.value}
        </CardContent>
        <Button
          size="xs"
          variant="outlined"
          onClick={() => {
            dispatch(
              actions.deleteOption({
                optionId: props.data.optionId,
                quetionId: props.id,
              })
            );
          }}
        >
          {" "}
          <DeleteForeverOutlined />
        </Button>
      </Box>
      <CardActions>
        <Box
          display="flex"
          sx={{ backgroundColor: "#e3f2fd" }}
          width={225}
          justifyContent="end"
        >
          <FormControlLabel
            sx={{ color: "#52b202" }}
            control={<Checkbox size="small" id="option" color="success" />}
            label="Correct Answer"
            labelPlacement="start"
            checked={props.data.isChecked}
            onChange={() => {
              dispatch(
                actions.isChecked({
                  quetionId: props.id,
                  optionId: props.data.optionId,
                })
              );
            }}
          />
        </Box>
      </CardActions>
    </Card>
  );
}

export default SingleCorrectOptions;
