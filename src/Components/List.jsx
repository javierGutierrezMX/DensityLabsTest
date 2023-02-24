import React, {useEffect, useState} from 'react'
import{TableRow, TableHead, TableContainer, TableBody, Table, TableCell, Button} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {get_All_Pokemons, get_Pokemon} from '../Features/Pokemons/pokemonSlice'
import {Ballot} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import Pagination from './Pagination'


export default function List() {
const[page, setPage] = useState(1);
const[perPage, setPerPage] = useState(20);

const navigate = useNavigate()
const dispatch = useDispatch();
const {allPokemons} = useSelector(state => state.pokemons)
const maxItems = Math.round(allPokemons.length / perPage);

useEffect(() => {
    dispatch(get_All_Pokemons());
},[dispatch])

const HandleDetail = async(name, goDetail) => {
    dispatch(get_Pokemon(name));
    if(goDetail === true)
    navigate(`/detail/${name}`);
}
  return (
    <>
        <TableContainer style={{ maxHeight: 900 }}>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allPokemons
                    //separamos el arreglo en paginas de 20 elementos
                    .slice((page - 1) * perPage,(page - 1) * perPage + perPage)
                    .map((p, indexedDB) =>(
                        <TableRow key={indexedDB} >
                        <TableCell onClick={() => HandleDetail(p.name, false)}>{p.name} </TableCell>
                        <TableCell><Button onClick={() => HandleDetail(p.name, true)}><Ballot/></Button></TableCell>
                        </TableRow>
                        
                    ))}
                    <Pagination page ={page} setPage={setPage} max={maxItems}/>
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}