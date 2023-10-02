import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Overview from 'Overview';
import Grid_of_two from 'Grid_of_two';
import Work_experience from 'Work_experience';
import Views from 'Views';
import Projects from 'Projects';

const Resume_Container = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ margin: 4 }}>
      <Overview
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <Grid_of_two/>
      <Work_experience />
      <Projects />
      <Views />
    </Box>
  );
};

export default Resume_Container;
