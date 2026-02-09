import React from 'react';
import { 
  Box, Typography, List, ListItem, ListItemText, Stack, 
  Button, Chip, Grid, Paper, Divider, Container 
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useParams } from 'react-router-dom';
import projects  from '../data/projects.js';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === String(id));
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/projects')}
        sx={{ 
          mb: 4, 
          textTransform: 'none', 
          color: 'text.secondary',
          fontWeight: 600,
          '&:hover': { color: '#09148f', bgcolor: 'transparent', transform: 'translateX(-5px)' },
          transition: 'all 0.3s ease'
        }}
      >
        Zurück zur Projekte
      </Button>
      {/* HEADER SECTION */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: '#09148f', mb: 2 }}>
          {project.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, mb: 4 }}>
          {project.details.desc}
        </Typography>

        {/* TECH STACK CHIPS */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
          {project.stack.map((tech) => (
            <Chip 
              key={tech} 
              label={tech} 
              variant="outlined" 
              sx={{ fontWeight: 600, borderColor: '#09148f', color: '#09148f' }} 
            />
          ))}
        </Box>

        {/* ACTION BUTTONS */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<LaunchIcon />}
            href={project.demo} 
            target="_blank" 
            sx={{ bgcolor: '#09148f', borderRadius: '12px', px: 4 }}
          >
            Live Demo
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<GitHubIcon />}
            href={project.sourceCode} 
            target="_blank"
            sx={{ color: '#09148f', borderColor: '#09148f', borderRadius: '12px', px: 4 }}
          >
            Frontend Code
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<StorageIcon />}
            href={project.api} 
            target="_blank"
            sx={{ color: '#09148f', borderColor: '#09148f', borderRadius: '12px', px: 4 }}
          >
            Backend Code
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* FEATURES GRID */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>Key Features</Typography>
      
      <Grid container spacing={3}>
        {project.details.features.map((feature, index) => (
          <Grid item xs={12} key={index}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                borderRadius: '20px', 
                bgcolor: '#f8f9fa', 
                border: '1px solid #eef0f2' 
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#09148f', display: 'flex', alignItems: 'center' }}>
                <CheckCircleOutlineIcon sx={{ mr: 1 }} /> {feature.title}
              </Typography>
              
              <Grid container spacing={1}>
                {feature.items.map((item, itemIndex) => (
                  <Grid item xs={12} sm={6} key={itemIndex}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#09148f', mt: 1, mr: 2, flexShrink: 0 }} />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}



