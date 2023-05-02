import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";

import AuthPage from './pages/AuthPage';
// import pages and components
import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Error from "./pages/Error";
import SingleExercise from "./components/SingleExercise"
import Cardio from "./components/Cardio";
import Resistance from "./components/Resistance";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { getUser } from './utilities/users-service';

import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
  <main className="App">
  {user ? (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
  <NavBar user={user} setUser={setUser} />
  <Routes>
  <Route path="/" element={<Home />} />
       <Route path="/login" element={<AuthPage setUser={setUser} />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:type/:id" element={<SingleExercise />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/cardio" element={<Cardio />} />
        <Route path="/exercise/resistance" element={<Resistance />} />
        <Route path="*" element={<Error />} />
  </Routes>
  <Footer />
  </Box>
  ) : (
  <AuthPage setUser={setUser} />
  )}
  </main>
  );
  }
  
  export default App;