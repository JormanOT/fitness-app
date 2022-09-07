import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material'
import { NavBar, Footer } from './components';
import { Home, ExerciseDetail } from './pages';

// Theme Dark with mui Material
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const App = () => {
    const [theme, setTheme] = useState('light');
    
    const DarkTheme = createTheme({
        palette: {
            mode: theme
        }
    });
    return (
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline />
            <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
                <NavBar theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercise/:id' element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default App