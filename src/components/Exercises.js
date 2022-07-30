import React, { useEffect, useState } from 'react'
import { Pagination, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({setExercises, bodyPart, exercises}) => {
  return (
    <Box 
      id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'>
        <Typography variant="h3" mb="46px">
            <Stack
            direction="row"
            sx={{gap:{lg:'110px', x5:'50px'}}}
            flexWrap="wrap"
            justifyContent="center">
              {exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise}/> )}
            </Stack>
        </Typography>
    </Box>
  )
}

export default Exercises