import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 16px 0 rgba(79,70,229,0.08)',
      borderBottom: '1px solid #e0e7ff',
    }}
  >
    <Toolbar sx={{ minHeight: 72 }}>
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          fontWeight: 800,
          color: '#4f46e5',
          letterSpacing: '0.04em',
          fontSize: { xs: '1.1rem', sm: '1.4rem' },
        }}
      >
        Lunar DEM Generator
      </Typography>
      <Box>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          sx={{
            color: '#4f46e5',
            fontWeight: 600,
            mx: 0.5,
            px: 2,
            py: 1,
            borderRadius: '8px',
            '&:hover': {
              background: '#e0e7ff',
              color: '#6366f1',
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/upload"
          sx={{
            color: '#4f46e5',
            fontWeight: 600,
            mx: 0.5,
            px: 2,
            py: 1,
            borderRadius: '8px',
            '&:hover': {
              background: '#e0e7ff',
              color: '#6366f1',
            },
          }}
        >
          Upload
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/results"
          sx={{
            color: '#4f46e5',
            fontWeight: 600,
            mx: 0.5,
            px: 2,
            py: 1,
            borderRadius: '8px',
            '&:hover': {
              background: '#e0e7ff',
              color: '#6366f1',
            },
          }}
        >
          Results
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
