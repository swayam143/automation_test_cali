import { useEffect, useState } from "react";
import { TextField, Grid, Button } from "@mui/material";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const oper = ["+", "-", "/", "*"];

  useEffect(() => {
    if (
      input?.length > 1 &&
      oper.includes(input[input.length - 1]) &&
      oper.includes(input[input.length - 2])
    ) {
      setInput(input.slice(0, -1));
    } else {
      return;
    }
  }, [input]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "=":
        try {
          const StringInp = input.toString();

          if (
            StringInp?.length > 1 &&
            oper.includes(StringInp[StringInp.length - 1]) === true
          ) {
            alert("wrong input");
          } else {
            const res = eval(input);
            console.log(typeof res === "undefined");
            setResult((typeof res === "undefined") === true ? 0 : res);
            setInput(
              (typeof res === "undefined") === true ? "" : res.toString()
            );
          }
        } catch (error) {
          setResult("Error");
        }
        break;
      case "C":
        setResult(0);
        setInput("");
        break;
      default:
        setInput(input + value);
    }
  };

  const hndleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleclear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Input"
            variant="outlined"
            value={input}
            fullWidth
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="result "
            label="Result"
            variant="outlined"
            value={result}
            fullWidth
            disabled
            inputProps={{ "data-testid": "result-input" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="1">
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="2">
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="3">
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="+">
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="4">
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="5">
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="6">
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="-">
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="7">
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="8">
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="9">
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="*">
            x
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="/">
            /
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="0">
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClick} value="=">
            =
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={hndleDelete}>
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleclear}>
            AC
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Calculator;
