import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 6 },
          width: '100%',
          textAlign: 'center',
          borderRadius: '22px',
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 32px 0 rgba(79,70,229,0.10)',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 900,
            color: '#4f46e5',
            letterSpacing: '0.03em',
            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem' },
          }}
        >
          Lunar DEM Generator
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          gutterBottom
          sx={{
            fontWeight: 500,
            fontSize: { xs: '1.1rem', sm: '1.3rem' },
            mb: 3,
          }}
        >
          Generate and visualize lunar Digital Elevation Models (DEMs) from high-resolution images using photoclinometry.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/upload')}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.15rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
              color: '#fff',
              boxShadow: '0 4px 16px 0 rgba(79,70,229,0.12)',
              '&:hover': {
                background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                color: '#fff',
              },
            }}
          >
            Start Analysis
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LandingPage;
