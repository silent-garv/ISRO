import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, Paper, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [metadata, setMetadata] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMetadataChange = (e) => {
    setMetadata(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !metadata) {
      setError('Please provide both image and metadata.');
      return;
    }
    // TODO: Send to backend API
    navigate('/results');
  };

  return (
    <Container
      maxWidth="sm"
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
          p: { xs: 3, sm: 5 },
          width: '100%',
          borderRadius: '22px',
          background: 'rgba(255,255,255,0.97)',
          boxShadow: '0 8px 32px 0 rgba(79,70,229,0.10)',
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
            mb: 2,
          }}
        >
          Upload Lunar Image & Metadata
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{
                  background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  py: 1.3,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px 0 rgba(79,70,229,0.08)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                    color: '#fff',
                  },
                }}
              >
                Upload Image
                <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              </Button>
              {image && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: '#6366f1',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {image.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Metadata (JSON)"
                multiline
                minRows={4}
                fullWidth
                value={metadata}
                onChange={handleMetadataChange}
                placeholder='{"sun_azimuth": 135, "sun_elevation": 45, ...}'
                sx={{
                  background: '#f1f5f9',
                  borderRadius: '10px',
                }}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: '#ef4444',
                    fontWeight: 600,
                    textAlign: 'center',
                    mt: 1,
                  }}
                >
                  {error}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  py: 1.3,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px 0 rgba(79,70,229,0.08)',
                  mt: 1,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
                    color: '#fff',
                  },
                }}
              >
                Submit & Analyze
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UploadPage;
