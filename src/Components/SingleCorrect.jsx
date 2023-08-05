import { Paper, TextField, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SingleCorrectOptions from "./SingleCorrectOptions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../State/Actions";
import { Alert } from "@mui/material";
let quetions = [];
function SingleCorrect(props) {
  const singleCorrectOptions = useSelector(
    (state) => state.singleCorrectOptions
  );
  const [option, setoption] = useState("");
  const [quetion, setquetion] = useState("");
  const [disabled, setdisabled] = useState(false);
  const dispatch = useDispatch();
const singleCorrectOption = useSelector(state=>state.singleCorrectOptions)
const count =singleCorrectOption.length >0 ?singleCorrectOption.filter(item=>{
    return item.id===props.id
}):0

  const optionsState = () => {
    return singleCorrectOptions.map((item) => {
      if (item.id === props.id) {
        let opt = item.option;
        return opt.map((data) => {
          return (
            <SingleCorrectOptions
              key={Math.random()}
              id={props.id}
              data={data}
              quetion={item.quetion}
              options={item.option}
            />
          );
        });
      } else {
        return "";
      }
    });
  };
  
  return (
    <Box marginY={3}>
      <Paper variant="elevation" elevation={5}>
        <Box p={1}>
          <Typography variant="subtitle1" marginRight={3} textAlign="end">
            <b>Quetion No.{props.index + 1}</b>
          </Typography>
          <TextField
            required
            disabled={disabled}
            type="text"
            color={quetion === "" ? "error" : "success"}
            margin="normal"
            fullWidth
            label="Quetion"
            placeholder="Enter Your Quetion"
            inputProps={{ maxLength: 200, minLength: 10 }}
            defaultValue={quetion === "" ? quetions[props.index] : quetion}
            onChange={(e) => setquetion(e.target.value)}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          marginY={2}
          rowGap={1}
          flexWrap="wrap"
        >
          {optionsState()}
        </Box>

        <Box maxWidth="300px" marginLeft={3}>
          {" "}
          <Paper component={Box} marginY={2} elevation={5}>
            <Box display="block" p={0.3} textAlign="center" paddingTop={1.5}>
              <TextField
                label="New Option"
                type="text"
                required = {
                  count[0]?count[0].option.length< 2 ? true : false:true
                }
                color={option === "" ? "error" : "success"}
                placeholder="'New Option'"
                value={option}
                onChange={(e) => setoption(e.target.value)}
              />
            </Box>

            <Box paddingY={1} textAlign="center">
              <Button
                disabled={option === "" ? true : false}
                variant="outlined"
                color="primary"
                onClick={(e) => {
                  dispatch(
                    actions.singleCorrectOptions({
                      quetion: quetion,
                      option: [
                        {
                          value: option,
                          isChecked: false,
                          optionId: new Date().getTime(),
                        },
                      ],
                      index: props.index,
                      id: props.id,
                    })
                  );

                  setoption("");
                }}
              >
                Add Option
              </Button>
              {count[0]?count[0].option.length< 2 ? (
                <Alert severity="warning">
                  {/* <AlertTitle>Warning</AlertTitle> */}
                  Atleast <strong>Two</strong> options Required to Save Quetion!
                </Alert>
              ) : (
                ""
              ):(
                <Alert severity="warning">
                  {/* <AlertTitle>Warning</AlertTitle> */}
                  Atleast <strong>Two</strong> options Required to Save Quetion!
                </Alert>
              )}
            </Box>
          </Paper>
        </Box>
        <Box textAlign="end" mr={10}>
          <Button
            size="small"
            variant="contained"
            color="success"
            onClick={() => {
              setdisabled(true);
              quetions[props.index] = quetion ? quetion : quetions[props.index];
            }}
          >
            Save Quetion
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SingleCorrect;
