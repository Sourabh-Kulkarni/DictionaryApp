import { ThemeProvider } from '@emotion/react';
import { MenuItem, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import './Header.css';
import categories from '../../data/category';
// debugger;
const Header = ({category,setCategory,word,setWord, LightTheme}) => {
  const darkTheme = createTheme({
      palette: {
         primary:{
             main:LightTheme? '#000' : '#fff',
         },
         mode: LightTheme? 'light' : 'dark',
      },
  });
  const handleChange = (language) => {
      setCategory(language);
      setWord("");
  }
  return (
    <div className='header'>
        <span className='title'>{word ? word : "Word-Hunt"}</span>
        <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
            <TextField
             className='search'
             id="standard-basic"
             label="Search a word"
             variant='standard' 
             value={word}
             onChange={(e)=>setWord(e.target.value)} />
            <TextField
              select
              className='select'
              label="language"
             variant='standard' 
              value={category}
              onChange={(e)=>handleChange(e.target.value)}
            >
                {categories.map((option)=>(
                    <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                ))}
            </TextField>
        </ThemeProvider>
        </div>
    </div>
  )
}

export default Header