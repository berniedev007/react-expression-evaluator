import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 30
  },
  mainContent: {
    padding: '0 15px',

    '& .MuiGrid-spacing-xs-3': {
      width: '100%'
    }
  },
  title: {
    textAlign: 'center',
    color: '#79cea1'
  },
  container: {
    maxWidth: 600,
    margin: '0 auto'
  },
  textInput: {
    width: '100%'
  },
  customBtn: {
    width: '100%',
    backgroundColor: '#79cea1',
    color: 'white',
    textTransform: 'none',
    height: 55,
    fontSize: 22
  }
})) 

const InitOperand = ({ data, setData }) => {
  const classes = useStyles();

  const [num, setNum] = useState('');

  const onChange = (e) => setNum(e.target.value);

  const addNumber = (e) => {
    setData({ ...data, first_num: num, result: num });
  };

  return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          Expression Evaluator
        </Typography>
        <div className={classes.mainContent}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Please enter a number"
                type="number"
                variant="outlined"
                name="first_num"
                value={num}
                onChange={(e) => onChange(e)}
                className={classes.textInput}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={addNumber} className={classes.customBtn}>
                Add number
              </Button>
            </Grid>
          </Grid>
        </div>        
      </div>
  );
};

export default InitOperand;
