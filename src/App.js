import {useState} from 'react';
import { Box, Container, AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import { Routes, Route, Navigate, useLocation, NavLink } from 'react-router-dom';
import { drawerWidth, NavBar, MobileNavbar } from './components/NavBar';
import TopBar from './components/TopBar';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', backgroundColor: '#F0F0F0' }}>
      {/* 1. MOBILE HEADER (Hamburger) - Visible only on xs/sm */}
      <AppBar position="fixed" sx={{ display: { md: 'none' }, backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ color: '#000' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 2. SIDEBAR DRAWER (Mobile) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <MobileNavbar onLinkClick={handleDrawerToggle} />
      </Drawer>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <NavBar />
      </Box>
      <Box sx={{ flex: 1, mx: '24px', mt: '64px', display: 'flex', flexDirection: 'column' }}>

        <Box key={location.pathname} className="page" sx={{ backgroundColor: '#fff', px: 3, py: 4, borderRadius: '8px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', pb: '64px', mb: '64px' }}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
