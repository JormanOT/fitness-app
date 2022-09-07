import React, { useContext } from 'react'
import { BodyPart } from '../components';
import { Box, Typography } from '@mui/material'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

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

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box m="0 40px" key={item.id || item} itemId={item.id || item} title={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar