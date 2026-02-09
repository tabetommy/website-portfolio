import React from 'react';
import { Typography, Box, Grid, Paper, Divider, Avatar, Button, Container } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        
        {/* LEFT: The "Who I Am" Hero Section */}
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" sx={{ color: '#09148f', fontWeight: 'bold', letterSpacing: 2 }}>
              Vom Labor zum Loop
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Über mich
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
             Von der Laboranalyse zur Code-Architektur: Mein wissenschaftlicher Hintergrund bildet das Fundament für meine Arbeitsweise. Diesen habe ich durch eine <b>fundierte und praxisintensive Ausbildung im Bereich Full-Stack Web Development professionalisiert </b>, sodass ich heute komplexe technische Herausforderungen mit höchster methodischer Genauigkeit löse
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              href="/Lebenslauf.pdf"
              target="_blank"
              sx={{ backgroundColor: '#09148f', px: 4, borderRadius: '8px' }}
            >
              Lebenslauf ansehen
            </Button>
          </Box>
        </Grid>

        {/* RIGHT: The "Bento" Skill Cards */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            
            {/* Card 1: Science Background */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} sx={cardStyle}>
                <ScienceIcon sx={iconStyle} />
                <Typography variant="h6" gutterBottom>Analyse</Typography>
                <Typography variant="body2" color="text.secondary">
                  Methodische Durchdringung komplexer Probleme, gelernt in der Wissenschaft.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 2: Full Stack */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} sx={cardStyle}>
                <CodeIcon sx={iconStyle} />
                <Typography variant="h6" gutterBottom>Full-Stack</Typography>
                <Typography variant="body2" color="text.secondary">
                  Von der effizienten Backend-Logik bis zum ästhetischen, sauberen UI-Design.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 3: AI Interest (Wide Card) */}
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ ...cardStyle, background: 'linear-gradient(135deg, #09148f 0%, #040a4d 100%)', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PsychologyIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">KI-Integrationen</Typography>
                </Box>
                <Typography variant="body1">
                  Mein Ziel ist es, Anwendungen durch künstliche Intelligenz intuitiver zu gestalten. 
                  Ich entwickle Software, die nicht nur funktioniert, sondern mitdenkt.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      
      <Divider sx={{ my: 8 }} />
      
      {/* Bottom Quote/Summary */}
      <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
          "Ich liebe es, komplexe Probleme methodisch zu durchdringen und die beste Lösung zu finden."
        </Typography>
      </Box>
    </Container>
  );
}

// Custom Styles for the "Bento" Cards
const cardStyle = {
  p: 3,
  height: '100%',
  borderRadius: '16px',
  border: '1px solid #e0e0e0',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    borderColor: '#09148f',
  }
};

const iconStyle = {
  fontSize: '40px',
  color: '#09148f',
  mb: 2
};