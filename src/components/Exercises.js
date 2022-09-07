import React , { useState , useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box , Stack , Typography } from '@mui/material';

import { exercisesOptions , fetchData } from '../utils/fetchData'

import { ExerciseCard } from '../components'

const Exercises = ({exercises , setExercises , bodyPart}) => {
  console.log(exercises)
  return (
    <Box id="exercises" sx={{mt : { lg : "110px"}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{
        gap : { lg: "110px" , xs : "50px"}
      }}>
        {exercises.map((exercise ,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises