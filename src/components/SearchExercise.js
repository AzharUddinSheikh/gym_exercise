import { Box, Button, TextField, Typography, Stack } from '@mui/material'
import React, { useState } from 'react'


const SearchExercise = () => {

  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();
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
    </Stack>
  )
}

export default SearchExercise