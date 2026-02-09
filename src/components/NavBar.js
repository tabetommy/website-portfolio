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
import profile from '../assets/profile-img.jpeg';

const drawerWidth = 300;

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
          border: 'none',
          paddingLeft:'50px',
        }
      }}
    >
      <Box sx={{ height: 170, display: 'flex', alignItems: 'center', px: 2, mt: 2 }}>
        <img src={profile} alt="profile-img" style={{ height: 150, width: 'auto', borderRadius: '50%' }} />
      </Box>

      {/* decorative liner inside Drawer (below header, fades to ends) */}
      <Box sx={{
        height: '1px',
        borderRadius: '4px',
        width: '70%',
        mx: 2,
        my: 1,
        background: 'linear-gradient(90deg, rgba(100,102,105,0) 0%, rgba(100,102,105,0.95) 50%, rgba(100,102,105,0) 100%)',
        opacity: 0.95
      }} />
 
      <List sx={{ width: '70%' }}>
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
                borderLeft: '4px solid #09148f',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b', minWidth: 36 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Über"  />
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
                 borderLeft: '4px solid #09148f',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b', minWidth: 36 }}>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Projekte"  />
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
                 borderLeft: '4px solid #09148f',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b', minWidth: 36 }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Fähigkeiten"  />
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
                 borderLeft: '4px solid #09148f',
                '& .MuiListItemIcon-root': { color: '#09148f' }
              },
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
            }}
          >
            <ListItemIcon sx={{ color: '#6b6b6b', minWidth: 36 }}>
              <WorkHistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Erfahrung"  />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export { drawerWidth };

