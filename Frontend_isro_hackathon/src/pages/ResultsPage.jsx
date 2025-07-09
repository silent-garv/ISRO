import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, Button, CircularProgress } from '@mui/material';
import Plot from 'react-plotly.js';

// Placeholder DEM data for visualization
const demoDEM = Array.from({ length: 50 }, (_, i) =>
  Array.from({ length: 50 }, (_, j) => Math.sin(i / 5) * Math.cos(j / 5) * 10)
);

const ResultsPage = () => {
  // Simulate download URLs (replace with real backend URLs)
  const [downloading, setDownloading] = useState({ dem: false, plots: false });

  const handleDownload = (type) => {
    setDownloading((prev) => ({ ...prev, [type]: true }));
    // Simulate download delay
    setTimeout(() => {
      // In real app, use window.open or fetch to download from backend
      // window.open(`/api/download/${type}`);
      setDownloading((prev) => ({ ...prev, [type]: false }));
      alert(`${type.toUpperCase()} download started (replace with real backend call).`);
    }, 1200);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 6,
        mb: 6,
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 800,
          color: '#4f46e5',
          letterSpacing: '0.03em',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Results & Visualization
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.97)',
              boxShadow: '0 8px 32px 0 rgba(79,70,229,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 480,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#6366f1',
                mb: 2,
                fontSize: '1.2rem',
              }}
            >
              2D DEM Heatmap
            </Typography>
            <Plot
              data={[
                {
                  z: demoDEM,
                  type: 'heatmap',
                  colorscale: 'Viridis',
                },
              ]}
              layout={{
                width: 360,
                height: 360,
                margin: { t: 40, l: 40, r: 40, b: 40 },
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.97)',
              boxShadow: '0 8px 32px 0 rgba(79,70,229,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 480,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#6366f1',
                mb: 2,
                fontSize: '1.2rem',
              }}
            >
              3D DEM Surface
            </Typography>
            <Plot
              data={[
                {
                  z: demoDEM,
                  type: 'surface',
                  colorscale: 'Viridis',
                },
              ]}
              layout={{
                width: 360,
                height: 360,
                scene: { zaxis: { title: 'Elevation' } },
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgba(0,0,0,0)',
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 2, sm: 4 },
              mt: 2,
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.97)',
              boxShadow: '0 8px 32px 0 rgba(79,70,229,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#6366f1',
                mb: 2,
                fontSize: '1.2rem',
              }}
            >
              Metrics
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', mb: 2 }}>
              RMSE: <b>2.13 meters</b>
            </Typography>
            <Box mt={2} sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDownload('dem')}
                disabled={downloading.dem}
                sx={{
                  background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px 0 rgba(79,70,229,0.08)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                    color: '#fff',
                  },
                }}
              >
                {downloading.dem ? <CircularProgress size={20} /> : 'Download DEM'}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDownload('plots')}
                disabled={downloading.plots}
                sx={{
                  background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3,
                  py: 1.2,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px 0 rgba(79,70,229,0.08)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                    color: '#fff',
                  },
                }}
              >
                {downloading.plots ? <CircularProgress size={20} /> : 'Download Plots'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultsPage;
