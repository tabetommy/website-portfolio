import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import projects from '../data/projects';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { List, ListItem, ListItemText } from '@mui/material';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === String(id));

  if (!project) {
    return <Typography>Project not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h3" gutterBottom>{project.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>{project.short}</Typography>
      <Typography paragraph>{project.details.desc}</Typography>
      <List sx={{ mb: 2 }}> {/* mb: 2 matches the default paragraph margin */}
        {
          project.details.features.map((feature, index) => (
            <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', ml: 4 }}>
              <ListItemText primary={feature} />
            </ListItem>
          ))
        }
      </List>
      <Typography variant="subtitle2" gutterBottom>Tech:</Typography>
      <Typography paragraph>{project.tech.join(', ')}</Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" component="a" href={project.demo} target="_blank" rel="noreferrer">View Demo</Button>
        <Button variant="contained" component="a" href={project.sourcecode} target="_blank" rel="noreferrer">View Source Code</Button>
        {/* <Button variant="outlined" component={RouterLink} to="/projects">Back</Button> */}
      </Stack>
    </Box>
  );
}
