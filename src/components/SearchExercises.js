import React, { useState, useEffect } from 'react';

import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { API, fetchData } from '../utils/fetchData'
import { HorizontalScrollBar , Loader } from '../components'

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState('');
  const [buttonSearch, setButtonSearch] = useState(false)
  const [bodyParts, setBodyParts] = useState([])

  const handleSearch = async () => {
    setButtonSearch(true)
    if (search) {
      const exercisesData = await fetchData(API.Exercises, 'exercises');
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search) 
        ||item.target.toLowerCase().includes(search) 
        ||item.bodyPart.toLowerCase().includes(search) 
        ||item.equipment.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
      setButtonSearch(false)
    }
    window.scrollTo({ top : 1600 , behavior : 'smooth'})
  }

  const OnEnter = (e)=>{
    e.key === "Enter" ? handleSearch() : console.log(':)')
  }

  useEffect(() => {
    const FetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${API.Exercises}/bodyPartList`, 'exercises');
      setBodyParts(["all", ...bodyPartsData])
    }
    FetchExercisesData();
  }, [])


  return (
    <Stack mt="37px" p="20px" alignItems='center' justifyContent='center'>
      <Typography mb="50px" textAlign='center' fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "fff",
            borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder="Search Exercises"
          type="text"
          onKeyDown={OnEnter}
        />
        <Button className="search-btn" sx={{
          bgcolor: "#ff2625",
          color: "#fff",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "14px" },
          height: "56px",
          position: "absolute",
          right: "0"
        }}
          onClick={handleSearch}
        >
          {buttonSearch ? <Loader color='#fff' /> : 'Search'}
        </Button>
      </Box>
      <Box sx={{ position: "relative", padding: "20px", width: "100%" }}>
        <HorizontalScrollBar bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises