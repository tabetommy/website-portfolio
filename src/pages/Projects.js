import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>Projects</Typography>
      <Grid container spacing={2}>
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
