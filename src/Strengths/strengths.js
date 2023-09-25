/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'components/Container';

const mock = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'ion Software Group',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Fullstack',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '01/2021 - Present',
  },
];

const Strengths = () => {
  return (
    <Container>
      <Grid >
        {mock.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{
                xs: 'column',
                md: i % 2 === 0 ? 'row-reverse' : 'row',
              }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Strengths;
