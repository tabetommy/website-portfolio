import {useEffect} from 'react';
import { Box, Container } from '@mui/material';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar, { drawerWidth } from './components/NavBar';
import TopBar from './components/TopBar';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

export default function App() {
  const location = useLocation();



  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', backgroundColor: '#F0F0F0' }}>
      <NavBar />
      <TopBar /> 
      <Box sx={{ flex: 1, mx: '24px', mt: '64px', display: 'flex', flexDirection: 'column' }}>

        <Box key={location.pathname} className="page" sx={{ backgroundColor: '#fff', px: 3, py: 4, borderRadius: '8px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pb: '64px', mb: '64px' }}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
