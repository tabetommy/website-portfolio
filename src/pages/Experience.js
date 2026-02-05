import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export default function Experience() {
  const items = [
    { role: 'Frontend Developer', company: 'Acme Co', years: '2021–Present', desc: 'Building UIs with React and MUI.' },
    { role: 'Frontend Engineer', company: 'Example Ltd', years: '2019–2021', desc: 'Worked on dashboards and internal tools.' }
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom>Experience</Typography>
      <List>
        {items.map((it, i) => (
          <ListItem key={i} alignItems="flex-start">
            <ListItemText primary={`${it.role} — ${it.company} (${it.years})`} secondary={<Typography paragraph sx={{ m: 0 }}>{it.desc}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
