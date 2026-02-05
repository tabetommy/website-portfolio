import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link as RouterLink, NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function NavBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          color: '#000',
          border: 'none'
        }
      }}
    >
      <Box sx={{ height: 64, display: 'flex', alignItems: 'center', px: 2 }}>
        <Typography variant="h6" component={RouterLink} to="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>
          Portfolio
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/about"
            sx={{
              color: '#000',
              my: 1,
              mx: 1,
              borderRadius: '8px',
              '&.active': {
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/projects"
            sx={{
              color: '#000',
              my: 1,
              mx: 1,
              borderRadius: '8px',
              '&.active': {
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b' }}>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/skills"
            sx={{
              color: '#000',
              my: 1,
              mx: 1,
              borderRadius: '8px',
              '&.active': {
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b' }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={NavLink}
            to="/experience"
            sx={{
              color: '#000',
              my: 1,
              mx: 1,
              borderRadius: '8px',
              '&.active': {
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b' }}>
              <WorkHistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export { drawerWidth };

