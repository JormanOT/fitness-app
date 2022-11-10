import React from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button variant="contained" color="error" sx={{
                    ml: '21px',
                    color: '#fff',
                    backgroundColor: '#ad1e1e',
                    fontSize: '14px',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                }}>
                    {exercise.bodyPart}
                </Button>
                <Button variant="contained" color="primary" sx={{
                    ml: '21px',
                    color: '#fff',
                    backgroundColor: '#0b4987',
                    fontSize: '14px',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                }}>
                    {exercise.target.length > 15 ? `${exercise.target.slice(0,15)}...` : exercise.target}
                </Button>
            </Stack>
                <Typography ml='21px' mt='11px' pb='10px' fontWeight='bold' textTransform='capitalize' color='#000' fontSize='22px'>
                    {exercise.name}
                </Typography>
        </Link>
    )
}

export default ExerciseCard