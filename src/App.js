import React from "react";
import './App.css'
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../src/pages/Home';
import ExerciseDetail from '../src/pages/ExerciseDetail';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';


function App() {
  return (
    <Box width="400px">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
