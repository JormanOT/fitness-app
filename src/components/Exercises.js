import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { API, fetchData } from '../utils/fetchData'

import { ExerciseCard, Loader } from '../components'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: 'smooth' })
  }

  useEffect(() => {
    const FetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(API.Exercises, 'exercises');
      } else {
        exercisesData = await fetchData(`${API.Exercises}/bodyPart/${bodyPart}`,'exercises');
      }
      setExercises(exercisesData)
    }
    FetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{
        gap: { lg: "110px", xs: "50px" }
      }}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large' />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises