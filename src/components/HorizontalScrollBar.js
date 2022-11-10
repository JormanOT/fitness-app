import React, { useContext } from 'react'
import { BodyPart } from '../components';
import { Box, Typography } from '@mui/material'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { ExerciseCard } from '../components';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography
      onClick={() => scrollNext()}
      className='left-arrow'>
      <img
        src={RightArrowIcon}
        alt='left-arrow' />
    </Typography>
  )
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  )
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart , isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box m="0 40px" key={item.id || item} itemID={item.id || item} title={item.id || item}>
          {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard key={item.id} exercise={item} />}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar