import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import useImages from '../hooks/useImages';

export default function ProjectCard({ project }) {

  const navigate = useNavigate();
  return (
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={useImages()[project.imgurl]}      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.short}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small"
        onClick={() => navigate(`/projects/${project.id}`)}
        >Learn More</Button>
      </CardActions>
    </Card>
  );
}
