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
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            component="a" 
            href="https://www.linkedin.com/in/tommy-egbe-304464116/" 
            target="_blank" 
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />} 
          >
            LinkedIn
          </Button>
          <Button color="inherit" startIcon={<AssignmentTurnedInIcon />} component="a" href="mailto:tabetommy@gmail.com">
            schreiben Sie mir
          </Button>
          <Button color="inherit" startIcon={<DescriptionIcon />} component="a" href="/Lebenslauf.pdf" target="_blank">
            Lebenslauf
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
