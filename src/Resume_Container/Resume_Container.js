import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import { Typography } from '@mui/material';
import Overview from 'Overview';
import Grid_of_two from 'Grid_of_two';
import Work_experience from 'Work_experience';

const Resume_Container = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ margin: 4 }}>
      <Container>
        <Typography variant='h6' color='grey'>Cloud Resume</Typography>
      </Container>
      <Overview
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <Grid_of_two/>
      <Work_experience />
    </Box>
  );
};

export default Resume_Container;
