import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    comapny: 'Jingwu Foundation',
    position_overview:
      'Mentor middle-school and high-school students through martial art culture and training. Teach seniors Taichi for health and phsyical well-being.'
  },
  {
    comapny: 'Python Data Science',
    position_overview:
    'Develop server-side projects using Python and Flask. Participated in Leetcode Pandas 50 Challenge. Interview, clean, and tranform data from Kaggle using Pandas, Numpy, and Matplotlib in Jupyter Notebooks.'
  },
];

const Activities = () => {
  return (
    <Box bgcolor="alternate.main">
      <Container>
        <Typography variant='h5' style={{fontWeight: 700}}>ACTIVTIES</Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            padding: 2,
            borderRadius: 2,
            boxShadow: 0,
          }}
        >
          {mock.map((item, i) => (
            <ListItem sx={{ alignItems: 'unset' }} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
              </Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.comapny}
                  secondary={item.position_dates}
                  primaryTypographyProps={{ fontWeight: 700, fontSize:'1.5rem' }}
                  secondaryTypographyProps={{ fontSize: '1rem'}}
                />
                <Box marginTop={2}>
                  <Typography variant={'subtitle2'} style={{ fontSize: '1rem'}} margin={1}> &nbsp; &bull; {item.position_overview}</Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Activities;
