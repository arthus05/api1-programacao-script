import React, { ChangeEvent, useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme: Theme) => ({
  variable: {
    margin: 10
  },

  submit: {
    margin: 10
  }
})
);

function App() {
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState<number>()
  const [variable, setVariable] = useState<number>()
  const classes = useStyles();

  useEffect(() => {
    console.log(result)
  }, [result])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    if (variable !== undefined) {
      if (equation === 'afim') {
        setResult(variable + 1)
      }
      else if (equation === 'quadratica') {
        setResult(variable * variable + variable + 1)
      }
      else if (equation === 'logaritma') {
        setResult(Math.log10(variable))
      }
      else if (equation === 'exponencial') {
        setResult(Math.exp(variable))
      }
    }
  }

  const handleEquationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEquation((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVariable(parseFloat((event.target as HTMLInputElement).value))
  }

  return (
    <div className="App">

      <header>
        <h1>AP1 - Programação Script</h1>
        <h3>Arthus Vinícius Cruz de Moura - 473223</h3>
      </header>

      <div className='content'>

        <form onSubmit={handleSubmit}>

          <FormControl component="fieldset">
            <FormLabel className="radio-title" component="legend" >Equações</FormLabel>
            <RadioGroup className="radio-container" aria-label="gender" name="gender1" value={equation} onChange={handleEquationChange}>
              <FormControlLabel value="afim" control={<Radio />} label="x + 1" />
              <FormControlLabel value="quadratica" control={<Radio />} label="x² + x + 1" />
              <FormControlLabel value="logaritma" control={<Radio />} label="log(x)" />
              <FormControlLabel value="exponencial" control={<Radio />} label="e^x" />
            </RadioGroup>

            <TextField className={classes.variable} label='Variável' variant='outlined' onChange={handleChange} />

            <Button className={classes.submit} type="submit" variant="outlined" color="primary">
              Calcular
            </Button>
          </FormControl>

        </form>

        <section className='result'>
          <p>{result}</p>
        </section>
      </div>
    </div>

  );
}

export default App;
