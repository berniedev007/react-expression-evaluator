import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Select , MenuItem, Button, Grid, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: '30px auto 0'
  },
  mainContent: {
    padding: '0 15px',

    '& .MuiGrid-spacing-xs-3': {
      width: '100%',

      [theme.breakpoints.down('xs')]: {
        margin: 0
      }
    }
  },
  operations: {
    maxWidth: 400,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  operationItem: {
    margin: '0 10px',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf5f7',
    borderRadius: 3
  },
  equality: {
    textAlign: 'center',
    fontSize: 50
  },
  result: {
    textAlign: 'center',
    fontSize: 60,
    color: '#79cea1',
    marginBottom: 30
  },
  formControl: {
    width: '100%'
  },
  customBtn: {
    width: '100%',
    backgroundColor: '#79cea1',
    color: 'white',
    textTransform: 'none',
    height: 55,
    fontSize: 18
  }
})) 

const Expression = ({ data, setData }) => {
  const classes = useStyles();
  const [operator, setOperator] = useState('');
  const [operand, setOperand] = useState('');

  const addOperation = (e) => {
    let first_num = data.result;
    let result = parseInt(first_num);

    let second_num = parseInt(operand);
    
    if(operator === '+') {
        result += second_num;
    }
    else if(operator === '-') {
        result -= second_num;
    }
    else if(operator === '*') {
        result *= second_num;
    }
    else if(operator === '/') {
        result /= second_num;
    }
    setData({ ...data, 
        first_num: first_num,
        second_num: second_num,
        operator: operator,
        result: result
    })
  };

  return (
      <div className={classes.root}>

        <div className={classes.operations}>
          <div className={classes.operationItem}>
            {data.first_num}
          </div>
          <div className={classes.operationItem}>
            {data.second_num}
          </div>
          <div className={classes.operationItem}>
            {data.operator}
          </div>
        </div>
        <div className={classes.equality}> = </div>
        <div className={classes.result}> {data.result} </div>

        <div className={classes.mainContent}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Operator</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Operator"
                      variant="outlined"
                      value={operator}
                      fullWidth
                      onChange={(e) => setOperator(e.target.value)}
                    >
                      <MenuItem value={'+'}>+</MenuItem>
                      <MenuItem value={'-'}>-</MenuItem>
                      <MenuItem value={'*'}>*</MenuItem>
                      <MenuItem value={'/'}>/</MenuItem>
                    </Select>                
                  </FormControl>
                </Grid>                
                <Grid item xs={6}>
                  <TextField
                    label="Operand"
                    type="number"
                    variant="outlined"
                    name="operand"
                    fullWidth
                    value={operand}
                    onChange={(e) => setOperand(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="contained" onClick={addOperation} className={classes.customBtn}>
                Add Operation
              </Button>
            </Grid>
          </Grid>
        </div>        
      </div>
  );
};

export default Expression;
