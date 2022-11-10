import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'

import { fetchData, API } from '../utils/fetchData'

import { Details, ExerciseVideos, SimilarExercises } from '../components'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const fetchDetail = async () => {
      const exerciseDetailData = await fetchData(`${API.Exercises}/exercise/${id}`, 'exercises');
      setExerciseDetail(exerciseDetailData);

      const exercisesVideosData = await fetchData(`${API.Youtube}/search?query=${exerciseDetailData.name}`, 'youtube');
      setExerciseVideos(exercisesVideosData.contents);
      
      const targetMuscleExercisesData = await fetchData(`${API.Exercises}/target/${exerciseDetailData.target}`, 'exercises')
      setTargetExercises(targetMuscleExercisesData.slice(0,10));

      const equimentMuscleExercisesData = await fetchData(`${API.Exercises}/equipment/${exerciseDetailData.equipment}`, 'exercises')
      setEquipmentExercises(equimentMuscleExercisesData.slice(0,10));
    }
    fetchDetail();
  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentMuscleExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail