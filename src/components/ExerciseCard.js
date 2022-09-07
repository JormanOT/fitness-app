import React from 'react'
import { Button , Stack , Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </Link>
    )
}

export default ExerciseCard