import React from 'react';
import { Box, Typography, Grid, Paper, Chip, Container, LinearProgress } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TerminalIcon from '@mui/icons-material/Terminal';

const skillsData = [
  {
    category: "Frontend Architecture",
    icon: <DesktopWindowsIcon sx={{ color: '#09148f' }} />,
    skills: ["React", "TypeScript",  "Angular", "JQuery"],
    color: "#e3f2fd"
  },
  {
    category: "Backend & Systems",
    icon: <TerminalIcon sx={{ color: '#09148f' }} />,
    skills: ["Node.js", "Express", "REST APIs", "Docker", "PHP"],
    color: "#f3f0ff"
  },
  {
    category: "Database Design",
    icon: <StorageIcon sx={{ color: '#09148f' }} />,
    skills: ["MySQL","MongoDB", "Query Optimization"],
    color: "#e8f5e9"
  },
  // {
  //   category: "AI & Innovation",
  //   icon: <AutoAwesomeIcon sx={{ color: '#09148f' }} />,
  //   skills: ["OpenAI API", "Prompt Engineering", "Vector DBs"],
  //   color: "#fff3e0"
  // }
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ fontWeight: 800, color: '#09148f', letterSpacing: 3 }}>
          Expertise
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>
          Mein Tech-Stack
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {skillsData.map((group, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: '24px',
                border: '1px solid #eee',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(9, 20, 143, 0.1)',
                  borderColor: '#09148f',
                }
              }}
            >
              <Box sx={{ 
                display: 'inline-flex', 
                p: 1.5, 
                borderRadius: '12px', 
                bgcolor: group.color, 
                mb: 2 
              }}>
                {group.icon}
              </Box>
              
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                {group.category}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      borderRadius: '8px',
                      fontWeight: 500,
                      fontSize: '0.8rem',
                      bgcolor: 'white',
                      border: '1px solid #f0f0f0',
                      '&:hover': { bgcolor: '#09148f', color: 'white' }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}