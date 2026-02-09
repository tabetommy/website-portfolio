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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';


 const navItems=[
    {to: '/about', text: 'Über mich', linkicon: <HomeIcon />,target:'_self'},
    {to: '/projects', text: 'Projekte', linkicon: <FolderIcon />,target:'_self'},
    {to: '/skills', text: 'Fähigkeiten', linkicon: <BuildIcon />,target:'_self'},
    {to: '/experience', text: 'Erfahrung', linkicon: <WorkHistoryIcon />,target:'_self'},
    { text: 'LinkedIn', to: 'https://linkedin.com/in/tommy-egbe-304464116/', linkicon: <LinkedInIcon />,target:'_blank'},
    { text: 'E-Mail', to: 'mailto:tabetommy@gmail.com', linkicon: <EmailIcon />,target:'_self'},
    { text: 'CV / Resume', to: '/Lebenslauf.pdf', linkicon: <DescriptionIcon />,target:'_blank'},
    ]


export const drawerWidth = 300;

export const NavBar=()=>{
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


const navLinkStyles = {
    color: '#000',
    my: 1,
    mx: 1,
    borderRadius: '8px',
    '&.active': {
      backgroundColor: '#fff',
      borderLeft: '4px solid #09148f',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      '& .MuiListItemIcon-root': { color: '#09148f' }
    }
  };



  // The content of your slide-in menu
  export const MobileNavbar = ({onLinkClick})=>{
   return ( <Box onClick={onLinkClick} sx={{ textAlign: 'center', height: '100%', backgroundColor: '#F0F0F0' }}>
      <List sx={{ width: '100%', pt: 4 }}>
        {
          navItems.map(item => (
            <ListItem disablePadding key={item.to}>
              <ListItemButton component={NavLink} to={item.to} sx={navLinkStyles} target={item.target}> 
                <ListItemIcon>{item.linkicon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>)
  };



