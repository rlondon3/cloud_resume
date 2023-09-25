import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import HeadShot from 'Headshot/headshot';
import { Typography } from '@mui/material';
import Strengths from 'Strengths';

const WithThreeColumns = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Typography variant='h6' color='grey'>Cloud Resume</Typography>
      </Container>
      <HeadShot
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <Box>
        <Strengths />
      </Box>
    </Box>
  );
};

export default WithThreeColumns;
