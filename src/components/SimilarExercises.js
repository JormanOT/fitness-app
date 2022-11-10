import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar';
import { Loader } from '../components';

function SimilarExercises({ targetMuscleExercises, equipmentMuscleExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }, ml: '50px' }}>
      <Typography variant='h3' mb={5}>Exercices that <span style={{ color: '#ff2526', textTransform: 'capitalize' }}>target</span> the same muscle group</Typography>
      <Stack width='95%' direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader color='#000' />}
      </Stack>
      <Typography variant='h3' mt={5} mb={5}>Exercices that use the same muscle <span style={{ color: '#ff2526', textTransform: 'capitalize' }}>equipment</span></Typography>
      <Stack width='95%' direction='row' sx={{ p: '2', position: 'relative' }}>
        {equipmentMuscleExercises.length ?
          <HorizontalScrollBar data={equipmentMuscleExercises} /> : <Loader color='#000' />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises