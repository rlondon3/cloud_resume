import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';
import HeadShot from 'Headshot/headshot';
import { Typography } from '@mui/material';
import Strengths from 'Strengths';

const ChildMock = () => {
  const theme = useTheme();
  return (
    <Box
      width={1}
      height={1}
      minHeight={{ xs: 400, md: 800 }}
      borderRadius={2}
      border={`2px solid ${theme.palette.divider}`}
      sx={{
        borderStyle: 'dashed',
      }}
    />
  );
};

const WithThreeColumns = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container maxWidth={1} paddingY={{ xs: 1, sm: 1.5 }}>
        <Typography variant='h6' color='grey'>Cloud Resume</Typography>
      </Container>
      <HeadShot
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <main>
        <Box height={{ xs: 58, sm: 66, md: 71 }} />
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto">
              <Box p={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Strengths />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ChildMock />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default WithThreeColumns;
