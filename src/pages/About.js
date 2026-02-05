import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Über mich</Typography>
      <Typography paragraph>
        Mein Weg begann in den Naturwissenschaften.
         Auch wenn ich heute Code statt Laboranalysen schreibe, bleibt der Kern gleich: Ich liebe es, komplexe Probleme methodisch zu durchdringen und die beste Lösung zu finden.
      </Typography>
      <Typography paragraph>
        Nach meiner wissenschaftlichen Laufbahn habe ich meine Leidenschaft für Systemarchitektur durch gezielte Trainings zum Beruf gemacht. 
        <br/>Heute entwickle ich Full-Stack-Anwendungen und genieße den gesamten kreativen Prozess – von der Backend-Logik bis zum ästhetischen UI-Design.
      </Typography>
      <Typography paragraph>
        Besonders fasziniert mich das Potenzial von KI-Integrationen. Mein Ziel ist es, Anwendungen durch künstliche Intelligenz intelligenter und intuitiver zu gestalten, um die Bedürfnisse der Nutzer besser zu erfüllen und echten Mehrwert im Alltag zu schaffen.
      </Typography>
    </Box>
  );
}
