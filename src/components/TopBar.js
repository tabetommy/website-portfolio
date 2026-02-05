import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function TopBar({ drawerWidth = 240 }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        left: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        m: 0,
        p: 0
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#000' }}>
          Dashboard
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
