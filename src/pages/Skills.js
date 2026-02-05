import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Skills() {
  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'MUI'];
  return (
    <Box>
      <Typography variant="h3" gutterBottom>Skills</Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        {skills.map(s => <Chip key={s} label={s} sx={{ mb: 1 }} />)}
      </Stack>
    </Box>
  );
}
