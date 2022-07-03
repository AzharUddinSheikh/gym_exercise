import { Box, Button, TextField, Typography, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizaontalScrollBar from './HorizaontalScrollBar';


const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
                                          exerciseOptions);
      setBodyParts(['all', ...bodyPartData]);
    }
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
                                            exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack mt='37px' p='20px' alignItems='center' justifyContent='center'>
      <Typography 
        fontWeight={700} 
        sx={{fontSize : {lg : '44px', xs: '30px'}}}
        mb='50px' textAlign='center'>
        Awsome Exercises you <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>

        <TextField 
          heigth='76px' 
          value={search} 
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}} 
          placeholder='Search Exercises'
          type='text'
          sx ={{
              input:{fontWeight:'700', border:'none', borderRadius:'4px'},
              width: {lg:'900px', xs:'350px'},
              backgroundColour:'#fff',
              borderRadius: '40px'}}
          />
          
          <Button 
            className='search-btn' 
            sx={{
                backgroundColor:'#ff2625', 
                color:'#fff', 
                textTransform:'none', 
                width:{lg:'150px', xs:'14px'}, 
                height:'56px', 
                position:'absolute'}}
            onClick={handleSearch}>
            SEARCH
          </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizaontalScrollBar 
              data={bodyParts}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}>
            </HorizaontalScrollBar>
      </Box>
    </Stack>
  )
}

export default SearchExercise