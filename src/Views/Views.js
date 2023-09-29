import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';


const mock = [
  {
    label: 'Total Views',
    value: ''
  },
];

const Views = () => {
  const [count, setCount] = useState(null);
  const lambdaFunctionURL = 'https://wc324vjfcuqt3d6srmcvudxmbe0babyc.lambda-url.us-east-1.on.aws/';

  async function updateCounter() {
    let res = await fetch(lambdaFunctionURL);
    let data = await res.json();
    setCount(data);
    mock[0].value = count;
  }

  useEffect(() => {   
    if (count) {
      mock[0].value = count;
    } else {
      updateCounter();
    }
  }, [count]);

  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Grid container spacing={0}>
          {mock.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              md={4}
            >
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <Box>
                  <Typography gutterBottom>{item.label}</Typography>
                  <Typography
                    variant={'h4'}
                    color={'primary'}
                    fontWeight={700}
                    display={'flex'}
                    alignItems={'flex-end'}
                    lineHeight={1}
                  >
                    {count}
                  </Typography>
                </Box>
                
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Views;
