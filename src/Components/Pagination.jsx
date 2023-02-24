import React, { useState } from 'react'
import {Button, TextField, InputLabel} from '@mui/material'
import {ArrowBack , ArrowForward } from '@mui/icons-material'
import styles from './styles.module.css';

export default function Pagination(props) {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        props.setPage(parseInt(props.page) + 1);
    }
    const prevPage = () => {
        setInput(parseInt(input) - 1);
        props.setPage(parseInt(props.page) - 1);
    }

    const onKeyDown= (e) => {
        
        //la paginacion por medio del input se accionara con Enter
        if(e.keyCode === 13)
        {
        props.setPage(parseInt(e.target.value));
        if(parseInt(e.target.value) < 1 ||
           parseInt(e.target.value) > props.max ||
           isNaN(parseInt(e.target.value)))
        {
        props.setPage(1);
        setInput(1); 
        } else {
        props.setPage(parseInt(e.target.value));
        }
        }
    }

    const onChange= (e) => {
        setInput(e.target.value);
    }
  return (
    <div className={styles.container}>
    <Button
    disabled={props.page === 1 || props.page < 1}
    onClick={prevPage}
    ><ArrowBack/></Button>
    <TextField
    inputProps={{min: 0, style: { textAlign: 'center' }}}
     autoComplete='off' 
     value={input} 
     onChange={(e) => onChange(e)}   
     onKeyDown={(e) => onKeyDown(e)} 
     size="small"
     margin="dense" 
     >
     </TextField>    
    <InputLabel >de {props.max}</InputLabel>
    <Button
    disabled={props.page === props.max || props.page > props.max}
     onClick={nextPage}
     ><ArrowForward/></Button>
    </div>
  )
}
