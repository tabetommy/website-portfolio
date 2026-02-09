import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: `240`,
        width: 'calc(100% - 48px - 300px)',
        backgroundColor: '#f0f0f0',
        color: '#000',
        boxShadow: 'none',
        m: 0,
        pr: 5
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#000' }}>
          Fullstack Web-entwickler
        </Typography>
        <Box sx={{ display: 'flex',  }}>
          
           <IconButton 
            component="a" 
             href="https://www.linkedin.com/in/tommy-egbe-304464116/" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ color: '#09148f' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            component="a" 
            href="mailto:tabetommy@gmail.com"
            sx={{ color: '#09148f' }}
          >
            <EmailIcon />
          </IconButton>
          <Button 
          component="a" 
          href="/Lebenslauf.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          variant="contained" // Use contained to ensure the background is solid
          sx={{ 
            backgroundColor: '#09148f', 
            color: '#fff',
            '&:hover': {
              backgroundColor: '#070e66', // Slightly darker blue for the hover effect
            }
          }}
        >
          Lebenslauf
        </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
