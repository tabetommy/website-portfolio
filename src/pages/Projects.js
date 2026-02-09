import { Container, Typography, Box, Grid } from '@mui/material';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: '#09148f', fontWeight: 'bold', letterSpacing: 2 }}>
          Portfolio
        </Typography>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mt: 1 }}>
          Meine Projekte
        </Typography>
        <Box sx={{ width: '60px', height: '4px', bgcolor: '#09148f', mx: 'auto', mt: 2, borderRadius: 2 }} />
      </Box>

      <Grid container spacing={4}>
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
