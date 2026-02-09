import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

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
          <Button color="inherit" startIcon={<DescriptionIcon />} component="a" href="#">
            Resume
          </Button>
          <Button color="inherit" startIcon={<AssignmentTurnedInIcon />} component="a" href="#">
            Arbeitzeugnis
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
