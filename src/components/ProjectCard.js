import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/projects/${project.id}`)}>
        <CardContent>
          <Typography variant="h6" gutterBottom>{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">{project.short}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
