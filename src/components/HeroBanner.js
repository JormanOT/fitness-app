import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import BannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box position="relative" p="20px"
      sx={{
        mt: { lg: '45px', xs: '70px' },
        ml: { sm: '50px' }
      }}>
      <Typography color="#FF2625" fontWeight='600' fontSize="26px">
        Fitness Club
      </Typography>
      <Typography mb="23px" mt="30px" fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}>
        Ejercitate, Sonrie <br /> Repite.
      </Typography>
      <Typography mb={4} fontSize="22px" lineHeight="35px">
        Mira los ejercicios más efectivos
      </Typography>
      <Button href="#exercises" variant='contained' color="error"
        sx={{
          padding: "10px",
          backgroundColor: "#ff2625"
        }}>
        Explora los Ejercicios
      </Button>
      <Typography fontWeight={600} color="#ff2625" fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none'
          }
        }}>
        EJERCITATE
      </Typography>
      <img src={BannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner