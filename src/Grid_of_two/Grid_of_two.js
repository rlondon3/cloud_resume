import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import Education_training from 'Education_training';
import Certifications from 'Certifications';

const NewsletterWithImage = () => {

  return (
    <Container>
      <Grid container spacing={4} marginBottom={5}>
        <Grid item xs={12} md={6}>
          <Box >
            <Education_training  />
          </Box>
        </Grid>
        <Grid
          item
          container spacing={2.5}
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Certifications />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsletterWithImage;
