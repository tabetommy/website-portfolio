import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>About</Typography>
      <Typography paragraph>
        Hi — I'm a developer building React apps. This is a minimal About page to show the app structure.
      </Typography>
    </Box>
  );
}
