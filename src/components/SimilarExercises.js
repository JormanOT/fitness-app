import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar';
import { Loader } from '../components';

function SimilarExercises({ targetMuscleExercises, equipmentMuscleExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3' mb={5}>Exercices that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb={5}>Exercices that use the same muscle equiment</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {equipmentMuscleExercises.length ?
          <HorizontalScrollBar data={equipmentMuscleExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises