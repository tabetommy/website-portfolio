import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import useImages from '../hooks/useImages';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '20px', // More rounded for 2026 aesthetic
        border: '1px solid #e0e0e0',
        boxShadow: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          borderColor: '#09148f',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          }
        }
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={useImages()[project.imgurl]} 
          alt={project.title}
          sx={{ transition: 'transform 0.5s ease' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, pt: 3 }}>
        {/* Tech Stack Chips (Assuming project has a 'tags' array like ['React', 'Node']) */}
        <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.tags?.map((tag) => (
            <Chip 
              key={tag} 
              label={tag} 
              size="small" 
              sx={{ bgcolor: '#f0f2ff', color: '#09148f', fontWeight: 600, fontSize: '0.7rem' }} 
            />
          ))}
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          {project.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ 
          display: '-webkit-box', 
          WebkitLineClamp: 3, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {project.short}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate(`/projects/${project.id}`)}
          sx={{ 
            borderRadius: '10px', 
            textTransform: 'none', 
            fontWeight: 600,
            color: '#09148f',
            borderColor: '#09148f',
            '&:hover': { backgroundColor: '#09148f', color: 'white', borderColor: '#09148f' }
          }}
        >
          Details ansehen
        </Button>
      </CardActions>
    </Card>
  );
}